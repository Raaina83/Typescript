class Coder{
    // name: string
    // music: string
    // age: number
    // lang: string
    secondLang!: string //means we are not going to initialize this for a while!(not recommended)

    constructor(
        public readonly name: string,  //VISIBILITY MODIFIER
        public music:string, 
        private age: number, 
        protected lang:string = 'Typescript' //optional parameter
    ) {
        // this.name = name
        // this.music = music
        // this.age = age
        // this.lang = lang
    }

    public getAge(){
        return `Hello, I'm ${this.age}years old!`
    }
}

class webDev extends Coder{
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number){
            super(name, music, age) //basically to initialize everything we get from Coder
            this.computer = computer
        }

        public getLang(){
            return `I practice ${this.lang}`
        }

}

const raaina = new Coder("Raaina", "Jazz", 19, "typescript")
console.log(raaina.getAge()) 

const priya = new webDev("HP","Priya Jyot", "hindi", 19)
console.log(priya.getLang())

//////////////////////////////////////
//IMPLEMENTING INTERFACE TO A CLASS!

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string){
        this.name = name
        this.instrument = instrument
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

let hwasa = new Guitarist("Hwasa", "guitar")
console.log(hwasa.play("strums"))

/////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps("John")
const Priya = new Peeps("Priya")
const Preti = new Peeps("Preti")
console.log(Peeps.getCount())

/////////////////////////////////////////
//GETTERS AND SETTERS
class Bands {
    private dataSet: string[]

    constructor() {
        this.dataSet = []
    }

    public get data(): string[] {
        return this.dataSet
    }

    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.dataSet = value
            return //setters cannot return a value
        } else {
        throw new Error("Params is not an array of strings")
    }
} }

const myBand = new Bands()
myBand.data = ['jdwlq', 'howpqu', 'hifeoqp']
console.log(myBand.data)
myBand.data = [...myBand.data, 'zz']
console.log(myBand.data)
// myBand.data = 'gdwuqhg'