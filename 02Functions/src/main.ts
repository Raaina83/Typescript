//TYPE ALIASES
type stringOrNumber = (string | number)[]

type Human = {
    name?: string,
    age: number,
    // albums: (string | number)[]
    albums: stringOrNumber
}

interface HumanTwo { //can use in classes
    name: string,
    age?: number,
    albums: (string | number)[]
}

type UserId = stringOrNumber
// interface UserIdTwo = stringOrNumber (won't work)

//LITERAL TYPES
let myName: 'Raaina' //also a type alias butu you can only assign Raaina to it

let userName: 'Raaina' | 'Priya' | 'Saqib' // more useful
userName = 'Raaina'

//FUNCTIONS
const add = (a: number, b: number):number =>{
    return a+b
}

const logMsg = (message: any): void =>{
    console.log(message)
}

logMsg('Hello priya how are you?????')
logMsg(add(67, 78))

let subtract = function(a: number, b:number): number {
    return (a-b)
}

logMsg(subtract(56, 23))

// type mathFunction = (a: number, b:number) => number //function alias
interface mathFunction  {
    (a: number, b:number): number
}//more like object or classes which can be extended!!

let multiply: mathFunction = (c,d) =>{
    return c * d
} 
logMsg(multiply(12, 7))

//OPTIONAL PARAMETER
const addAll = (a:number, b:number, c?:number):number =>{
    if(typeof c !== "undefined"){
        return a+b+c
    }
    return a + b
}

const sumAll = (a:number = 10, b:number, c:number = 7):number =>{
    if(typeof c !== "undefined"){
        return a+b+c
    }
    return a + b
}

logMsg(sumAll(4,5,8))
logMsg(sumAll(undefined, 4))

//REST PARAMETERS
const total = (a: number, ...nums: number[]): number =>{
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,3,10))

//NEVER TYPE
const createError = (errMsg: string): never =>{
    throw new Error(errMsg)
}

//CUSTOM TYPE CHECK
let isNumber = (value: any):boolean =>{
    return typeof value=== "number"? true : false
}

const typeCheck = (value: string | number): string =>{
    if(isNumber(value)) return "Number"
    if(!isNumber(value)) return "String"
    return createError("Invalid arguments")
}

