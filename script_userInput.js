// get the lower limit and higher limit to print all the numbers between them
// printNaturnaNumbers(lowerLimitNaturanal, higherLimitNatural);

function printNaturnaNumbers() {
  let lowerLimitNaturanal, higherLimitNatural;
  lowerLimitNaturanal = parseInt(
    prompt("Enter the lower limit for natural numbers: ")
  );
  higherLimitNatural = parseInt(
    prompt("Enter the higher limit for natural numbers: ")
  );
  let numbers = [];
  console.log(
    "Natural numbers between " +
      lowerLimitNaturanal +
      " and " +
      higherLimitNatural +
      " are: "
  );
  for (let i = lowerLimitNaturanal; i <= higherLimitNatural; i++) {
    numbers.push(i);
  }

  console.log(numbers);
}

// get the lower limit and higher limit and display the odd numbers between them using array
let lowerLimitOdd, higherLimitOdd;

// lowerLimitOdd = parseInt(prompt("Enter the lower limit for odd numbers: "));
// higherLimitOdd = parseInt(prompt("Enter the higher limit for odd numbers: "));

let oddNumbers = [];

console.log(
  "Odd numbers between " + lowerLimitOdd + " and " + higherLimitOdd + " are: "
);
for (let i = lowerLimitOdd; i <= higherLimitOdd; i++) {
  if (i % 2 !== 0) {
    oddNumbers.push(i);
  }
}

console.log(oddNumbers);

// get the lower limit and higher limit and display the even numbers between them using array
let lowerLimitEven, higherLimitEven;

// lowerLimitEven = parseInt(prompt("Enter the lower limit for even numbers: "));
// higherLimitEven = parseInt(prompt("Enter the higher limit for even numbers: "));

let evenNumbers = [];

console.log(
  "Even numbers between " +
    lowerLimitEven +
    " and " +
    higherLimitEven +
    " are: "
);
for (let i = lowerLimitEven; i <= higherLimitEven; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}

console.log(evenNumbers);

// get the lower limit and higher limit and display the prime numbers between them using array
let lowerLimitPrime, higherLimitPrime;

// lowerLimitPrime = parseInt(prompt("Enter the lower limit for prime numbers: "));
// higherLimitPrime = parseInt(
//   prompt("Enter the higher limit for prime numbers: ")
// );

let primeNumbers = [];

console.log(
  "Prime numbers between " +
    lowerLimitPrime +
    " and " +
    higherLimitPrime +
    " are: "
);
for (let i = lowerLimitPrime; i <= higherLimitPrime; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primeNumbers.push(i);
  }
}

console.log(primeNumbers);
