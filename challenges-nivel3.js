//1.

function maiorEntre(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    return number1;
  } else if (number2 > number1 && number2 > number3) {
    return number2;
  } else if (number3 > number1 && number3 > number2) {
    return number3;
  }
}

console.log(maiorEntre(1, 2, 3));

//1.2

function numberSame (number1, number2, number3) {
    if(number1 == number2 && number1 == number3) {
        return true
        } else {
            return false
        }
}

console.log(numberSame(1,1,1))

//2.

function tree (value1, value2, value3) {
    if (value1 && value2 && value3) {
      return value2
    }
}

console.log(tree(1,2,3))

//3.

function ordemCrescente (number1, number2, number3) {
    if (number1 < number2 && number2 < number3) {
        const resultado = number1 + 1 === number2 && number2 + 1 === number3;
        return resultado
    } else {
        return false
    }
}

console.log(ordemCrescente(1,2,3))

//3.1 bonus

function decresCente (number1, number2, number3) {
    if (number1 > number2 && number2 > number3) {
        const resultado = number1 - 1 === number2 && number2 - 1 === number3;
        return resultado
    } else {
        return false
    }
}

console.log(decresCente(3,2,1))

