import { Client, ChatId } from "@open-wa/wa-automate";
import { color, convertDayToNumber, formatTime } from "@/utils";
import { getUserKelasFromJson } from "@/models/userModel";
import fetcher from "@/utils/fetcher";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const classReminder = async (syaki: Client) => {
  console.log(color("[TASK]", "#00FF00"), "Running classReminder...");
  const userKelas = await getUserKelasFromJson();

  if (userKelas) {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const currentHour = now.getHours(); // Get the current hour
    const currentMinute = now.getMinutes(); // Get the current minute

    userKelas.forEach((user) => {
      // console.log("\n\n\n\n", color("[USER]", "#00FF00"), user.userName);
      user.lastSemester.forEach((semester) => {
        semester.classes.forEach((kelas) => {
          const startDate = new Date(kelas.startTime);
          const startDay = convertDayToNumber(kelas.day);
          const reminderTime = new Date(startDate);
          reminderTime.setMinutes(reminderTime.getMinutes() - 15);

          // console.log("\n\nHARI: ", currentDay);
          // console.log("HOUR: ", currentHour);
          // console.log("MENIT: ", currentMinute);
          // console.log("BOT HARI: ", startDay);
          // console.log("BOT JAM: ", reminderTime.getUTCHours());
          // console.log("BOT Menit: ", reminderTime.getUTCMinutes());

          if (
            currentDay === startDay && // Check if today is the class day
            reminderTime.getUTCHours() === currentHour && // Check if the hour matches
            reminderTime.getUTCMinutes() === currentMinute // Check if the minute matches
          ) {
            sendReminder(syaki, user.phoneNumber, kelas).catch((error) => {
              console.error(
                color("[ERROR]", "red"),
                "Error sending reminder:",
                error
              );
            });
          }
        });
      });
    });
  }
};

const sendReminder = async (syaki: Client, phoneNumber: string, kelas: any) => {
  const chatId: ChatId = phoneNumber as ChatId;
  console.log("Sending....");

  let message;
  // try {
  //   message = await fetcher(`${process.env.API_URL}/reminder`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: {
  //       kelas,
  //       query: "reminder",
  //     },
  //   });
  // } catch (error) {
  message = {
    text: `*Tung Tung Tung KELASSSSSSS .......*\n
Pengingat Kelas untuk hari *${
      kelas.day.charAt(0).toUpperCase() + kelas.day.slice(1)
    }*:
- *Kelas:* ${kelas.subject}
- *Dosen:* ${kelas.lecturer}
- *Waktu mulai:* ${formatTime(new Date(kelas.startTime))}
- *Waktu selesai:* ${formatTime(new Date(kelas.endTime))}
- *Ruangan:* ${kelas.room}\n
Jangan lupa datang ke kelas!`,
  };
  // }

  await syaki.sendText(chatId, message.text).catch((error) => {
    console.error(
      color("[ERROR]", "red"),
      "Error sending reminder message:",
      error
    );
  });
};

const customReminder = async (syaki: Client) => {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const currentHour = now.getHours(); // Get the current hour
  const currentMinute = now.getMinutes(); // Get the current minute

  console.log(
    color("[TASK]", "#00FF00"),
    "Running customReminder...",
    `Current time: ${currentDay} ${currentHour}:${currentMinute}`
  );
  const _dir = JSON.parse(
    fs.readFileSync("./src/database/reminder.json", "utf-8")
  );

  if (_dir.length > 0) {
    _dir.forEach((reminder: any) => {
      if (
        reminder.day === currentDay && // Check if today is the reminder day
        reminder.time.split(":")[0] == currentHour && // Check if the hour matches
        reminder.time.split(":")[1] == currentMinute // Check if the minute matches
      ) {
        sendCustomReminder(
          syaki,
          reminder.from,
          reminder.day,
          reminder.time,
          reminder.activity
        ).catch((error) => {
          console.error(
            color("[ERROR]", "red"),
            "Error sending custom reminder:",
            error
          );
        });
      }
    });
  }
};

const addCustomReminder = async (
  from: any,
  day: string,
  time: string,
  activity: string
) => {
  const dayNumber =
    convertDayToNumber(day) !== -1 ? convertDayToNumber(day) : 0;

  const obj = {
    from,
    day: dayNumber,
    time: time,
    activity,
  };
  let _dir = JSON.parse(
    fs.readFileSync("./src/database/reminder.json", "utf-8")
  );
  _dir.push(obj);
  fs.writeFileSync(
    "./src/database/reminder.json",
    JSON.stringify(_dir, null, 2)
  );
};

const sendCustomReminder = async (
  syaki: Client,
  from: string,
  day: number,
  time: string,
  activity: string
) => {
  const chatId: ChatId = from as ChatId;
  const convertedDay = convertDayToNumber(day);

  const message = `*Pengingat Kegiatan*\n\nHari: ${convertedDay}\Jam: ${time}\nKegiatan: ${activity}`;

  await syaki.sendText(chatId, message).catch((error) => {
    console.error(
      color("[ERROR]", "red"),
      "Error sending custom reminder message:",
      error
    );
  });

  // Remove the reminder from the file after sending
  let _dir = JSON.parse(
    fs.readFileSync("./src/database/reminder.json", "utf-8")
  );

  _dir = _dir.filter(
    (reminder: any) =>
      !(
        reminder.from === from &&
        reminder.day === convertDayToNumber(day) &&
        reminder.time === time &&
        reminder.activity === activity
      )
  );
  fs.writeFileSync(
    "./src/database/reminder.json",
    JSON.stringify(_dir, null, 2)
  );

  console.log(
    color("[REMINDER]", "#00FF00"),
    "Custom reminder sent and removed from the list."
  );
};

export {
  classReminder,
  sendReminder,
  addCustomReminder,
  sendCustomReminder,
  customReminder,
};
