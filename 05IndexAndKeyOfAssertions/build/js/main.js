"use strict";
//INDEX SIGNATURES
const todaysTransaction = {
    Pizza: -100,
    Books: -340,
    Job: 1000
};
console.log(todaysTransaction.Pizza);
console.log(todaysTransaction['Pizza']);
let prop = 'Pizza';
console.log(todaysTransaction[prop]); //will give error if indexes are not defined
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysTransaction['hello']); //returns undefines as hello key does not exist
console.log(todaysNet(todaysTransaction));
const student = {
    subject: "maths",
    rollNo: 83,
    classes: [100, 200]
};
// console.log(student.test)
// for (const key in student) {
//     console.log(`${key}: ${student[key]}`)
// }
for (const key in student) {
    console.log(`${key}: ${student[key]}`); //solving the same problem using assertion(without using indexes) 
}
Object.keys(student).map((key) => {
    console.log(student[key]); //an alternate way of doing this if we don't know the type of student
});
//another way of doing it lol
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'classes');
// specify type of a key individually
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
