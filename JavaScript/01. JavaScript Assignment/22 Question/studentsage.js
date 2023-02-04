const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sorting array and finding min and max age.
ages.sort((a, b) => a - b);

const min = ages[0];
console.log(`Min Age is ${min}`);

const max = ages[ages.length - 1];
console.log(`Max Age is ${max}`);

// Median age
const median = (ages[Math.floor(ages.length / 2)] + ages[Math.ceil(ages.length / 2) - 1]) / 2;
console.log(`Median Age is ${median}`);

// Average age of students
const average = ages.reduce((sum, age) => sum + age, 0) / ages.length;
console.log(`Average Age is ${average}`);

// Range of age (max minus min)
const range = max - min;
console.log(`Range is ${range}`);

// Compare the value of (min - average) and (max - average), use abs() method
const diffMinAvg = Math.abs(min - average);
console.log(`Absolute value of (min - average) is ${diffMinAvg}`);

const diffMaxAvg = Math.abs(max - average);
console.log(`Absolute value of (max - average) is ${diffMaxAvg}`);

