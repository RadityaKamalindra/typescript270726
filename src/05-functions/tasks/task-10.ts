/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 *
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 *
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 *
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 *
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

import { copyFile } from "node:fs";

type z = {
  student: string;
  course: string;
  completed: boolean;
  score: number;
  duration: number;
};

const enrollments = [
  {
    student: "Alya",
    course: "TypeScript",
    completed: true,
    score: 91,
    duration: 38,
  },
  {
    student: "Budi",
    course: "TypeScript",
    completed: false,
    score: 45,
    duration: 12,
  },
  {
    student: "Citra",
    course: "Database",
    completed: true,
    score: 87,
    duration: 42,
  },
  {
    student: "Dimas",
    course: "Backend",
    completed: true,
    score: 96,
    duration: 40,
  },
  {
    student: "Eka",
    course: "Database",
    completed: false,
    score: 60,
    duration: 18,
  },
  {
    student: "Fajar",
    course: "Backend",
    completed: true,
    score: 82,
    duration: 35,
  },
  {
    student: "Gita",
    course: "TypeScript",
    completed: true,
    score: 88,
    duration: 36,
  },
  {
    student: "Hana",
    course: "Backend",
    completed: false,
    score: 70,
    duration: 20,
  },
];

function totalE(a: z[]) {
  return a.length;
}

function ComEn(a: z[]) {
  let b = 0;
  for (let c of a) {
    if (c.completed) {
      b++;
    }
  }
  return b;
}

function IncEn(a: z[]) {
  let b = 0;
  for (let c of a) {
    if (!c.completed) {
      b++;
    }
  }
  return b;
}

function ComPer(a: z[]) {
  let selesai = ComEn(a);
  let presentase = (selesai / a.length) * 100;

  return presentase;
}

function print1(a: z[]) {
  console.log("Total Enrollments :", totalE(a));
  console.log("Total yang selesai :", ComEn(a));
  console.log("Total yang belum :", IncEn(a));
  console.log("Presentase yang sudah :", ComPer(a), "%");
}

function High(a: z[]) {
  let gede = 0;
  for (let b of a) {
    if (gede <= b.score) {
      gede = b.score;
    }
  }
  return gede;
}

function Low(a: z[]) {
  let gede = a[0].score;
  for (let b of a) {
    if (gede >= b.score) {
      gede = b.score;
    }
  }
  return gede;
}

function Avarage(a: z[]) {
  let juml = 0;
  for (let b of a) {
    juml++;
  }
  return juml / a.length;
}

function SeventyFive(a: z[]) {
  let angka = [];
  for (let b of a) {
    if (b.score >= 75) {
      angka.push(b.score);
    }
  }
  return angka;
}

function print2(a: z[]) {
  console.log(`Score tertinggi : ${High(a)}`);
  console.log(`Score terendah : ${Low(a)}`);
  console.log(`Rata-rata : ${(Avarage(a))}`);
  console.log(`Score diatas 75 : ${SeventyFive(a)}`);
}

function TerdaftarSetiapKurcuc(a: z[]): Record<string, number> {
    let jumlah: Record<string, number> = {}
    for (let b of a) {
        let c = b.course
        if (jumlah[c] === undefined) {
            jumlah[c] = 1
        } else {
            jumlah[c]++
        }
            
    }
    return jumlah
}

function AvarageOfKurcuc(a: z[]): Record<string, number> {
  let avarage: Record<string, number> = {}
  let opowes: Record<string, number> = {}
    for (let b of a) {
      let c = b.course
      
      if (opowes[c] === undefined) {
        opowes[c] = b.score
        avarage[c] = 1
      } else {
        opowes[c] += b.score
        avarage[c]++
      }
      
  }
  
  for (let c in opowes) {
    opowes[c] = opowes[c] / avarage[c]
  }
    return opowes
}

function print3(a: z[]) {
  console.log("Jumlah siswa yang terdaftar di setiap kursus :\n", TerdaftarSetiapKurcuc(a))
  console.log("Nilai rata-rata untuk setiap kursus :\n", AvarageOfKurcuc(a))
}

function TotalLearning(a: z[]) {
  let total = 0
  for (let b of a) {
    total += b.duration; 
  }

  let avarage = total / a.length
  return {total,avarage}
  
}

print1(enrollments)
console.log()
print2(enrollments)
console.log()
print3(enrollments)
console.log()
const result = TotalLearning(enrollments);
console.log(`Total pembelajaran: ${result.total} jam`);
console.log(`Rata-rata durasi pembelajaran: ${result.avarage} jam`);
