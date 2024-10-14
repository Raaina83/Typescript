//inference
let username = "priya";
console.log(username)

//OBJECT
//annotation(explicitly telling the type of myObj)
let myObj: Object

myObj = []

const exampleObj = {
    prop1: 'Raaina',
    prop2: 19,
}

type Human = {
    name?: string,
    age: number,
    albums: (string | number)[]
}

interface HumanTwo { //can use in classes
    name: string,
    age?: number,
    albums: (string | number)[]
}

interface User {
    name: String,
    age: Number,
    email: String
}

interface Admin extends User {
    admin: Boolean
}

function isAdmin(admin: Admin) {
    console.log(admin.admin);
}

isAdmin({name:"", email:"", age: 17, admin:true})

interface abcd {
    name: String
}

interface abcd {
    email: String
} //two interfaces with same name will be merged

let hwasa: Human = {
    name: 'Hwasa',
    age: 29,
    albums: ['Maria', 17, 'Im a B']
}

let jp: Human = {
    name: "Raaina",
    age: 67,
    albums: ['Hello', 25]
}

hwasa = jp

const greetingHuman = (human: Human) => {
    if(human.name){
        return `Hello ${human.name.toUpperCase()}!!`
    }
    return 'Hello!!'
}

console.log(greetingHuman(jp))

//ENUMS
//Unlike most Typescript features, Enums are not a type-level addition to Javascript but something added to the language at run-time

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}
console.log(Grade.B)