/**
 * Penyedia Layanan Internet merekomendasikan paket internet berdasarkan penggunaan data bulanan pelanggan.
 * Aturan Bisnis
 * | Penggunaan Bulanan | Paket Rekomendasi |
 * | ---------------- | ------------------- |
 * | Kurang dari 50GB | Dasar |
 * | 50–150 GB | Standar |
 * | Lebih dari 150 GB | Premium |
 * 
 * Pelanggan saat ini telah menggunakan:
 * | Informasi | Nilai |
 * | ------------- | ------------ |
 * | Nama Pelanggan | Raka Saputra |
 * | Penggunaan Bulanan | 124GB |
 * 
 * Tasks:
 * 1. Deklarasikan semua variabel.
 * 2. Menerapkan aturan bisnis menggunakan if...else if...else.
 * 3. Tampilkan paket yang direkomendasikan.
 */

const penggunaan: number = 124

if (penggunaan < 50) {
    console.log("Direkomendasikan Paket Dasar")
} else if (50 < penggunaan && penggunaan < 150) {
    console.log("Direkomendasikan Paket Standart")
} else {
    console.log("Direkomendasikan Paket Premium")
}