type One = string
type Two = string | number
type Three = 'hello'

//convert to more specific or less specific
let a:One = 'hello'
let b = a as One //less specific
let c = a as Three //more specific

let d = <One>'world' //also a way to convert to specific types but can not be used in tsx files
let e = <string>'raaina'
let f = <string | number> 45

let addOrConact = (a: number, b:number, c:'add' | 'concat'): (string | number) => {
    if(c === "add") return a + b
    return '' + a + b
}

let myVal: string = addOrConact(3,4, 'concat') as string //essentially we telling typescript that we know better than it does

let nextVal: number = addOrConact(5, 8, 'concat') as number //actually is wrong but typescript now won't tell us

// 10 as string //wrong
(10 as unknown) as string

//DOM
const img = document.querySelector('img')! //non-null expression
const imgTag = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src
imgTag.src