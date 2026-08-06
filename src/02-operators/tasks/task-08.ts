/**
 * Rumah pintar memantau penggunaan listrik setiap hari.
 * Informasi hari ini:
 * | Informasi | Nilai |
 * | ------------------------- | ----- |
 * | Meteran Sebelumnya | 25640 |
 * | Meteran Arus | 25892 |
 * | Harga Listrik per kWh | 1650 |
 * | Panel Surya Terpasang | Ya |
 * | Mode Hemat Energi | Tidak |
 * 
 * Aturan Bisnis
 * -Pemakaian listrik dihitung dari selisih meter.
 * -Rumah dengan panel surya mendapat diskon 20%.
 * -Rumah menerima diskon tambahan 5% jika Mode Hemat Energi diaktifkan.
 * -Sebuah rumah memenuhi syarat untuk Program Energi Hijau hanya jika:
 *      -Panel surya sudah terpasang
 *      -Konsumsi energi di bawah 300 kWh
 *      -Mode Hemat Energi diaktifkan
 * 
 * Sistem harus menghitung:
 * -Total konsumsi energi
 * -Tagihan listrik
 * -Tagihan akhir
 * -Kelayakan Program Energi Hijau
 */

const MeteranAwal: number = 25640
const Arus: number = 25892
const HargaKWh: number = 1650
const Panel: boolean = true
const ModeHemat: boolean = false

const konsumsi: number = Arus - MeteranAwal 
const tagihan: number = konsumsi * HargaKWh
const DiskonPanel: number = (Panel) ? (tagihan * 0.2) : 0
const DiskonTambahan: number = (ModeHemat) ? (tagihan * 0.05) : 0

const Ijooooooo: string = (Panel && konsumsi < 300 && ModeHemat) ? "Anda masuk mode hijau" : "Boros banget lu ga mode hijau"

console.log("Total konsumsi energi : " + konsumsi)
console.log("Tagihan Listrik Anda : " + tagihan)
console.log("Tagihan Akhir : " + (tagihan - DiskonPanel - DiskonTambahan))
console.log("Apakah Anda layak masuk program hijau? " + Ijooooooo)

