/**
 * Sebuah universitas ingin menganalisis skor mahasiswa yang terdaftar dalam Pengembangan Backend.
 * Dekan meminta beberapa statistik.
 * Daripada menulis satu program yang panjang, pengembang memutuskan untuk membagi pekerjaan menjadi fungsi-fungsi yang dapat digunakan kembali.
 * Perhitungan yang diperlukan:
 * Skor tertinggi
 * Skor terendah
 * Skor rata-rata
 * Banyaknya siswa yang lulus (nilai kelulusan = 75)
 * 
 * Finally, another function should display the complete report.
 * Tugas Siswa
 * 1. Buat fungsi untuk menemukan nilai tertinggi.
 * 2. Buat fungsi untuk mencari nilai terendah.
 * 3. Buat fungsi untuk mencari nilai rata-rata.
 * 4. Buat fungsi untuk mengembalikan jumlah siswa yang lulus.
 */

const scoress = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
  let H = scores[0]
  for (let i = 0; i < scores.length; i++ ) {
    if (scores[i] > H) {
      H = scores[i]
    }
  }

  return H

}
 
function findLowestScore(scores: number[]): number {
  let L = scores[0];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < L) {
      L = scores[i];
    }
  }

  return L;
}




function calculateAverage(scores: number[]): number {
  let a = 0
  for (const total of scores) {
    a += total;
  }
  return a/scores.length    
}

function countPassedStudents(scores: number[]): number {
  let b = 0
   for (const c of scores) {
     if (c >= 75) {
       b++
     } 
  }
  
  return b

}



function displayReport(scores: number[]): void {
  console.log(`Skor Highest       : ${findHighestScore(scores)}`);
  console.log(`Skor Lowest        : ${findLowestScore(scores)}`);
  console.log(`Rata Rata          : ${calculateAverage(scores)}`);
  console.log(`Lulus              : ${countPassedStudents(scores)}`);
}

displayReport(scoress)