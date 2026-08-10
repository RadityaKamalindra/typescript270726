/**
 * Gudang memeriksa pesanan pelanggan sebelum dikirim berdasarkan susunan di bawah ini.
 * 
 * Aturan Bisnis
 * Pesanan siap dikirim hanya jika:
 * -Pembayaran telah selesai.
 * -Stok tersedia.
 * 
 * Tugas Siswa:
 * Ulangi setiap pesanan dan hitung:
 * -Jumlah pesanan yang siap dikirim
 * -Jumlah pesanan yang belum dibayar
 * -Jumlah pesanan menunggu stok
 * -Menampilkan semua ID pesanan yang siap dikirim
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let siap: number = 0
let nunggak: number = 0
let waitbarang: number = 0

for (const a of orders) {
  if (a.paid && a.stockAvailable) {
    siap++
    console.log("ID : ", a.id)
  } else if (!a.paid) {
    nunggak++
  } else if (!a.stockAvailable) {
    waitbarang++
  }
}

console.log("Siap dikirim : ", siap)
console.log("Blom Dibayar :", nunggak)
console.log("Nunggu Stok Barang :",waitbarang)