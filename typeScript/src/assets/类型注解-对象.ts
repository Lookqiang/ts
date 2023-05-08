//对象


interface Person {
    name: string;
    age: number;
}
// interface Person {
//     age1: number;
// }

let semlinker: Person = {
    name: "semlinker",
    age: 33,
};

//可选 | 只读属性 |任意属性
interface Person1 {
    readonly name: string;
    age?: number;
    [propName: string]: any;
}

// let a: Person1 = {
//     name: "1"
// }
// a.name = 'sssss'

//继承
interface Student extends Person {
    grade: number
    [propName: string]: ang   //可以声明其他属性
}

let xiao: Student = {
    name: "semlinker",
    age: 33,
    grade: 1
};