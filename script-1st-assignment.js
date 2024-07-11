
    function printNumbers(type) {
        var lowerLimit = parseInt(prompt("Enter the lower limit:"));
        var upperLimit = parseInt(prompt("Enter the upper limit:"));

        if (!isNaN(lowerLimit) && !isNaN(upperLimit)) {
            if (lowerLimit > upperLimit) {
                alert("Lower limit should be less than or equal to upper limit.");
                return;
            }

            var numbers = [];

            switch (type) {
                case 'natural':
                    for (var i = lowerLimit; i <= upperLimit; i++) {
                        numbers.push(i);
                    }
                    displayNumbers("Natural Numbers", numbers);
                    break;
                case 'odd':
                    for (var i = lowerLimit; i <= upperLimit; i++) {
                        if (i % 2 !== 0) {
                            numbers.push(i);
                        }
                    }
                    displayNumbers("Odd Numbers", numbers);
                    break;
                case 'even':
                    for (var i = lowerLimit; i <= upperLimit; i++) {
                        if (i % 2 === 0) {
                            numbers.push(i);
                        }
                    }
                    displayNumbers("Even Numbers", numbers);
                    break;
                case 'prime':
                    for (var num = lowerLimit; num <= upperLimit; num++) {
                        if (isPrime(num)) {
                            numbers.push(num);
                        }
                    }
                    displayNumbers("Prime Numbers", numbers);
                    break;
                default:
                    alert("Invalid selection.");
                    break;
            }
        } else {
            alert("Invalid input. Please enter valid numbers.");
        }
    }

    function displayNumbers(type, numbers) {
        var output = "<h3>" + type + ":</h3>";
        output += numbers.join(" ");
        document.getElementById("output").innerHTML = output;
    }

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        var i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }
