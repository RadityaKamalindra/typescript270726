/**
 * Sebuah perusahaan membayar karyawan berdasarkan gaji bulanan dan jam lembur.
 * Informasi Karyawan:
 * | Informasi | Nilai |
 * | -------------- | ------- |
 * | Nama Karyawan | Dimas |
 * | Gaji Pokok | 5000000 |
 * | Jam Lembur | 12 |
 * | Tarif Lembur | 50000 |
 *
 * 
 * Perusahaan mempunyai kebijakan sebagai berikut:
 * Karyawan yang bekerja lebih dari 10 jam lembur menerima tambahan bonus kinerja sebesar Rp300.000.
 * Jika tidak, tidak ada bonus yang diberikan.
 * Anda perlu menghitung dan menampilkan:
 * -Pembayaran lembur
 * -Bonusnya
 * -Gaji akhir
 */

const NamaKaryawan: string = "Dimas";
const GajiPokok: number = 5000000;
const JamLembur: number = 12;
const TarifLembur: number = 50000;

const bonus: number = 300000;

const HasilLembur: number = TarifLembur * JamLembur;

const GajiAkhir: number = GajiPokok + HasilLembur;

console.log("Pembayaran Lembur: " + HasilLembur)

if (JamLembur > 10) {
    console.log("Dapat tambahan bonus kinerja sebesar Rp300.000  ");
    console.log("Total gaji bersih: " + (GajiAkhir + bonus))
} else {
    console.log("Tidak Dapat Bonus")
    console.log("Total gaji bersih: " + GajiAkhir);
}
    







