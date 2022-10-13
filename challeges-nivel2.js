1.
function maiorEntre (number1, number2) {
    if (number1 > number2) {
        console.log(number1, 'é o maior entre eles')
    } else if (number2 > number1) {
        console.log(number2, 'é o maior entre eles')
        return maiorEntre
    }
}

maiorEntre(5,10)

1.2

function numberSame(number1, number2) {
  if (number1 === number2) {
    return true
  } else {
    return false
  }
}

console.log(numberSame(2,3))

2.

function primeiroMaior(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return true
  } else if (numberOne < numberOne) {
    return false
  } else {
    return 'os numeros são iguais, coloque digitos diferentes'
  }
}

console.log(primeiroMaior(3,3))

2.1

function maiorOuigual(number1, number2) {
  if (number1 > number2) {
    return true
  } else if (number1 >= number2) {
    return true
  } else {
    return false
  }
}

console.log(maiorOuigual(4,3))

2.2

function menorQueosegundo(number1, number2) {
  if (number1 < number2) {
    return true
  } else {
    return false
  }
}

console.log(menorQueosegundo(2, 3))

2.3

function menorouIgual(number1, number2) {
  if (number1 <= number2) {
    return true
  } else {
    return false;
  }
}

console.log(menorouIgual(4,3))

3.

function multiplo (mult1, mult2) {
    if (mult1 % mult2 === 0) {
        return true
    } else if (mult1 % mult2 !==0) {
        return false
    }
}

console.log(multiplo(4,2))

4.

function divisorOne (number1, number2) {
    if (number1 % 2 === 0 && number2 % 2 === 0) {
        return true
    } else
    return false
}

console.log (divisorOne(4,2))
