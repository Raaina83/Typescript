interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
};

const updateAssignment = (assignment: Assignment, propsToUpdate: Partial<Assignment>): Assignment => { //PARTIAL allows us to not pass all the props(or even any) in Assignment interface!
    return {...assignment, ...propsToUpdate};
}

const assign1: Assignment = {
    studentId: "comp123",
    title: "Final project",
    grade: 0
};
console.log(updateAssignment(assign1, {grade: 97}));
const assignGrade = updateAssignment(assign1, {grade: 97});

//READ ONLY AND REQUIRED!!
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    //send data to db etc...
    return assign;
}

const assignVerified: Readonly<Assignment> = {...assign1, verified: true};
// assignVerified.grade = 89; //WONT WORK OBVIOUSLY

recordAssignment({...assignGrade, verified: false});

//RECORD(most popular utility type)
const hexCode: Record<string, string> = {
    blue: "680nbd",
    black: "000000",
    red: "ff0000"
};

type Student = 'Sara'| 'Kelly';
type StudentGrade = 'A' | 'B' | 'C' | 'D' | 'U';
const record: Record<Student, StudentGrade> = {
    Kelly: 'A',
    Sara: 'C'
};

interface Grade {
    assign1: number,
    assign2: number
};

const gradeData: Record<Student, Grade> = {
    Sara: {assign1: 83, assign2: 95},
    Kelly: {assign1: 71, assign2: 15}
};

//PICK AND OMIT
type pickStudentData =  Pick<Assignment, "studentId" | "grade">;
const score: pickStudentData = {
    studentId: "bjkb",
    grade: 78,
};

type omitData = Omit<Assignment, "grade" | "verified">;
const preview: omitData = {
    studentId: "klsnkl",
    title: "jhefe5",
};

//EXCLUDE AND EXTRACT(does not work with interface, but will work with string literal types and union)
type adjustedGrade = Exclude<StudentGrade, 'U'>;
type highGrade = Extract<StudentGrade, 'A' | 'B'>;

//NONNULLABLE
type allPossibleGrades = 'Dave' | 'John' | null | undefined;
type validGrades = NonNullable<allPossibleGrades>;

//RETURNTYPE(very interesting)
// type newAssign = {title: string, points: number};

const createNewAssign = (title: string, points: number) => {
    return {title, points};
};

type newAssign = ReturnType<typeof createNewAssign>; //instead of giving the func the return type we can just create a type later and give it type of funcn return value, will not have to update newAssign even if return type of func changes later!!

//PARAMETERS
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["hello", 56];

const tsAssign: newAssign = createNewAssign(...assignArgs);
console.log(tsAssign);

// Awaited - helps us with the ReturnType of a Promise 

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))