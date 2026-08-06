/**
 * Unit gawat darurat rumah sakit harus menentukan tingkat prioritas setiap pasien yang datang.
 * Rumah sakit mengikuti aturan berikut:
 * 1. Jika kondisi pasien kritis segera ditempatkan di Unit Gawat Darurat.
 * 2. Sebaliknya, jika pasien mempunyai janji:
 *  -Pasien lanjut usia (usia ≥ 60) mendapat Antrean Prioritas.
 *  -Pasien lain mendapat Antrian Reguler.
 * 3. Otherwise:
 *  -Pasien dengan asuransi kesehatan ditugaskan ke Loket Pendaftaran Asuransi.
 *  -Pasien tanpa asuransi ditempatkan di Loket Pendaftaran Umum.
 * 
 * Informasi pasien hari ini:
 * | Informasi | Nilai |
 * | ------------------ | ---------- |
 * | Nama Pasien | Siti Rahma |
 * | Kondisi Kritis | Tidak |
 * | Memiliki Janji | Ya |
 * | Usia | 67 |
 * | Memiliki Asuransi | Ya |
 * 
 * Tasks: 
 * 1. Deklarasikan semua variabel yang diperlukan.
 * 2. Menerapkan alur kerja rumah sakit menggunakan pernyataan bersyarat.
 * 3. Tampilkan tujuan pasien.
 */

const nama: string = "Siti Rahma"
const kritis: boolean = false
const janji: boolean = true
const usia: number = 67
const asuransi: boolean = true

if (kritis) {
    console.log("Langsung mlebu UGD ae lek")
} else if (janji) {
    console.log(usia >= 60 ? "Silahkan ke antrian prioritas" : "Silahkan ke antrian reguler")
} else {
    console.log(asuransi ? "Segera ke loket pendaftaran asuransi" : "Segera ke loket pendaftaran umum")
}

