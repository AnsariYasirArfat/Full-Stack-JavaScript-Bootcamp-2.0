let age = (prompt("Enter your age"));
if (age >= 18){
    console.log('You are old enough to drive');
} else {
    console.log(`Wait for the ${((18-age == 1) ? `one year`: `${18-age} years`)} to drive.`)
}