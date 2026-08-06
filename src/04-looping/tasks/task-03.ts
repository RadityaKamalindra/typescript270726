/**
 * Seorang dosen ingin merangkum hasil ujian untuk 20 mahasiswa.
 * Nilai ujian disimpan dalam array berikut:
 * ---------------------------------------
 * const scores = [
 * 82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76
 * ]
 * ---------------------------------------
 * 
 * Aturan Bisnis
 * -Skor kelulusan adalah 75.
 * -Hitung berapa banyak siswa yang lulus.
 * -Hitung berapa banyak siswa yang gagal.
 * -Hitung skor total.
 * -Hitung skor rata-rata.
 * 
 * Tasks: 
 * 1. Ulangi setiap skor menggunakan satu putaran.
 * 2. Gunakan pernyataan kondisional untuk menentukan lulus/gagal.
 * 3. Calculate:
 * -Skor keseluruhan
 * -Skor rata-rata
 * -Jumlah siswa yang lulus
 * -Jumlah siswa yang gagal
 */

const skor: number[] = [82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76]
let lulus: number = 0
let gagal: number = 0
let Total: number = 0


for (let i = 0; i <= 20; i++) {
    if (skor[i] >= 75) {
        lulus++
    } else {
        gagal++
    }

    for (const total of skor) { 
        Total += total
    }    
}

let rata: number = (Total / 20)

console.log("Jumlah siswa lulus : ", lulus)
console.log("Jumlah siswa gagal : ", gagal)
console.log("Total nilai siswa : ", Total)
console.log("Rata Rata nilai siswa : ", rata)
