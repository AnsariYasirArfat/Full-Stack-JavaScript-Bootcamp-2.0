let grade = (prompt("Enter your score out of 100"));

if (grade > 100 || grade < 0) {
    console.log(`You have entered invalid scores`);
} else if (grade >= 90) {
    console.log(`You got an A`);
} else if (grade >= 80) {
    console.log(`You got an B`);
} else if (grade >= 70) {
    console.log(`You got an C`);
} else if (grade >= 60) {
    console.log(`You got an D`);
} else if (grade >= 50) {
    console.log(`You got an E`);
} else {
    console.log(`You got an F`);
}