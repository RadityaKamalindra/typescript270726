/**
 * Seorang guru ingin menghitung nilai akhir siswa secara otomatis. Daripada menulis rumus yang sama berkali-kali, guru meminta pengembang untuk membuat fungsi yang dapat digunakan kembali.
 * Nilai akhir dihitung menggunakan rumus berikut:
 * - Assignment: 30%
 * -Ujian Tengah Semester : 30%
 * -Ujian Akhir: 40%
 * 
 * Tiga siswa mempunyai nilai sebagai berikut:
 * | Siswa | Tugas | Tengah Semester | Akhir |
 * | ------- | ---------: | ------: | ----: |
 * | alia |         85 |      80 |    92 |
 * | Budi |         78 |      75 |    81 |
 * | Citra |         90 |      88 |    95 |
 * 
 * Fungsi tersebut harus mengembalikan nilai akhir yang dihitung.
 * Tugas Siswa:
 * 1. Buat fungsi bernama hitungFinalGrade.
 * 2. Fungsi tersebut harus menerima:
 *  -skor tugas
 *  -skor tengah semester
 *  -nilai ujian akhir
 * 3. Kembalikan nilai akhir.
 * 4. Memanggil fungsi untuk setiap siswa.
 * 5. Menampilkan nilai akhir setiap siswa.

 */

function hitungFinalGrade( assignment: number, uts: number, uas: number): number {
  const finalGrade = assignment * 0.3 + uts * 0.3 + uas * 0.4;

  return finalGrade;
}

// Nilai siswa
const alia = hitungFinalGrade(85, 80, 92);
const budi = hitungFinalGrade(78, 75, 81);
const citra = hitungFinalGrade(90, 88, 95);

// Menampilkan nilai akhir
console.log("Nilai akhir Alia:", alia);
console.log("Nilai akhir Budi:", budi);
console.log("Nilai akhir Citra:", citra);
