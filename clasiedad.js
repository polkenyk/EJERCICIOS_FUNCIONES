function clasificarEdad(edad) {
    if (edad < 13) {
      return "niño";
    } else if (edad >= 13 && edad <= 18) {
      return "adolescente";
    } else if (edad >= 19 && edad <= 64) {
      return "adulto";
    } else {
      return "mayor";
    }
  }

console.log(clasificarEdad(10));
console.log(clasificarEdad(16));
console.log(clasificarEdad(35));
console.log(clasificarEdad(70));
