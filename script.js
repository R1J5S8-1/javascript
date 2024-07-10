// display numbers from 1 to 100
console.log("Numbers from 1 to 100: ");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// display odd numbers from 1 to 100
console.log("Odd numbers from 1 to 100: ");
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// display even numbers from 1 to 100
console.log("Even numbers from 1 to 100: ");
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// display prime numbers from 1 to 100
console.log("Prime numbers from 1 to 100: ");
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}
