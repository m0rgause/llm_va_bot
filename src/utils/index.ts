import chalk from "chalk";
import moment from "moment-timezone";
import { ConfigObject } from "@open-wa/wa-automate";
moment.tz.setDefault("Asia/Jakarta").locale("id");

const color = (text: string, color: string) => {
  return !color ? chalk.green(text) : chalk.hex(color)(text);
};

const isUrl = (url: string) => {
  return url.match(
    new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi
    )
  );
};

const formattingPhoneNumber = (number: string) => {
  const phoneNumber = number.replace(/[^0-9]/g, "");
  let formattedNumber;

  if (phoneNumber.startsWith("0")) {
    // return `62${phoneNumber.slice(1)}`;
    formattedNumber = phoneNumber.replace(/^0/, "62");
  } else if (phoneNumber.startsWith("+62")) {
    // return phoneNumber.replace("+62", "62");
    formattedNumber = phoneNumber.replace("+62", "62");
  } else if (phoneNumber.startsWith("62")) {
    // return phoneNumber;
    formattedNumber = phoneNumber;
  } else {
    // return number;
    formattedNumber = number;
  }
  return `${formattedNumber}@c.us`;
};

const parsingPhoneNumber = (number: string) => {
  // from this 6285881861075@c.us to 8585881861075 without country code or 0 on the front
  if (number.includes("@c.us")) {
    number = number.replace("@c.us", "");
  }
  const phoneNumber = number.replace(/[^0-9]/g, "");
  let parsedNumber;

  if (phoneNumber.startsWith("+62")) {
    parsedNumber = phoneNumber.replace("+62", "0");
  } else if (phoneNumber.startsWith("62")) {
    parsedNumber = phoneNumber.replace("62", "0");
  } else {
    parsedNumber = phoneNumber;
  }

  return parsedNumber;
};

const processTime = (timestamp: number, now: number) => {
  return moment.duration(now - moment(timestamp * 1000).valueOf()).asSeconds();
};

const formatTime = (date: Date) => {
  date.setHours(date.getUTCHours()); // Adjust for UTC+7 timezone
  date.setMinutes(date.getUTCMinutes()); // Adjust for UTC+7 timezone

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

const options = (start: any): ConfigObject => {
  return {
    sessionId: "SYAKI_BOT",
    headless: true,
    qrTimeout: 0,
    authTimeout: 0,
    restartOnCrash: start,
    cacheEnabled: false,
    useChrome: true,
    killProcessOnBrowserClose: true,
    throwErrorOnTosBlock: false,
    chromiumArgs: [
      "--no-sandbox", // means no sandboxing, which is a security feature that isolates processes from each other
      "--disable-setuid-sandbox", // disables the setuid sandbox, which is a security feature that allows processes to run with elevated privileges
      "--aggressive-cache-discard", // aggressively discards cache to free up memory
      "--disable-cache", // disables caching, which can speed up loading times
      "--disable-application-cache", // disables the application cache, which is a feature that allows web applications to store data locally
      "--disable-offline-load-stale-cache", // disables loading stale cache when offline
      "--disk-cache-size=0", // sets the disk cache size to 0, which means no caching will be done on disk
    ],
  };
};

// Message filter
const usedCommanadRecently = new Set();

const isFiltered = (from: string) => {
  return !!usedCommanadRecently.has(from);
};

const addFilter = (from: string) => {
  usedCommanadRecently.add(from);
  setTimeout(() => {
    usedCommanadRecently.delete(from);
  }, 5 * 1000); // 5 seconds
};

const convertDayToNumber = (day: any) => {
  const days: Record<string, number> = {
    senin: 1,
    selasa: 2,
    rabu: 3,
    kamis: 4,
    jumat: 5,
    sabtu: 6,
    minggu: 0,
  };
  const daysNumbers: Record<number, string> = {
    1: "Senin",
    2: "Selasa",
    3: "Rabu",
    4: "Kamis",
    5: "Jumat",
    6: "Sabtu",
    0: "Minggu",
  };

  if (typeof day === "number") {
    return daysNumbers[day] !== undefined ? daysNumbers[day] : -1;
  } else if (typeof day === "string") {
    const lowerCaseDay = day.toLowerCase();
    return days[lowerCaseDay] !== undefined ? days[lowerCaseDay] : -1;
  }
};

export {
  color,
  isUrl,
  processTime,
  options,
  isFiltered,
  addFilter,
  formattingPhoneNumber,
  convertDayToNumber,
  formatTime,
  parsingPhoneNumber,
};
