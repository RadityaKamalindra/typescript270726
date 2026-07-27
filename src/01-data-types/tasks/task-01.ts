/**
 * SMK Telkom Malang calculates each student's final score using several assessment components. 
 * Before calculating the final grade, the system stores every assessment score as a separate variable. 
 * The homeroom teacher entered the following information for one student. 
 * The student named Nadia Putri has a student ID of ST2026045. She earned 88.5 on assignments, 
 * 84 on the midterm exam, and 91.5 on the final exam. Because she submitted every assignment before the deadline, 
 * she received an attendance score of 100. The school also records that Nadia participates in extracurricular activities, 
 * so this information should also be stored.
 * 
 * Task:
 * 
 * 1. dentify all values that should be stored as variables.
 * 2. Determine the most appropriate data type for each variable.
 * 3. Create the variable declarations using TypeScript.
 * 4. Display the student data using console.log.
 */ 


const Name: string = "Nadia Putri";
const ID: string = "ST2026045";
const assignment: number = 88.5;
const midterm: number = 84;
const FinalScore: number = 91.5;
const AttendanceScore: number = 100;
const extracurricular: boolean = true;

const finalGrade: number = (assignment + midterm + FinalScore + AttendanceScore) / 4;

console.log("Nama: " + Name)
console.log("ID: " + ID)
console.log("Assignment Score: " + assignment)
console.log("Midterm Score: " + midterm)
console.log("Final Score: " + FinalScore)
console.log("Score Kehadiran: " + AttendanceScore)
console.log("Extracurricular Partisipasi: " + extracurricular)
console.log("Final Grade: " + finalGrade)

