"use strict";
const stringEcho = (arg) => arg;
const echo = (arg) => arg; //a more general/generic kind of above code (T can be any type(can rename T to anything))
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(null));
console.log(isObj([1, 2, 3]));
console.log(isObj({ 'dwjh': "hihi" }));
console.log(isObj(true));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !!arg.length) { //check for empty array
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg)) {
        return { arg, is: false };
    } //check for empty object
    return { arg, is: !!arg };
};
const processor = (user) => {
    return user;
};
console.log(processor({ id: 12, name: "hello" }));
//A VERY COOL EXAMPLE OF GENERICS!!
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
////////////////////////////////////////////////////
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John"); //TS infers that store will have data of string type.
console.log(store.state);
store.state = "Dave";
//store.state = 12
const myState = new StateObject([15]);
myState.state = ['Dave', 42, true];
console.log(myState.state);
