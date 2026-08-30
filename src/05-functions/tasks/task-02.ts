/**
 * Departemen HR ingin menampilkan notifikasi bonus untuk karyawan.
 * Aturan Bisnis
 *  -Skor kinerja ≥ 85 → Bonus Disetujui
 *  -Jika tidak → Bonus Tidak Disetujui
 * Data karyawan:
 * | Karyawan | Skor |
 * | ---------------| ----- |
 * | John Cena |    92 |
 * | Penyelenggara |    76 |
 * | Rey Misteri |    88 |
 * 
 * Daripada mengulangi logika pengambilan keputusan, departemen SDM menginginkan fungsi yang dapat digunakan kembali.
 * Fungsi tersebut harus menampilkan notifikasi secara langsung dan tidak mengembalikan nilai apa pun.
 * 
 * Tugas Siswa:
 * 1. Buat fungsi bernama showBonusStatus.
 * 2. Fungsi menerima:
 *  -nama karyawan
 *  -skor kinerja
 * 3. Tampilkan hasil bonus di dalam fungsi.
 * 4. Memanggil fungsi untuk setiap karyawan.
 */

function SBS(A: string ,B: number): void {
    if (B >= 85) {
        console.log(`${A}: Dapat bonus gesszzz`)
        return
    } else {
        console.log(`${A}: WLeee ga dapat bonus`)
    }

    
}

SBS("John Cena", 92)
SBS("Undertaker", 76)
SBS("Rey Masterio", 88)



