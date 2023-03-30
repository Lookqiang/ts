interface Objs {
    trim: () => {}
}

function isEmpty2(arg: string | [] | Objs ):boolean {
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

export { isEmpty2 }