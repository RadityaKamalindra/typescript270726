/*
 * Sebuah toko online ingin menganalisis transaksi penjualan hari ini.
 * Setiap jumlah transaksi disimpan dalam array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 *
 * Tugas siswa dalam menghitung:
 * 1. Total pendapatan penjualan
 * 2. Transaksi tertinggi
 * 3. Transaksi terendah
 * 4. Jumlah transaksi senilai Rp300.000 atau lebih
 * 5. Rata-rata nilai transaksi
 */

const sales = [
  125000, 350000, 78000, 910000, 150000, 420000, 275000, 99000, 640000, 18000,
];

let lebih: number = 0
let Total: number = 0
let terendah: number = 0;
let tertinggi: number = 0;

for (let i = 0; i <= 20; i++) {
  if (sales[i] >= 300000) {
    lebih++;
  }

  for (const total of sales) {
    Total += total;
    }

    for (const angka of sales) {
        if (angka > tertinggi) {
            tertinggi = angka
        } else{
            terendah = angka
        }
    }
}

let rata: number = Total / 10;

console.log("Total pembelian : ", Total);
console.log("Transaksi Tertinggu : ", tertinggi);
console.log("Transaksi Terendah : ", terendah);
console.log("Jumlah transaksi senilai Rp300.000 atau lebih : ", lebih);
console.log("Rata Rata nilai siswa : ", rata);