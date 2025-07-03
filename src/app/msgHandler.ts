import { Client, ContactId, Message } from "@open-wa/wa-automate";
import { color, parsingPhoneNumber } from "@/utils";
import prisma from "@/config/prisma";
import { addCustomReminder } from "./reminderHandler";
import fetcher from "@/utils/fetcher";

export const msgHandler = async (syaki: Client, message: Message) => {
  try {
    let { body } = message;
    console.log(color("[MESSAGE]", "#00FF00"), body);

    const isCommand = body.startsWith("!");
    const command = isCommand ? body.slice(1).trim().split(/ +/).shift() : null;
    const args = isCommand ? body.slice(1).trim().split(/ +/).slice(1) : [];
    const q = args.join(" ");
    const commandName = command ? command.toLowerCase() : null;

    switch (command) {
      case "help":
        await syaki.reply(
          message.from,
          `------[ SYAKI VIRTUAL ASSISTANT ]------

❏  *!start*
┌  Mulai notifikasi kelas
└  Contoh: *!start*

❏  *!stop*
┌  Hentikan notifikasi kelas.
└  Contoh: *!stop*

❏  *!reminder* <hari>|<jam>|<kegiatan>
┌  Pengingat kegiatan anda pada hari dan jam tertentu.
└  Contoh: *!reminder Senin|08:00|Belajar Matematika*

❏  *!listsemester*
┌  Tampilkan daftar semester yang tersedia.
└  Contoh: *!listsemester*

❏  *!krs* <semester>
┌  Tampilkan Kartu Rencana Studi (KRS) untuk semester tertentu.
└  Contoh: *!krs 3*

❏  *!tanya* <pertanyaan>
┌  Ajukan pertanyaan.
└  Contoh: *!tanya Kapan kelas Matematika?*

❏  *!reset*
┌  Hapus riwayat chat dengan bot, digunakan untuk mereset history chat untuk command *!tanya*.
└  Contoh: *!reset*

❏ *!help*
┌  Tampilkan daftar perintah yang tersedia.
└  Contoh: *!help*


`,
          message.id
        );
        break;
      case "start":
        let user_id = args[0];
        if (!user_id) {
          const from = parsingPhoneNumber(message.from);
          const findUser = await prisma.user.findFirst({
            where: {
              no_whatsapp: {
                contains: from,
              },
            },
          });

          if (findUser) {
            user_id = findUser.id;
          } else {
            await syaki.reply(
              message.from,
              `Mohon maaf, anda belum terdaftar. Silakan lakukan pendaftaran terlebih dahulu melalui tautan berikut: *${process.env.FRONTEND_URL}/auth/signup*`,
              message.id
            );
            return;
          }
        }
        const user = await prisma.user.findUnique({ where: { id: user_id } });
        if (user) {
          await prisma.user.update({
            where: { id: user_id },
            data: {
              is_notify: true,
              is_saved: true,
            },
          });
          await syaki.reply(
            message.from,
            `Terima kasih sudah melakukan registrasi nomor WhatsApp anda, ${user.nama}! Sekarang anda akan mendapatkan notifikasi 15 menit sebelum kelas dimulai.

Anda juga dapat menjelajahi fitur lainnya dengan mengirimkan pesan *!help* untuk melihat daftar perintah yang tersedia.`,
            message.id
          );
        } else {
          await syaki.reply(
            message.from,
            `Mohon maaf, data anda tidak ditemukan. Silakan lakukan pendaftaran terlebih dahulu melalui tautan berikut: *${process.env.FRONTEND_URL}/auth/signup*`,
            message.id
          );
        }
        break;
      case "stop":
        const fromNumber = parsingPhoneNumber(message.from);

        const userToStop = await prisma.user.findFirst({
          where: {
            no_whatsapp: {
              contains: fromNumber,
            },
          },
        });
        console.log(color("[USER]", "#00FF00"), userToStop);
        if (userToStop) {
          await prisma.user.update({
            where: { no_whatsapp: userToStop.no_whatsapp! },
            data: {
              is_notify: false,
            },
          });
          await syaki.reply(
            message.from,
            `Notifikasi kelas telah dihentikan. 
            Anda akan berhenti menerima notifikasi kelas, ${userToStop.nama}.
            Jika ingin melanjutkan notifikasi, silakan kirim pesan *!start*`,
            message.id
          );
        } else {
          await syaki.reply(
            message.from,
            `Anda belum terdaftar. Silakan lakukan pendaftaran terlebih dahulu melalui tautan berikut: *${process.env.FRONTEND_URL}/auth/signup*`,
            message.id
          );
        }
        break;
      case "reminder":
        if (!q.includes("|")) {
          await syaki.reply(
            message.from,
            `Format salah. Gunakan format: *!reminder <hari>|<jam>|<kegiatan>*\nContoh: *!reminder Senin|08:00|Belajar Matematika*`,
            message.id
          );
          return;
        }
        let [day, time, activity] = q.split("|").map((item) => item.trim());
        // if time is not in HH:mm format, return error
        const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
        if (!timeRegex.test(time)) {
          await syaki.reply(
            message.from,
            `Format jam salah. Gunakan format: *HH:mm*\nContoh: *08:00*`,
            message.id
          );
          return;
        }
        if (!day || !time || !activity) {
          await syaki.reply(
            message.from,
            `Format salah. Gunakan format: *!reminder <hari>|<jam>|<kegiatan>*\nContoh: *!reminder Senin|08:00|Belajar Matematika*`,
            message.id
          );
          return;
        }

        await addCustomReminder(message.from, day, time, activity);
        await syaki.reply(
          message.from,
          `Pengingat telah ditambahkan untuk hari *${day}* pada jam *${time}* dengan kegiatan: *${activity}*`,
          message.id
        );
        break;
      case "tanya":
        if (!q) {
          await syaki.reply(
            message.from,
            `Silakan ajukan pertanyaan anda dengan format: *!tanya <pertanyaan>*\nContoh: *!tanya apa itu MBKM?*`,
            message.id
          );
          return;
        }

        // Here you can implement the logic to handle the question
        await syaki.reply(
          message.from,
          `Pertanyaan anda: *${q}* telah diterima. Kami akan segera memberikan jawaban. Tunggu sebentar...`,
          message.id
        );

        // get 10 chat from sender number
        const senderNumber = parsingPhoneNumber(message.from);
        const latestMessages = await syaki.getAllMessagesInChat(
          message.from as ContactId,
          true,
          false
        );

        //  get only the last 10 messages
        const filteredMessages = latestMessages.slice(-10).map((msg) => {
          let role = "user";
          if (process.env.VA_NAME == msg.sender.pushname) {
            role = "assistant";
          }
          return {
            role: role,
            content: msg.body,
          };
        });

        // get user data
        const userContent = await prisma.user.findFirst({
          where: {
            no_whatsapp: {
              contains: senderNumber,
            },
          },
          include: {
            semester: {
              include: {
                kelas: true,
              },
            },
          },
        });

        if (!userContent) {
          await syaki.reply(
            message.from,
            `Mohon maaf, anda belum terdaftar. Silakan lakukan pendaftaran terlebih dahulu melalui tautan berikut: *${process.env.FRONTEND_URL}/auth/signup*`,
            message.id
          );
          return;
        }

        await requestAssistant(filteredMessages, userContent)
          .then(async (response) => {
            if (response && response.text) {
              await syaki.reply(message.from, response.text, message.id);
            } else {
              await syaki.reply(
                message.from,
                `Maaf, saya tidak dapat memberikan jawaban untuk pertanyaan anda saat ini.`,
                message.id
              );
            }
          })
          .catch(async (error) => {
            console.error("Error in requestAssistant:", error);
            await syaki.reply(
              message.from,
              `Maaf, terjadi kesalahan saat memproses pertanyaan anda. Silakan coba lagi nanti.`,
              message.id
            );
          });
        break;
      case "reset":
        await syaki.reply(
          message.from,
          `Riwayat chat dengan Virtual Assistant telah dihapus. `,
          message.id
        );
        await syaki.clearChat(message.from as ContactId);
        break;
      case "krs":
        if (!q) {
          await syaki.reply(
            message.from,
            `Silakan masukkan semester yang ingin ditampilkan KRS-nya dengan format: *!krs <semester>*\nContoh: *!krs Genap 2023/2024*`,
            message.id
          );
          return;
        }

        const semester = q.trim();
        const userKelas = await prisma.user.findFirst({
          where: {
            no_whatsapp: {
              contains: parsingPhoneNumber(message.from),
            },
          },
          include: {
            semester: {
              where: {
                nama: Number(semester),
              },
              include: {
                kelas: true,
              },
            },
          },
        });

        if (!userKelas) {
          await syaki.reply(
            message.from,
            `Mohon maaf, anda belum terdaftar. Silakan lakukan pendaftaran terlebih dahulu melalui tautan berikut: *${process.env.FRONTEND_URL}/auth/signup*`,
            message.id
          );
          return;
        }

        if (userKelas.semester.length === 0) {
          await syaki.reply(
            message.from,
            `KRS untuk semester *${semester}* tidak ditemukan. Pastikan anda telah memasukkan semester yang benar.`,
            message.id
          );
          return;
        }

        const kelasList = userKelas.semester[0].kelas.map((kelas) => {
          return `*${kelas.mata_kuliah}*\nHari: *${
            kelas.hari.charAt(0).toUpperCase() + kelas.hari.slice(1)
          }*\nJam: *${new Date(kelas.waktu_mulai).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })} - ${new Date(kelas.waktu_selesai).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}*\nRuang: *${kelas.ruang}*\nDosen: *${kelas.dosen}*\n\n`;
        });

        const krsMessage = `Kartu Rencana Studi (KRS) untuk semester *${semester}*:\n\n${kelasList.join(
          ""
        )}`;
        await syaki.reply(message.from, krsMessage, message.id);
        break;
      case "listsemester":
        const semesters = await prisma.semester.findMany({
          where: {
            user: {
              no_whatsapp: parsingPhoneNumber(message.from),
            },
          },
          orderBy: { nama: "desc" },
          include: {
            kelas: true,
          },
        });
        if (semesters.length === 0) {
          await syaki.reply(
            message.from,
            `Tidak ada semester yang tersedia saat ini.`,
            message.id
          );
          return;
        }
        const semesterList = semesters.map((semester) => {
          return `Semester *${semester.nama}* - ${semester.kelas.length} kelas\n`;
        });
        const semesterMessage = `Daftar semester yang tersedia:\n\n${semesterList.join(
          ""
        )}`;
        await syaki.reply(message.from, semesterMessage, message.id);
        break;
      default:
        if (isCommand) {
          await syaki.reply(
            message.from,
            `Perintah tidak dikenali. Silakan gunakan *!help* untuk melihat daftar perintah yang tersedia.`,
            message.id
          );
        }
    }
  } catch (error) {
    console.error("Error in msgHandler:", error);
  }
};

const requestAssistant = async (messages: any[], userContent: any) => {
  try {
    const response = await fetcher(process.env.API_URL + "/chat/bot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        messages: messages,
        userContent,
      },
    });

    return response;
  } catch (error) {
    console.error("Error in requestAssistant:", error);
    throw new Error("Failed to get response from assistant");
  }
};
