/**
 * Sebuah universitas sedang menyeleksi mahasiswanya untuk menerima beasiswa penuh.
 * Seorang siswa akan menerima beasiswa hanya jika semua persyaratan berikut dipenuhi:
 * -IPK minimal 3,75
 * -Penghasilan bulanan keluarga kurang dari Rp5.000.000
 * -Siswa telah mengikuti minimal 3 lomba
 * -Siswa tidak melakukan pelanggaran disiplin
 * -Mahasiswa telah melengkapi semua dokumen administrasi.
 * 
 * Kantor penerimaan menerima informasi siswa berikut.
 * | Informasi | Nilai |
 * | ----------------------- | ---------- |
 * | Nama Siswa | Alya Putri |
 * | IPK | 3.89 |
 * | Pendapatan Keluarga | 4200000 |
 * | Jumlah Kompetisi | 4 |
 * | Memiliki Catatan Disiplin | Tidak |
 * | Dokumen Lengkap | Ya |
 * 
 * Jika siswa memenuhi syarat:
 *  -Jumlah Beasiswa = Rp12.000.000
 * 
 * Otherwise:
 *  -Jumlah Beasiswa = Rp0
 * 
 * Terakhir, sistem juga harus menghitung berapa sisa dana jika 
 * universitas memiliki total anggaran beasiswa sebesar Rp500,000,000.
 * 
 * Task:
 * -Evaluasi setiap persyaratan menggunakan operator perbandingan.
 * -Gabungkan semua kondisi menggunakan operator logika.
 * -Tentukan jumlah beasiswa menggunakan operator ternary.
 * -Hitung sisa anggaran beasiswa.
 * -Menampilkan apakah siswa diterima.
 */

const nama: string = "Alya Putri"
const IPK: number = 3.89
const PenKel: number = 4200000
const JumKom: number = 4
const CatDis: boolean = false
const KelDok: boolean = true
const diterima: boolean = true

let syarat = (IPK >= 3.75) && (PenKel <= 5000000) && (JumKom >= 3) && (CatDis == false) && (KelDok == true) ? "Yes dapat Beasiswa" : "alahhhh ga dapet Beasiswa"

let dana: number = 500000000 

let beasiswa = (syarat = "Yes dapat Beasiswa") ? dana - 12000000 : dana - 0;

console.log("Apakah Mendapat Beasiswa? " + syarat)
console.log(syarat = true ? "Mendapat Beasiswa sebesar Rp. 12.000.000" : "Anda Bukan Penerima Beasiswa")
console.log("Sisa Anggaran Beasiswa Sekolah : " + beasiswa)
