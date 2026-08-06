/**
 * Kompetisi pemrograman menyimpan skor peserta dalam susunan berikut.
 * 
 * 
 * Peraturan Kompetisi
 * Medali Emas: skor ≥ 95
 * Medali Perak : skor 85–94
 * Medali Perunggu : skor 75–84
 * Tanpa Medali: di bawah 75
 * 
 * 
 * Tugas Siswa
 * Dengan menggunakan loop, hitung:
 * -Jumlah pemenang Medali Emas
 * -Jumlah pemenang Medali Perak
 * -Jumlah pemenang Medali Perunggu
 * -Jumlah siswa tanpa medali
 * -Skor kompetisi rata-rata
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let emas: number = 0
let perak: number = 0
let perunggu: number = 0
let yahahagadue: number = 0
let total: number = 0

for (let i = 0; i <= 20; i++) {
    if (scores[i] >= 95) {
        emas++
    } else if (scores[i] >= 85) {
        perak++
    } else if (scores[i] >= 75) {
        perunggu++
    } else if (scores[i] <= 75){
        yahahagadue++
    }

    for (const a of scores) {
        total += a
    }
}
let rata: number = (total / 20)


console.log("Jumlah peraih medali Emas : ", emas)
console.log("Jumlah peraih medali Perak : ", perak)
console.log("Jumlah peraih medali Perunggu : ", perunggu)
console.log("Jumlah tanpa medali : ", yahahagadue)
console.log("Rata Rata : " , rata)