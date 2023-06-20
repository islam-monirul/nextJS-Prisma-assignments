function isPrime(num) {
  let flag = 0;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = 1;
      break;
    }
  }

  if (flag == 1) return false;
  else return true;
}

const primeCheck = isPrime(13);
if (primeCheck) console.log("Prime.");
else console.log("Not Prime.");
