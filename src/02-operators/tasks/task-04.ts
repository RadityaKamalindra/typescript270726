/**
 * Sebuah toko online sedang memproses keranjang belanja pelanggan.
 * Pelanggan membeli:
 * 
 * | Produk |  Harga | Kuantitas |
 * | ------------------- | -----: | -------: |
 * | Keyboard Mekanik | 850000 |        1 |
 * | Mouse Nirkabel | 275000 |        2 |
 * | Alas Tetikus | 120000 |        1 |
 * 
 * Aturan Bisnis:
 * -Pelanggan mendapat diskon 10% jika total pembelian melebihi Rp1.000.000.
 * -Hanya anggota Premium yang menerima pengiriman gratis.
 * -Setiap produk yang dibeli meningkatkan total penghitung item.
 * 
 * Informasi Tambahan: Pelanggan saat ini adalah anggota Premium.
 * 
 * Task:
 *  -Hitung subtotalnya.
 *  -Hitung total barang yang dibeli menggunakan operator kenaikan.
 *  -Tentukan apakah diskon harus diterapkan.
 *  -Hitung pembayaran akhir.

 */

type produk = {
  name: string;
  price: number;
  quantity: number;
}

type customer = {
  premium: boolean;
}

const hm: customer = {
  premium: true
}

const keyboard: produk = {
  name: "keyboard mekanik",
  price: 850000,
  quantity: 1
};

const mouse: produk = {
  name: "mouse nirkabel",
  price: 275000,
  quantity: 2
};

const mousepad: produk = {
  name: "Alas Tetikus",
  price: 120000,
  quantity: 1
}

const subtotal: number =
  (keyboard.price * keyboard.quantity) +
  (mouse.price * mouse.quantity) +
  (mousepad.price * mousepad.quantity);

const totalbeli: number =
  keyboard.quantity +
  mouse.quantity +
  mousepad.quantity;


const diskon: number = subtotal > 100000 ? subtotal * 0.1 : 0;

console.log("subtotal = " + subtotal)
console.log("total beli = " + totalbeli);
console.log("diskon = " + diskon)


if (hm.premium = false) {
  console.log("total akhir = " + (subtotal - diskon));
} else {
  console.log("total akhir = " + (subtotal - diskon) + " + ongkir boss karena lu ga prem");
}
  




