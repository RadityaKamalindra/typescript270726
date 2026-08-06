/**
 * SMK Telkom Malang sedang menyiapkan daftar kelulusan siswa Kelas 12. Seorang siswa berhak untuk lulus hanya jika semua persyaratan berikut dipenuhi:

 * -Skor akhir minimal 75
 * -Kehadiran minimal 90%
 * -Semua biaya sekolah telah dibayar
 * 
 * Pihak administrasi menerima informasi siswa sebagai berikut.
 * | Informasi | Nilai |
 * | ------------ | ---------- |
 * | Nama Siswa | Alya Putri |
 * | Skor Akhir | 82 |
 * | Kehadiran | 94 |
 * | Uang Kuliah Dibayar | Ya |
 * 
 * Tasks:
 * 1. Deklarasikan semua variabel yang diperlukan.
 * 2. Implementasikan keputusan menggunakan pernyataan if.
 * 3. Tampilkan pesan yang sesuai. jika siswa memenuhi semua persyaratan, 
 * akan muncul tampilan "Selamat! Anda berhak lulus.", 
 * jika tidak, tampilkan "Anda tidak memenuhi syarat untuk lulus".
 */

const nama: string = "Alya Putri"
const skor: number = 82
const kehadiran: number = 94
const UKT: boolean = true

console.log("Nama Siswa : ", nama)
console.log("Skor Akhir : ", skor)
console.log("Kehadiran : ", kehadiran, "%")
console.log("Apakah Uang Kuliah Dibayar? ", UKT)

if (skor > 75 && kehadiran > 90 && UKT == true) {
    console.log("\nSelamat! Anda berhak Lulus")
} else {
    console.log("\nAnda tidak memenuhi syarat untuk lulus");
}