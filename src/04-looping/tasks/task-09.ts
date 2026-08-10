/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let A: number = 0
let B: number = 0
let C: number = 0
let D: number = 0
let highest = 0
let lowest = 0
let total = 0

for (const a of students) {
    if (a.score >= 90) {
        A++
    } else if (a.score >= 80) {
        B++
    } else if (a.score >= 70) {
        C++
    } else {
        D++
    }
    

    
}

for (const a of students) {
  if (a.score > highest) {
    highest = a.score
  } else {
    lowest = a.score  
  }
}

for (const a of students) {
  total += a.score;
}

console.log("Nilai A :", A)
console.log("Nilai B :", B)
console.log("Nilai C :", C)
console.log("Nilai D :", D)
console.log("Nilai Tertinggi :", highest)
console.log("Nilai Terendah :", lowest)
console.log("Rata-rata :", (total / students.length));
