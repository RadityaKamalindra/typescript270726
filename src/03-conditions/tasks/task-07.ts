/**
 * Sebuah bank mengevaluasi permohonan pinjaman menggunakan kebijakan berikut.
 * Pemutaran Pertama
 * Pelamar harus memenuhi kedua persyaratan:
 * -Penghasilan bulanan minimal Rp8.000.000
 * -Skor kredit minimal 700
 * Jika lolos seleksi pertama, lanjutkan ke seleksi kedua.
 * 
 * Pemutaran Kedua
 * -Hutang yang ada tidak boleh melebihi 30% dari pendapatan bulanan.
 * -Status pekerjaan harus tetap.
 * 
 * 
 * Aturan Keputusan:
 * -Lulus kedua pemutaran → Pinjaman Disetujui
 * -Hanya lulus penyaringan pertama → Tinjauan Manual
 * -Gagal dalam screening pertama → Pinjaman Ditolak
 * 
 * Pelamar hari ini:
 * | Informasi | Nilai |
 * | ------------------ | ----------- |
 * | Pemohon | Andi Wijaya |
 * | Pendapatan Bulanan | 10000000 |
 * | Skor Kredit | 725 |
 * | Hutang yang Ada | 2500000 |
 * | Karyawan Tetap | Ya |
 * 
 * Tugas Siswa:
 * 1. Deklarasikan semua variabel.
 * 2. Melaksanakan kedua tahap penyaringan.
 * 3. Menampilkan keputusan pinjaman.
 */
const pemohon: string = "Andi Wijaya"
const pendapatan: number = 10000000
const skor: number = 725
const hutang: number = 2500000
const kartep: boolean = true


function pertama(penghasilan: number, kridit: number): boolean {
    return penghasilan >= 8000000 && kridit > 700
}

function kedua(utang: number, status: boolean): boolean {
    return utang < (pendapatan * 0.3) && status
}

function pinjaman(): void {
    if (!pertama(pendapatan, skor)) {
        console.log("Pinjaman Ditolak !")
        return
    }

    if (!kedua(hutang, kartep)) {
        console.log("Tinjauan Manual")
        return
    }
    console.log("Pinjaman Disetujui")
}

pinjaman()