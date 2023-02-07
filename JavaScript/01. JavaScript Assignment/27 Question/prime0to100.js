

for (let number = 0; number <= 100; number++) {
    let result = true;
    if (number <= 1) result = false;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            result = false;
            break;
        }
    }
    if (result) {
        console.log(`${number}`);
    };
}