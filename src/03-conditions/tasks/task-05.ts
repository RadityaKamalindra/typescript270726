/**
 * Sebuah universitas sedang menyeleksi mahasiswanya untuk menerima beasiswa penuh.
 * Penyaringan pertama memerlukan:
 *  -IPK ≥ 3,75
 *  -Pendapatan keluarga < Rp5.000.000
 * 
 * Jika mahasiswa lolos seleksi pertama, universitas akan melakukan seleksi kedua.
 * Penyaringan kedua memerlukan:
 *  -Partisipasi kompetisi ≥ 3
 *  -Tidak ada pelanggaran disiplin
 *  -Dokumen administrasi sudah lengkap
 * 
 * Hanya siswa yang lulus kedua tahap penyaringan yang menerima beasiswa.
 * Informasi siswa:
 * | Informasi | Nilai |
 * | ----------------------- | ------------- |
 * | Nama Siswa | Fajar Hidayat |
 * | IPK | 3.86 |
 * | Pendapatan Keluarga | 4200000 |
 * | Jumlah Kompetisi | 4 |
 * | Memiliki Catatan Disiplin | Tidak |
 * | Dokumen Lengkap | Ya |
 * 
 * Tampilkan salah satu pesan berikut:
 *  -Beasiswa Disetujui
 *  -Lolos Pemutaran Pertama, tetapi Gagal Pemutaran Kedua
 *  -Lolos Pemutaran Pertama, tetapi Gagal Pemutaran Kedua
 * 
 * Tugas Siswa
 *  -Deklarasikan semua variabel.
 *  -Melaksanakan screening pertama.
 *  -Melaksanakan screening kedua hanya jika screening pertama lolos.
 *  -Tampilkan hasil yang benar.
 */

// 1. DEKLARASI VARIABEL DATA SISWA
const namaSiswa: string = "Fajar Hidayat"
const ipk: number = 3.86
const pendapatan: number = 4200000
const kompetisi: number = 4
const disiplin: boolean = false
const dokumen: boolean = true         

function screeningPertama(ipk: number, pendapatan: number): boolean {
    return ipk >= 3.75 && pendapatan < 5000000
}

function screeningKedua(kompetisi: number, disiplin: boolean, dokumen: boolean): boolean {
    return kompetisi >= 3 && !disiplin && dokumen
}

function prosesSeleksiBeasiswa(): void {
    if (!screeningPertama(ipk, pendapatan)) {
        console.log("Gagal Pemutaran Pertama")
        return
    }

    if (!screeningKedua(kompetisi, disiplin, dokumen)) {
        console.log("Lolos Pemutaran Pertama, tetapi Gagal Pemutaran Kedua")
        return
    }

    console.log("Beasiswa Disetujui")
}

prosesSeleksiBeasiswa()

// i love function // 
