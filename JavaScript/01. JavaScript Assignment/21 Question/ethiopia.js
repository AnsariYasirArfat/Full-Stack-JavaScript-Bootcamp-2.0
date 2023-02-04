// Array Which doesn't contain 'Ethiopia'
const countries1 = ['India', 'Turkey', 'Italy', 'Switzerland'];
if (countries1.indexOf('Ethiopia') === -1) {
    countries1.push('Ethiopia');
    console.log(`Array didn't contain 'Ethiopia', but added to an array `)
} else {
    console.log('ETHIOPIA');
}
console.log(countries1);


// Array Which now contain 'Ethiopia' & changed it to 'ETHIOPIA'
const countries2 = countries1;
for (let i = 0; i < countries2.length; i++) {
    if (countries2[i] === 'Ethiopia') {
        countries2[i] = 'ETHIOPIA';
        console.log(`Array now contain 'Ethiopia' & changed it to UpperCase = 'ETHIOPIA'.`)
        break;
    }
}
console.log(countries2);
