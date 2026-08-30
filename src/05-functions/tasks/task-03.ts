/**
 * Sebuah toko online menyimpan harga produk dalam susunan di bawah ini.
 * Departemen keuangan perlu menghitung jumlah total pembelian.
 * Daripada menghitung total secara langsung di program utama, buatlah fungsi yang dapat digunakan kembali.
 * Fungsi tersebut harus mengembalikan harga total.
 * Tugas Siswa
 * 1. Buat fungsi bernama hitungTotalPrice.
 * 2. Fungsi menerima serangkaian harga.
 * 3. Gunakan loop untuk menghitung totalnya.
 * 4. Kembalikan harga total.
 * 5. Tampilkan nilai yang dikembalikan.
 */

const prices = [
    250000,
    180000,
    95000,
    420000,
    125000
];

function HTP() {
    let tal = 0
    for (const total of prices) {
        tal += total
    }

    console.log(tal)
}

HTP()