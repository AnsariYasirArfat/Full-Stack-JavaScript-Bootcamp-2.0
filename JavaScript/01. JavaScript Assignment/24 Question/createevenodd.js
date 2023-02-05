let evenNumber = [];
let oddNumber = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumber.push(i);
  } else {
    oddNumber.push(i);
  }
}

console.log(`Even numbers between (0 to 100) are: ${evenNumber}`);
console.log(`Odd numbers between (0 to 100) are: ${oddNumber}`);
