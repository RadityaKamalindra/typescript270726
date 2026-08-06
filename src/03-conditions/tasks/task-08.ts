/**
 * Maskapai penerbangan secara otomatis menentukan status check-in penumpang.
 * Aturan Bisnis
 * Langkah 1
 * Jika penumpang belum melakukan check in online, tampilkan:
 * "Harap selesaikan check-in online terlebih dahulu.""
 * 
 * Jika tidak, lanjutkan.
 * Langkah 2
 * Jika berat bagasi melebihi 20 kg:
 * -Kelas Bisnis → Bagasi tambahan diperbolehkan.
 * -Kelas Ekonomi → Diperlukan biaya bagasi tambahan.
 * 
 * Otherwise:
 * Lanjutkan ke pencetakan boarding pass.
 * 
 * Informasi Penumpang
 * | Informasi | Nilai |
 * | --------------- | ------------- |
 * | Penumpang | Fajar Nugroho |
 * | Check-in Online | Ya |
 * | Kelas Kabin | Ekonomi |
 * | Berat Bagasi | 24kg |
 * 
 * Tugas Siswa
 * 1. Deklarasikan semua variabel.
 * 2. Menerapkan proses pengambilan keputusan maskapai penerbangan.
 * 3. Tampilkan pesan yang benar.
 */

const penumpang: string = "Fajar Nugroho"
const check: boolean = true
const kelas: string = "Ekonomi"
const berat: number = 24

console.log("Nama Penumpang", penumpang);
console.log("Check-in : ", check);
console.log("Kelas kabin : ", kelas);
console.log("Berat bagasi : ", berat, "kg");
console.log()

if (!check) {
    console.log("Harap selesaikan check-in online terlebih dahulu");
} else {
    if (berat > 20) {
        if (kelas == "Ekonomi") { 
            console.log("Diperlukan biaya bagasi tambahan");
        } else {
            console.log("Bagasi Tambahan Diperbolehkan")
        }
            
    } else {
        console.log (" Lanjut ke boarding pass")
    }
}



