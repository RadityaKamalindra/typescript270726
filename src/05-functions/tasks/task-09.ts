import { push } from "node:stream/iter";

/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 *
 * Student Tasks
 * Design a program using multiple reusable functions.
 *
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
type gapu = {
  id: string;
  name: string;
  age: number;
  department: string;
  admitted: boolean;
  bill: number;
};

const patients = [
  {
    id: "PT001",
    name: "Alya",
    age: 17,
    department: "Pediatrics",
    admitted: true,
    bill: 850000,
  },
  {
    id: "PT002",
    name: "Budi",
    age: 45,
    department: "Cardiology",
    admitted: false,
    bill: 1200000,
  },
  {
    id: "PT003",
    name: "Citra",
    age: 68,
    department: "Cardiology",
    admitted: true,
    bill: 2500000,
  },
  {
    id: "PT004",
    name: "Dimas",
    age: 33,
    department: "Orthopedics",
    admitted: true,
    bill: 640000,
  },
  {
    id: "PT005",
    name: "Eka",
    age: 14,
    department: "Pediatrics",
    admitted: false,
    bill: 350000,
  },
];

function a(b: gapu[]) {
  return b.length;
}

function b(a: gapu[]) {
  let d = 0;
  for (let c of a) {
    if (c.admitted) {
      d++;
    }
  }
  return d;
}

function c(a: gapu[]) {
  let d = 0;
  for (let b of a) {
    if (!b.admitted) {
      d++;
    }
  }
  return d;
}

function d(a: gapu[]): Record<string, number> {
  let b: Record<string, number> = {};

  for (let c of a) {
    let e = c.department;
    if (b[e] === undefined) {
      b[e] = 1;
    } else {
      b[e]++;
    }
  }

  return b;
}

function e(a: gapu[]) {
  let b = a[0].bill;
  for (let c of a) {
    if (b <= c.bill) {
      b = c.bill;
    }
  }
  return b;
}

function f(a: gapu[]) {
  let b = a[0].bill;
  for (let c of a) {
    if (b >= c.bill) {
      b = c.bill;
    }
  }
  return b;
}

function g(a: gapu[]) {
  let b = 0;
  for (let c of a) {
    b += c.bill;
  }
  return b / a.length;
}

function h(a: gapu[]) {
  let b = 0;
  for (let c of a) {
    b += c.bill;
  }
  return b;
}
function i(a: gapu[]) {
  let b = [];
  for (let c of a) {
    if (c.admitted) {
      b.push(c.name);
    }
  }
  return b;
}
function pilDoubleL(j: gapu[]) {
  console.log(a(j));
  console.log(b(j));
  console.log(c(j));
  console.log(d(j));
  console.log(f(j));
  console.log(g(j));
  console.log(h(j));
  console.log(i(j));
}

pilDoubleL(patients)
