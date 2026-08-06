/**
 * Sebuah perusahaan manufaktur memantau mesin produksi secara terus menerus.

Aturan Bisnis

Jika mesin dimatikan:

Tampilan Mesin Offline.

Jika tidak, periksa kondisi pengoperasiannya.

Jika suhu mesin melebihi 90°C:

Jika tingkat getaran Tinggi, tampilkan:
Shutdown Darurat
Otherwise:
Diperlukan Pendinginan

Jika suhunya 90°C atau lebih rendah:

Jika kecepatan produksi di bawah 80%, tampilkan:
Peringatan Kinerja
Otherwise:
Mesin Beroperasi Normal

Status mesin hari ini:
| Informasi | Nilai |
| ---------------- | ----- |
| Dinyalakan | Ya |
| Suhu | 95 |
| Getaran Tinggi | Tidak |
| Kecepatan Produksi | 92 |

Tugas Siswa
-Deklarasikan semua variabel.
-Terjemahkan setiap aturan bisnis ke dalam pernyataan bersyarat.
-Menampilkan status mesin akhir.
 */

const dinyalakan: boolean = true
const suhu: number = 95
const getaranT = false
const kecepatan: number = 92

console.log("Mesin dinyalakan : ", dinyalakan)
console.log("Suhu : ", suhu)
console.log("Getaran tinggi : ", getaranT)
console.log("Kecepatan produksi : ", kecepatan)
console.log()

if (!dinyalakan) {
    console.log("Mesin Offline anjai")
} else {
    if (suhu >= 90) {
        if (getaranT) {
            console.log("Shutdown Darurat")
        } else {
            console.log("Diperlukan Pendinginan")
        }
    } else {
        if (kecepatan < 80) {
            console.log("Peringatan Pekerja");
        } else {
            console.log("Mesin Beroperasi Normal")
        }    
    }
}