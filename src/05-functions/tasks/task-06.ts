/**
 * Sebuah toko online ingin membuat dashboard penjualan harian. Semua jumlah transaksi disimpan dalam array.
 * Daripada menulis satu program panjang, tim pengembangan memutuskan untuk membagi perhitungan menjadi fungsi-fungsi yang dapat digunakan kembali.
 * Dasbor harus menampilkan:
 * -Jumlah penjualan
 * -Transaksi tertinggi
 * -Transaksi terendah
 * -Rata-rata transaksi
 * -Jumlah transaksi di atas Rp500.000
 * 
 * Tugas Siswa
 * Buat fungsi berikut:
 */

import { push } from "node:stream/iter";

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {

  let a = 0
  for (const b of sales) {
    a += b
  }
  
  return a

}
 
function findHighestTransaction(sales: number[]): number {

  let h = sales[0]

  for (let i = 0; i < sales.length; i++) {
    if (sales[i] > h) {
      h = sales[i]
    }
  }

  return h

}

function findLowestTransaction(sales: number[]): number {
  let l = sales[0]

  for (let i = 0; i < sales.length; i++) {
    if (sales[i] < l) {
      l = sales[i]
    }
  }

  return l
}


function calculateAverageSale(sales: number[]): number {

  let MeThink = 0
  for (let a of sales) {
    a += MeThink
  }
  return MeThink/sales.length
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  let g = 0

  for (const o of sales) {
    if (o >= minimumAmount) {
      g++
    }
  }

  return g
  

}

function ll(sales: number[]): void {
  console.log(`jumlah : ${calculateTotalSales(sales)}`);
  console.log(`tertinggi : ${findHighestTransaction(sales)}`);
  console.log(`terendah : ${findLowestTransaction(sales)}`);
  console.log(`Rata Rata : ${calculateAverageSale(sales)}`)
  console.log(`diatas 500k : ${countLargeTransactions(sales, 500000)}`)
}

ll(sales)