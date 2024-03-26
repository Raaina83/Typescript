//INDEX SIGNATURES

//The problem with this is that there is no way for typescrcipt to know what keys exactly exist, hence even if we try to access the key that does actually not exist we are going to get undefined and our application is bound to crash 
// interface TransactionObj {
//     readonly [index: string]: number //key is going to be string while value is number!(also index can not be string)
// }

interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransaction: TransactionObj = {
    Pizza: -100,
    Books: -340,
    Job: 1000
}

console.log(todaysTransaction.Pizza)
console.log(todaysTransaction['Pizza'])

let prop: string = 'Pizza'

console.log(todaysTransaction[prop]) //will give error if indexes are not defined

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransaction))
// todaysTransaction.Pizza = -75

/////////////////////////////////////////////////

interface Student {
    // [index: string]: number | string | number[] | undefined
    subject: string,
    rollNo: number,
    classes?: number[] //can be undefined
}

const student: Student = {
    subject: "maths",
    rollNo: 83,
    classes: [100, 200]
}

// console.log(student.test)

// for (const key in student) {
//     console.log(`${key}: ${student[key]}`)
// }

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`) //solving the same problem using assertion(without using indexes) 
}

Object.keys(student).map((key) =>{
    console.log(student[key as keyof typeof student]) //an alternate way of doing this if we don't know the type of student
})

//another way of doing it lol
const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}
logStudentKey(student, 'classes')

/////////////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number> //shortens the length of code but at the same time we woudln't be able to specify type of a key individually

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}
