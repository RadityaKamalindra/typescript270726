/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Student = {  
    studentId: string;
    fullName: string;
    gradeLevel: string;
};

type Course = {
    courseId: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
};

type Registration = {
    student: Student;
    course: Course;
    registrationDate: string;
    isPaymentCompleted: boolean;
};

const registration1: Registration = {
    student: {
        studentId: "Moklet-28-STD2-RPL",
        fullName: "Jhon Cena",
        gradeLevel: "10th"
    },

    course: {
        courseId: "Moklet-5441-ADM15-PRG",
        courseTitle: "Introduction to Programming",
        instructorName: "Mr. Hologram",
        totalLearningHours: 40
    },
    registrationDate: "2026-10-07",
    isPaymentCompleted: true
};

const registration2: Registration = {
    student: {
        studentId: "Moklet-09-STD8-RPL",
        fullName: "Maria Annovazzi",
        gradeLevel: "10th"
    },

    course: {
        courseId: "Moklet-5441-ADM15-PRG",
        courseTitle: "Introduction to Programming",
        instructorName: "Mr. Hologram",
        totalLearningHours: 40
    },
    registrationDate: "2026-10-07",
    isPaymentCompleted: true
};

const registration3: Registration = {
    student: {
        studentId: "Moklet-01-STD01-KHS",
        fullName: "Adolf Hitler",
        gradeLevel: "11th"
    },

    course: {
        courseId: "Moklet-0001-ADM01-PRG",
        courseTitle: "Advanced Programming",
        instructorName: "Mr. Beast",
        totalLearningHours: 60
    },
    registrationDate: "2026-10-07",
    isPaymentCompleted: false
};

console.log("Registration 1:", registration1);
console.log("Registration 2:", registration2);
console.log("Registration 3:", registration3);
