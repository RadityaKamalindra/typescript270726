/**
 * Wali kelas menyimpan informasi kehadiran sebagai berikut.
 * Sekolah ingin menampilkan laporan kehadiran.
 * Laporan tersebut harus mencakup:
 * -Jumlah Hadir
 * -Jumlah Absen
 * -Nama siswa yang tidak hadir
 * Laporan tersebut ditampilkan langsung di konsol.
 * Tugas Siswa:
 * -Buat fungsi bernama printAttendanceReport.
 * -Fungsi menerima susunan kehadiran.
 * -Gunakan perulangan dan kondisi.
 * -Menampilkan laporan di dalam fungsi.
 * -Fungsi tidak boleh mengembalikan nilai apa pun.
 */
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function PAR() {

    let H = 0
    let B = 0
    for (const a of attendances) {
        if (a.present) {
            H++
        } else {
            B++
            console.log("ga masuk :", a.name);
        }

        
    }

    console.log("Hadir :", H)
    console.log("Absen :",B)
}

PAR()