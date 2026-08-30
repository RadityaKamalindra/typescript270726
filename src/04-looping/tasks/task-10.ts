/**
 * LMS menyimpan informasi pengiriman tugas pada array di bawah ini.
 * Aturan Bisnis
 * -Siswa yang tidak menyerahkan otomatis mendapat skor 0.
 * -Skor kelulusan adalah 75.
 * -Tugas yang diserahkan dengan skor di bawah 75 perlu direvisi.
 * 
 * Tugas Siswa menggunakan loop untuk:
 * -Hitung siswa yang menyerahkan tugasnya.
 * -Hitung siswa yang tidak menyerahkan.
 * -Hitung siswa yang lulus.
 * -Hitung siswa yang harus merevisi tugasnya.
 * -Menampilkan nama siswa yang tidak menyerahkan.
 * -Menampilkan nama siswa yang harus merevisi.
 * -Hitung nilai rata-rata kelas.
 */

const submissions = [
  { student: "Alya", submitted: true, score: 92 },
  { student: "Budi", submitted: false, score: 0 },
  { student: "Citra", submitted: true, score: 78 },
  { student: "Dimas", submitted: true, score: 65 },
  { student: "Eka", submitted: false, score: 0 },
  { student: "Fajar", submitted: true, score: 84 },
  { student: "Gita", submitted: true, score: 90 },
  { student: "Hana", submitted: true, score: 73 },
];

let submittedCount = 0;
let notSubmittedCount = 0;
let passedCount = 0;
let reviseCount = 0;

let notSubmittedStudents: string[] = [];
let reviseStudents: string[] = [];

let totalScore = 0;

for (let i = 0; i < submissions.length; i++) {
  const student = submissions[i];

  totalScore += student.score;

  if (student.submitted) {
    submittedCount++;

    if (student.score >= 75) {
      passedCount++;
    } else {
      reviseCount++;
      reviseStudents.push(student.student);
    }
  } else {
    notSubmittedCount++;
    notSubmittedStudents.push(student.student);
  }
}

const averageScore = totalScore / submissions.length;

console.log("Jumlah siswa yang menyerahkan:", submittedCount);
console.log("Jumlah siswa yang tidak menyerahkan:", notSubmittedCount);
console.log("Jumlah siswa yang lulus:", passedCount);
console.log("Jumlah siswa yang harus revisi:", reviseCount);

console.log("Siswa yang tidak menyerahkan:", notSubmittedStudents);
console.log("Siswa yang harus revisi:", reviseStudents);

console.log("Nilai rata-rata kelas:", averageScore);


