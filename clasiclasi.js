function clasificarEdad(edad) {
    if (edad >= 90) {
      return "A";
    } else if (edad >= 80 && edad <= 89) {
      return "B";
    } else if (edad >= 70 && edad <= 79) {
      return "C";
    } else if (edad >= 60 && edad <= 69) {
        return "D";
    } else {
      return "F";
    }
  }

console.log(clasificarEdad(94));

