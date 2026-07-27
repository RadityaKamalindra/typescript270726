/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {  
    employeeId: string;
    employeeName: string;
    date: string;
    checkInTime: string;
    checkOutTime: string;
    totalWorkingHours: number;
    isPresent: boolean;
};

const attendance1: Attendance = {
    employeeId: "TSL-001-A-67102-J",
    employeeName: "Miyamoto Musashi",
    date: "2026-06-09",
    checkInTime: "01:00",
    checkOutTime: "23:00",
    totalWorkingHours: 22,
    isPresent: true
};

const attendance2: Attendance = {
    employeeId: "TSL-023-A-98253-R",
    employeeName: "Grigorii Rasputin",
    date: "2026-06-09",
    checkInTime: "12:00",
    checkOutTime: "11:00",
    totalWorkingHours: 23,
    isPresent: true
};

const attendance3: Attendance = {
    employeeId: "TSL-382-D-10923-R",
    employeeName: "Khabib Nurmagomedov",
    date: "2026-06-09",
    checkInTime: "00:00",
    checkOutTime: "23:45",
    totalWorkingHours: 23.75,
    isPresent: false
};

console.log("Attendance 1:", attendance1);
console.log("Attendance 2:", attendance2);
console.log("Attendance 3:", attendance3);