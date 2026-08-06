/**
 * Sebuah hotel menghitung pembayaran tamu berdasarkan informasi berikut.
 * | Informasi | Nilai |
 * | -------------------- | ------ |
 * | Harga Kamar per Malam | 650000 |
 * | Malam Menginap | 4 |
 * | Biaya Layanan | 120000 |
 * | Pajak | 11% |
 * | Anggota VIP | Ya |
 * 
 * Aturan Bisnis
 * -Tamu VIP menerima diskon kamar sebesar 12%.
 * -Pajak dihitung setelah diskon.
 * -Biaya layanan tidak didiskon.
 * -Hotel juga menawarkan sarapan gratis jika tamu menginap minimal 3 malam atau merupakan anggota VIP.
 * 
 * Sistem harus menghitung:
 * -Subtotal ruangan
 * -Diskon
 * -Pajak
 * -Pembayaran terakhir
 * -Apakah tamu berhak mendapatkan sarapan gratis
 */

const harga: number = 650000
const malam: number = 4
const layanan: number = 120000
const pajak: number = 0.11
const VIP: boolean = true

const diskon: number = (VIP == true) ? harga * 0.12 : 0 

const MBG: string = (malam > 3 || VIP === true) ? "Dapat MBG Pagi" : "Ga Dapet MBG kyk Moklet"

console.log("Subtotal nyahhh : " + ((harga * malam) + layanan))
console.log("Diskon : " + (diskon))
console.log("Pajak : " + pajak)
console.log("<---]========>")
console.log("Total Akhir : " + ((harga * malam - diskon) + ((harga * malam - diskon) * pajak) + layanan))
console.log("Apakah dapat MBG pagi? " + MBG)

