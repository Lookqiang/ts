interface Objs {
    trim: () => {};
}

function isEmpty2(arg: string | [] | Objs): boolean {
    if (!arg) {
        return true;
    }
    let isEmpty = false;
    if (typeof arg === "object") {
        if (arg instanceof Array) {
            isEmpty = arg.length === 0;
        } else {
            isEmpty = Object.keys(arg).length === 0;
        }
    } else {
        isEmpty = arg.trim().length === 0;
    }
    return isEmpty;
}

// interface Friends {
//     name: String,
//     ss?:string
// }

// class Animal {
//     name: string;
//     age: number;
//     school: Array<string | number>;
//     obj: Friends;
//     obj1:object;
//     constructor(theName: string) { /* A */
//         this.name = theName; 
//         this.age = 18; 
//         this.school = ['超人', 1, 1]; 
//         this.obj = { name: 'sss'} 
//         this.obj1 = {sss:'ss'}
//     }
//     move(distanceInMeters = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("滑行中...");
//         super.move(distanceInMeters);
//     }
// }


// const sam = new Snake("Sammy the Python");

// sam.move();

export { isEmpty2 }