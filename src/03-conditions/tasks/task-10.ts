/**
 * Universitas mengizinkan mahasiswanya mendaftar untuk kursus pemrograman lanjutan hanya jika mereka memenuhi semua persyaratan akademik.

Proses Pendaftaran

Langkah 1 — Status Akademik
Siswa harus:
 -Terdaftar secara aktif.
 -Telah menyelesaikan pembayaran uang sekolah.

Jika salah satu persyaratan tidak terpenuhi:
Pendaftaran Ditolak

Jika tidak, lanjutkan.

Langkah 2 — Persyaratan Akademik
Siswa harus:
-Lulus Dasar-Dasar Pemrograman.
-Lulus Sistem Basis Data.
-Memiliki IPK minimal 3,20.
Jika persyaratan ini terpenuhi, lanjutkan.
Otherwise:
Persyaratan Akademik Tidak Terpenuhi

Langkah 3 — Ketersediaan Kursi
Jika kursi masih tersedia:
-Pendaftaran Berhasil
Otherwise:
-Ditambahkan ke Daftar Tunggu

Informasi Siswa:
| Informasi | Nilai |
| ------------------------------- | ----------- |
| Nama Siswa | Nadia Putri |
| Siswa Aktif | Ya |
| Uang Kuliah Dibayar | Ya |
| Lulus Dasar-Dasar Pemrograman | Ya |
| Sistem Database Lulus | Ya |
| IPK | 3.45 |
| Kursi Tersedia | Tidak |

Tugas Siswa
-Deklarasikan semua variabel.
-Menerapkan alur kerja pendaftaran.
-Gunakan pernyataan kondisional bersarang.
-Menampilkan hasil akhir pendaftaran.
 */

const nama: string = "Nadia Putri"
const siswa: boolean = true
const UKT: boolean = true
const PPLG: boolean = true
const SawitDB: boolean = true
const IPK: number = 3.45
const slot: boolean = false

console.log("Nama Mahasiswa : ", nama)
console.log("Siswa Aktif : ", siswa)
console.log("Uang Kuliah Dibayar : ", UKT)
console.log("PPLG Lulus : ", PPLG)
console.log("Database Lulus", SawitDB)
console.log("IPK : ", IPK)
console.log("Kursi Tersedia : ", slot)

function StepA(aktif: boolean, UKT: boolean): boolean {
    return aktif && UKT
}

function StepB(PPLG: boolean, DB: boolean, IPK: number): boolean {
    return PPLG && DB && IPK > 3.20
}

function StepC(kursi: boolean): boolean {
    return kursi
}

function selek(): void {
    if (StepA(siswa, UKT)) {
        StepB
    } else {
        console.log("Pendataran Ditolak")
    }

    if (StepB(PPLG, SawitDB, IPK)) {
        StepC
    } else {
        console.log("Persyaratan Akademik Tidak Terpenuhi")
    }

    if (StepC(slot)) {
        console.log("\nPendaftaran Berhasil")
    } else {
        console.log("\nDitambahkan ke Daftar Tunggu")
    }
}

selek()