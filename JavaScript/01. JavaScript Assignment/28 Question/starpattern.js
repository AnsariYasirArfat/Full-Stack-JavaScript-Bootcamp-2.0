let input =  prompt('Enter a number to print Star pattern')
// A triangle pattern.
let starTriangle = input;

console.log(`A triangle pattern`);
for (let i = 1; i <= starTriangle; i++) {
    let row1 = '';
    for (let j = 1; j <= i; j++) {
        row1 += '*';
    }
    console.log(row1);
}
// A square pattern.

let starSquare = input;
console.log(`A square pattern`);
for (let i = 1; i <= starSquare; i++) {
    let row2 = '';
    for (let j = 1; j <= starSquare; j++) {
        row2 += '*';
    }
    console.log(row2);
}

// A pyramid pattern.
let starPyramid = input;
console.log(`A pyramid pattern`);
for (let i = 1; i <= starPyramid; i++) {
    let spaces = '';
    for (let j = 1; j <= starPyramid - i; j++) {
        spaces += " ";
    }
    let row3 = spaces;
    for (let z = 1; z <= 2 * i - 1; z++) {
        row3 += '*';
    }
    console.log(row3);
}


