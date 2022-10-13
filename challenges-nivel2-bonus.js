1.
function primeiroepar(number1, number2) {
  if (number1 % 2 === 0 && number2 % 2 !== 0) {
    return true;
  } else {
    return false
  }
}

console.log(primeiroepar(2, 3));

1.2

function imparPar(number1, number2) {
  if (number1 % 2 !== 0 && number2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(imparPar(1,2))

2.
function positivoNegativo (number1, number2) {
   if (number1 > 0 && number2 < 0) {
    return true
   } else {
    return false
   }
}

console.log(positivoNegativo(2, -2))

2.1

function negativoPositivo(number1, number2) {
  if (number1 < 0 && number2 > 0) {
    return true
  } else {
    return false
  }
}

console.log(negativoPositivo(2, -3))

3.

function multiplos (number1, number2) {
    if (number1 % 2 === 0 && number2 % 3 === 0) {
        return true
    } else {
        return false
    }
}

console.log(multiplos(4,2))

3.1
function inversoMulti (number1, number2) {
    if (number1 % 3 === 0 && number2 % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(inversoMulti(6,2))

3.2

function multtwoFive(number1, number2) {
  if (number1 % 2 === 0 && number2 % 5 === 0) {
    return true
  } else {
    return false
  }
}

console.log(multtwoFive(2, 10));


3.3 

function multFiveTwo (number1, number2) {
    if (number1 % 5 === 0 && number2 % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(multFiveTwo(5,10))