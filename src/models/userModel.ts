import prisma from "@/config/prisma";
import fs from "fs/promises";
import { formattingPhoneNumber, color } from "@/utils";

export interface UserKelas {
  userId: string;
  userName: string;
  phoneNumber: string;
  lastSemester: {
    semesterId: string;
    semesterName: string;
    classes: {
      classId: string;
      subject: string;
      day: string;
      startTime: string;
      endTime: string;
      room: string;
      lecturer: string;
    }[];
  }[];
}

export const getUserKelas = async (): Promise<UserKelas[]> => {
  const lastSemesters = await prisma.user.findMany({
    include: {
      semester: {
        orderBy: { nama: "desc" },
        take: 1,
        include: { kelas: true },
      },
    },
  });

  // format data untuk disimpan ke file json
  const formattedData: UserKelas[] = lastSemesters.map((user) => ({
    userId: user.id,
    userName: user.nama,
    phoneNumber: formattingPhoneNumber(user.no_whatsapp!),
    lastSemester: user.semester.map((semester) => ({
      semesterId: semester.id,
      semesterName: String(semester.nama),
      classes: semester.kelas.map((kelas) => ({
        classId: kelas.id,
        subject: kelas.mata_kuliah,
        day: String(kelas.hari),
        startTime: kelas.waktu_mulai.toISOString(),
        endTime: kelas.waktu_selesai.toISOString(),
        room: kelas.ruang,
        lecturer: kelas.dosen,
      })),
    })),
  }));

  // simpan data ke file json
  await fs.writeFile(
    "src/database/lastSemesters.json",
    JSON.stringify(formattedData, null, 2),
    "utf-8"
  );

  console.log(
    color("[USER KELAS]", "#00FF00"),
    color("Data user kelas berhasil disimpan ke file JSON", "#FF00FF")
  );

  return formattedData;
};

export const getUserKelasFromJson = async (): Promise<UserKelas[] | null> => {
  try {
    const data = await fs.readFile("src/database/lastSemesters.json", "utf-8");
    return JSON.parse(data) as UserKelas[];
  } catch (error) {
    console.error(
      color("[ERROR]", "red"),
      "Error reading user kelas from JSON file:",
      error
    );
    return null;
  }
};
