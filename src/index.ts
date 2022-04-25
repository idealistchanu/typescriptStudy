/*
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

let g = f();
g();

console.log(g());


for ( let i = 0; i < 10; i++){
    setTimeout(function() {console.log(i); }, 100 * i);
}

for ( var i = 0; i < 10; i++){
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}
*/
/*
console.log("This Reset");
function t([first, second] : [number, number]) {
    console.log(first);
    console.log(second);
}
t([1,2]);


let [first] = [1,2,3,4];
console.log(first);
*/

// let o = {
//     a: "one",
//     b: "two",
//     c: "three"
// }
// let { a,b } = o;

// // console.log(o.a);
// // console.log(a);


// let { a: newName1, b: newName2} = o;
// console.log(a);
// console.log(b);
// console.log(newName1);


function keepWholeObject (wholeObject: { a: string, b?: number}){
    let {a, b=2002} = wholeObject;
}

let a = "A";
let b = 123;
type C = { a: string, b?: number }
function f({a, b} : C) : void{
    console.log(a);``
}

let defaults = { food : "spicy", price: "$100", ambiance: "noisy"};
let search = { ...defaults, food: "rich" };

console.log(defaults.food);
console.log(search[0]);
console.log(search.food);