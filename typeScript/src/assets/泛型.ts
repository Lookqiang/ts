function identity<S, U>(value: S, message: U): S {
    console.log(message);
    return value;
}

console.log(identity(68, "Semlinker"));
console.log(identity("68", "Semlinker"));


//泛型接口

interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity1<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity1;

let myIdentity1: GenericIdentityFn<number> = identity1;

//泛型类 泛型类指的是实例部分的类型
class GenericNumber<T> {
    zeroValue: T;
    add: ((x: T, y: T) => T);
    constructor(zeroValue: T, add: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = add
    }
}

let myGenericNumber = new GenericNumber<number>(0, function (x, y) { return x + y; });
