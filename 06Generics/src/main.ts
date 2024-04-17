const stringEcho = (arg: string): string => arg 
const echo = <T>(arg: T): T => arg //a more general/generic kind of above code (T can be any type(can rename T to anything))

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(null))
console.log(isObj([1,2,3]))
console.log(isObj({'dwjh': "hihi"}))
console.log(isObj(true))

const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
    if(Array.isArray(arg) && !!arg.length){ //check for empty array
        return { arg, is: false }
    }
    if(isObj(arg) && !Object.keys(arg as keyof T)){
        return { arg, is: false}
    } //check for empty object
    return {arg, is: !!arg}
}

// console.log(typeof [1,2,3])
// console.log(typeof(null))