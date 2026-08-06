/**
 * Sebuah pusat perbelanjaan mempunyai gedung parkir dengan:
 * -5 lantai
 * -Setiap lantai berisi 20 tempat parkir
 * 
 * Sistem manajemen parkir ingin menampilkan setiap lokasi parkir dengan format sebagai berikut:
 * ------------------------------
 * Lantai 1 -Slot 1
 * Lantai 1 -Slot 2
 * ...
 * Lantai 1 -Slot 20
 * 
 * Lantai 2 -Slot 1
 * Lantai 2 -Slot 2
 * ...
 * 
 * Lantai 5 -Slot 20
 * ------------------------------
 * 
 * Tasks:
 *  -Gunakan loop for bersarang.
 *  -Menampilkan setiap lokasi parkir.
 *  -Cetak baris kosong setelah setiap lantai.
 */

for (let i = 1; i <= 5; i++) {
    console.log()
    for (let j = 1; j <= 20; j++) {
        console.log(`Lantai ${i} - Slot ${j}`)
    }
}