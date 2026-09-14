/**
 * Pasar online ingin menghitung pembayaran akhir pelanggan dan poin reward setelah checkout.
 * Pelanggan membeli barang-barang berikut:
 * | Produk |  Harga | Kuantitas |
 * | ------------------- | -----: | -------: |
 * | Keyboard Mekanik | 850000 |        1 |
 * | Mouse Nirkabel | 275000 |        2 |
 * | Dudukan Monitor | 420000 |        1 |
 * 
 * Informasi Pelanggan:
 * | Informasi | Nilai |
 * | ----------------- | -------------------------------- |
 * | Nilai Voucher | 100.000 |
 * | Anggota Premium | Ya |
 * | Tingkat Poin Hadiah | 1 poin untuk setiap pembelanjaan Rp50.000 |
 * 
 * Aturan Bisnis:
 * -Anggota premium menerima diskon 10%.
 * -Voucher dipotong setelah diskon keanggotaan.
 * -Poin Reward dihitung dari pembayaran akhir sebelum pajak.
 * -PPN sebesar 11%.
 * -Gratis ongkos kirim tersedia jika:
 * -Anggota premium ATAU
 * -Pembayaran akhir sebelum pajak melebihi Rp1.500.000.
 * 
 * Sistem checkout harus menghitung:
 * -Subtotal produk
 * -Diskon keanggotaan
 * -Pengurangan voucher
 * -Pembayaran sebelum pajak
 * -PPN
 * -Pembayaran terakhir
 * -Poin hadiah
 * -Kelayakan pengiriman gratis

 */

type product = {
    produk: string
    harga: number
    kuantitas: number
}

type pelanggan = {
    voucher: number
    prem: boolean
    poin: number
}


const keyboard: product = {
    produk: "Keyboard Mekanik",
    harga: 850000,
    kuantitas: 1
};

const tikos: product = {
  produk: "Mouse Nirkabel",
  harga: 275000,
  kuantitas: 2,
};

const dudukan: product = {
  produk: "Dudukan Monitor",
  harga: 420000,
  kuantitas: 1,
};

const subtotal: number = (keyboard.harga + tikos.harga + dudukan.harga)

const customer: pelanggan = {
    voucher: 100000,
    prem: true,
    poin: subtotal / 50000
}

const diskon: number = (customer.prem) ? subtotal * 0.1 : 0

const COD: string = (customer.prem || ((subtotal - diskon) - customer.voucher) > 1500000) ? "Luwh Free COD" : "yahaha ga free COD"

console.log("Subtotallllllllllllllllllll : ", subtotal)
console.log("Diskon Keanggotaan : ", diskon)
console.log("Punya Voucher : ", customer.voucher)
console.log("Total sebelum pajak : ", ((subtotal - diskon) - customer.voucher))
console.log("Pajaxxxxxxxxxxxxxxxxx : ", (((subtotal - diskon) - customer.voucher) * 0.11));
console.log("Pembayaran Akhieeeeeeeeeerrrrrrrrrrrrrrrrrrrr : ", ((subtotal - diskon) - customer.voucher) + (((subtotal - diskon) - customer.voucher) * 0.11))
console.log("Poinzzyyy : ", customer.poin)
console.log("Free COD : ", COD)


