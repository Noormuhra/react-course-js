
import { students } from "./data.js";

// חלק א
const yossi = students[1];
const fixedYossi = { ...yossi, grade: 56 };

console.log(yossi.grade, fixedYossi.grade);

// חלק ב
const newStudent = { id: 4, name: "Avi", grade: 70, city: "Akko" };
const allStudents = [...students, newStudent];

console.log(students.length, allStudents.length);
