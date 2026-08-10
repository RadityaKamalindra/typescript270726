/**
 * LMS menyimpan informasi pengiriman tugas pada array di bawah ini.
 * Aturan Bisnis
 * -Siswa yang tidak menyerahkan otomatis mendapat skor 0.
 * -Skor kelulusan adalah 75.
 * -Tugas yang diserahkan dengan skor di bawah 75 perlu direvisi.
 * 
 * Tugas Siswa menggunakan loop untuk:
 * -Hitung siswa yang menyerahkan tugasnya.
 * -Hitung siswa yang tidak menyerahkan.
 * -Hitung siswa yang lulus.
 * -Hitung siswa yang harus merevisi tugasnya.
 * -Menampilkan nama siswa yang tidak menyerahkan.
 * -Menampilkan nama siswa yang harus merevisi.
 * -Hitung nilai rata-rata kelas.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];


