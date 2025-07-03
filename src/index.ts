import { create, Client } from "@open-wa/wa-automate";
import { color, options } from "@/utils";
import { getUserKelas } from "@/models/userModel";
import { msgHandler } from "./app/msgHandler";
import { classReminder, customReminder } from "./app/reminderHandler";
import dotenv from "dotenv";
dotenv.config();

if (process.env.NODE_ENV === "production") {
  console.log(
    color("[ENV]", "#00FF00"),
    color("Environment is set to development", "#FF00FF")
  );
  console.log = function () {};
}

const start = async (syaki: Client) => {
  console.log(color("[SYAKI]", "#FFFF00"), color("Bot is running", "#FF00FF"));
  console.log(
    color("[DEV]", "#00FFFF"),
    color("Welcome to Universitas Syaki Virtual Assistant", "#FF00FF")
  );

  syaki.onStateChanged((state) => {
    console.log(color("[STATE]", "#00FF00"), color(state, "#FF00FF"));
    if (state === "CONFLICT") syaki.forceRefocus();
    if (state === "UNPAIRED") syaki.forceRefocus();
    if (state === "UNLAUNCHED") syaki.forceRefocus();
  });

  syaki.onAck((x) => {
    const { to } = x;
    if (x.ack !== 3) syaki.sendSeen(to);
  });

  syaki.onMessage((message) => {
    msgHandler(syaki, message);
  });

  // setInterval(async () => {
  //   try {
  //     console.log(color("[TASK]", "#00FF00"), "Running getUserKelas...");
  //     await getUserKelas();
  //     console.log(color("[SUCCESS]", "#00FF00"), "getUserKelas completed.");
  //   } catch (error) {
  //     console.error(color("[ERROR]", "red"), "Error in getUserKelas:", error);
  //   }
  // }, 1800000); // Update every 30 minutes

  setInterval(async () => {
    if (process.env.NODE_ENV !== "production") {
      await getUserKelas();
    }
    await classReminder(syaki);
    await customReminder(syaki);
    console.log("\n\n\n");
  }, 60000); // Check reminders every minute
};

create(options(start))
  .then((syaki) => start(syaki))
  .catch((error) => {
    console.error(color("[ERROR]", "red"), error);
  });
