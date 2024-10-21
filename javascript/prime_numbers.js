/**
 * Create a function to print all prime nos. between 1 to 100
 */

function isPrime(num) {
  let fact = 0; // counting factorials
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      fact++;
    }
  }
  if (fact === 2) { //Prime numbers have only 2 factorials
    return true;
  } else {
    return false;
  }
}

function checkPrime() {
  let primeNumbers = [];
  for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

console.log(`list of prime numbers between 1 to 100 -> ${checkPrime()}`)
