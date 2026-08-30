/**
 * LMS menyimpan data pengiriman tugas di array berikut.
 * Aturan Bisnis
 * -Nilai kelulusan = 75
 * -Siswa yang tidak menyerahkan menerima 0
 * -Tugas yang diserahkan di bawah 75 memerlukan revisi.
 * 
 * Kepala sekolah meminta laporan yang menunjukkan:
 * -Jumlah siswa
 * -Tugas yang diserahkan
 * -Tugas hilang
 * -Lulus siswa
 * -Siswa yang memerlukan revisi
 * -Skor rata-rata
 * -Skor tertinggi
 * -Skor terendah
 * 
 * Tugas Siswa
 * 1. Rancang fungsi Anda sendiri.
 * Minimal, solusi Anda harus mengandung:
 * -7 fungsi yang tidak batal
 * -1 fungsi void untuk menampilkan laporan.
 * 
 */

type mlukok = {
    student: string
    submitted: boolean
    score: number
}
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function hehe(a: mlukok[]){
    return a.length
}

function haha(a: mlukok[]) {
    let c = 0
    for (let b of a) {
        if (b.submitted) {
            c++
        }
    }

    return c
}

function hihi(a: mlukok[]) {
  let c = 0;
  for (let b of a) {
    if (!b.submitted) {
      c++;
    }
  }

  return c;
}

function huhu(a: mlukok[]) {
    for (let b of a) {
        if (b.score >= 75) {
            console.log(b.student)
        }
        
    }
    

}

function hoho(a: mlukok[]) {
    for (let b of a) {
        if (b.score <= 75) {
            console.log(b.student)
        }
    }
}

function a(b: mlukok[]) {
  let d = 0  
    for (let c of b) {
        d += c.score
    }
    return d/b.length
}

function b(a: mlukok[]) {
    let h = 0
    for (let c of a) {
        if (c.score >= h) {
            h = c.score
        }
    }
    return h
}

function c(a: mlukok[]) {
  let h = 0;
  for (let b of a) {
    if (b.score <= h) {
      h = b.score;
    }
  }
  return h;
}

function print(submissions: mlukok[]) {
    console.log(hehe(submissions));
    console.log(haha(submissions));
    console.log(hihi(submissions));
    console.log(huhu(submissions));
    console.log(hoho(submissions));
    console.log(a(submissions));
    console.log(b(submissions));
    console.log(c(submissions));
}

print(submissions)

