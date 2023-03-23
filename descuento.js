function calcularPrecio(precio, cantidad) {
    let descuento = 0;
    if (cantidad >= 2 && cantidad <= 4) {
      descuento = 0.1;
    } else if (cantidad >= 5 && cantidad <= 10) {
      descuento = 0.2;
    } else if (cantidad > 10) {
      descuento = 0.3;
    }
    return precio * cantidad * (1 - descuento);
  }
  console.log(calcularPrecio(3));