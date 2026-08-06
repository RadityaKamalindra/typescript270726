/**
 * Sebuah perusahaan mengevaluasi karyawannya setiap bulan.
 * Jika skor kinerja seorang karyawan 80 atau lebih, mereka menerima bonus kinerja.
 * Jika tidak, mereka tidak menerima bonus.
 * Informasi karyawan:
 * | Informasi | Nilai |
 * | ----------------- | ------------- |
 * | Nama Karyawan | Dimas Pratama |
 * | Skor Kinerja | 78 |
 * 
 * Tasks:
 * 1. Deklarasikan variabelnya.
 * 2. Gunakan pernyataan if...else.
 * 3. Menampilkan hasil evaluasi. Jika memenuhi syarat akan muncul tulisan “Bonus Disetujui”, 
 * jika tidak tampilkan "Bonus tidak disetujui"
 */

const nama: string = "Dimas Pratama"
const skor: number = 85
const gaji: number = 2000000

console.log("Nama Karyawan : ", nama)
console.log("Skor Kinerja : ", skor)
console.log("Gaji awal : ", gaji)

if (skor > 80) {
    console.log("\nBonus Disetujui");
    console.log("Gaji : ", gaji + 200000)
} else {
    console.log("\nBonus tidak disetujui")
}
