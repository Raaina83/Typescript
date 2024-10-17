"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
const updateAssignment = (assignment, propsToUpdate) => {
    return Object.assign(Object.assign({}, assignment), propsToUpdate);
};
const assign1 = {
    studentId: "comp123",
    title: "Final project",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 97 }));
const assignGrade = updateAssignment(assign1, { grade: 97 });
//READ ONLY AND REQUIRED!!
const recordAssignment = (assign) => {
    //send data to db etc...
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assign1), { verified: true });
// assignVerified.grade = 89; //WONT WORK OBVIOUSLY
recordAssignment(Object.assign(Object.assign({}, assignGrade), { verified: false }));
//RECORD(most popular utility type)
const hexCode = {
    blue: "680nbd",
    black: "000000",
    red: "ff0000"
};
const record = {
    Kelly: 'A',
    Sara: 'C'
};
;
const gradeData = {
    Sara: { assign1: 83, assign2: 95 },
    Kelly: { assign1: 71, assign2: 15 }
};
const score = {
    studentId: "bjkb",
    grade: 78,
};
const preview = {
    studentId: "klsnkl",
    title: "jhefe5",
};
//RETURNTYPE(very interesting)
// type newAssign = {title: string, points: number};
const createNewAssign = (title, points) => {
    return { title, points };
};
const assignArgs = ["hello", 56];
const tsAssign = createNewAssign(...assignArgs);
console.log(tsAssign);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
