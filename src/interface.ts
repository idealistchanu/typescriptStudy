interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {

    let newSquare = { color: "white", area: 100 };

    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({ color: "black" });

interface Point {
    readonly x: number;
    readonly y: number;
}

let pl: Point = { x: 10, y: 20 };

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
a[0] = 5555;

console.log(a);
a = ro as number[];
a[0] = 333;
console.log(a);

class Parent {
    foo = '';
}

class Child extends Parent {
    bar = '';
}

const arr = [new Parent(), new Child()];
console.log(arr[0].foo, arr[1].foo);
