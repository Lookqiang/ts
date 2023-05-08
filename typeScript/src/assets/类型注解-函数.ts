

function createUserId(name, id) {
    return name + id;
}

//1、参数类型和返回类型
function createUserId1(name: string, id: number): string {
    return name + id;
}

//2、可选参数及默认参数
// 可选参数
function createUserId2(name: string, id: number, age?: number): string {
    return name + id;
}

//3、 默认参数
function createUserId3(
    name: string = "semlinker",
    id: number,
    age?: number
): string {
    return name + id;
}

// 注意：在实际使用时，需要注意的是可选参数要放在普通参数的后面，不然会导致编译错误。
function createUserId4(
    name: string = "semlinker",
    age?: number,
    id: number
): string {
    return name + id;
}


//函数重载
type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
