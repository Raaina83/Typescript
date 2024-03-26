"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        // this.name = name
        // this.music = music
        // this.age = age
        // this.lang = lang
    }
    getAge() {
        return `Hello, I'm ${this.age}years old!`;
    }
}
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I practice ${this.lang}`;
    }
}
const raaina = new Coder("Raaina", "Jazz", 19, "typescript");
console.log(raaina.getAge());
const priya = new webDev("HP", "Priya Jyot", "hindi", 19);
console.log(priya.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
let hwasa = new Guitarist("Hwasa", "guitar");
console.log(hwasa.play("strums"));
/////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Priya = new Peeps("Priya");
const Preti = new Peeps("Preti");
console.log(Peeps.getCount());
/////////////////////////////////////////
class Bands {
    constructor() {
        this.dataSet = [];
    }
    get data() {
        return this.dataSet;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.dataSet = value;
            return;
        }
        else {
            throw new Error("Params is not an array of strings");
        }
    }
}
const myBand = new Bands();
myBand.data = ['jdwlq', 'howpqu', 'hifeoqp'];
console.log(myBand.data);
// myBand.data = 'gdwuqhg'
