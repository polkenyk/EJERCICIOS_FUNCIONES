function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  if (esPar(4)) {
    console.log("El número es par");
  } else {
    console.log("El número es impar");
  }