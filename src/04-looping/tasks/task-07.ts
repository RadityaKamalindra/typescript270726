/**
 * Wali kelas menerima data kehadiran satu kelas pada array berikut.
 * 
 * Menggunakan lingkaran:
 * -Hitung siswa yang hadir.
 * -Hitung siswa yang tidak hadir.
 * -Menampilkan nama siswa yang tidak hadir.
 * -Hitung persentase kehadiran.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let hadir: number = 0
let absen:number=0

for (const a of attendances) {
  if (a.present) {
    hadir++
    
  } else {
    absen++
    console.log("anak absen",a.name);
    
  };
  
      
}

console.log("jumlah hadir", hadir);
console.log("jumlah absen", absen);

const presentase: number = (hadir/attendances.length) * 100
console.log("Presentase Kehadiran : ", presentase, "%")







