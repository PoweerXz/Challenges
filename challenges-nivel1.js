1.
function imparPar(verify1, verify2) {
  if (verify1 % 2 === 0) {
    console.log(verify1 + " é " + "par");
  } else if (verify1 % 2 !== 0) {
    console.log(verify1 + " é " + "impar");
  }
  if (verify2 % 2 === 0) {
    console.log(verify2 + " é " + "par");
  } else if (verify2 % 2 !== 0) {
    console.log(verify2 + " é " + "impar");
  }
  return imparPar;
}

imparPar(10, 31);

2.

function positivoNegativo(number1, number2) {
  if (number1 > 0) {
    console.log(number1, "é um número positivo");
  } else if (number1 <= 0) {
    console.log(number1, "é um número negativo");
  }
  if (number2 > 0) {
    console.log(number2, "é um número positivo");
  } else if (number2 <= 0) {
    console.log(number2, "é um número negativo");
  }
  return positivoNegativo;
}

positivoNegativo(-10, 1);

3.

function mult2(num1, num2) {
  if (num1 % 2 === 0) {
    console.log(num1, "é um multiplo de 2");
  } else if (num1 % 2 !== 0) {
    console.log(num1, "não é um multiplo de 2");
  }
  if (num2 % 2 === 0) {
    console.log(num2, "é um multiplo de 2");
  } else if (num2 % 2 !== 0) {
    console.log(num2, "não é um multiplo de 2");
  }
  return mult2;
}

mult2(2, 3);

4.

function quaDrado(numeroOne) {
  if (numeroOne && numeroOne) {
    console.log("Seu resultado é", +numeroOne);
  }
  return quaDrado;
}

quaDrado(6 ** 2);

5.

function triplo(parametro1) {
  if (parametro1) {
    let resultado = parametro1 
    return resultado;
  }
}

console.log(triplo(3 * 6));

6.

function antecessor(numero1) {
  if (numero1 && numero1) {
    let resultado = numero1 - 1;
    return resultado;
  }
}

console.log(antecessor(2));

7.

function sucessor(nuMero) {
  if (nuMero && nuMero) {
    let resultado = nuMero + 1;
    return resultado;
  }
}

console.log(sucessor(4));
