/**
 * Sebuah universitas menyimpan informasi pendaftaran di array berikut
 * Universitas memerlukan laporan yang memuat:
 * -Jumlah siswa
 * -Siswa yang aktif
 * -Siswa yang tidak aktif
 * -Mahasiswa Rekayasa Perangkat Lunak
 * -Jaringan siswa
 * -Siswa multimedia
 * 
 * Selesaikan fungsi berikut!
 */
type Student = {
  name: string
  major: string
  active: boolean
}
const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(a: Student[] ){
  
  let c = 0
  let d = 0
  for (let student of a) {
    if (student.active) {
      c++
    }
    d++
    
  }
  console.log(d);
  return c
}

function countInactiveStudents(a: Student[]){
  let c = 0
  for (let b of a) {
    if (!b.active) {
      c++
    }
  }
  return c
}

function countStudentsByMajor(a: Student[]){
  let c = 0
  let d = 0
  let e = 0
  for (let b of a) {
    if (b.major == "Software Engineering") {
      c++
    } else if (b.major == "Networking") {
      d++
    }else if (b.major == "Multimedia"){
      e++
    }
  }
  console.log(c)
  console.log(d)
  console.log(e)
}
 

function printEnrollmentReport(students: Student[]){
   console.log(countActiveStudents(students));
   console.log(countInactiveStudents(students));
   console.log(countStudentsByMajor(students)); 
}

printEnrollmentReport(students)
