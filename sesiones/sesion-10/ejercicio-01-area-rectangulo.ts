function calcularAreaRectangulo(largo: number, ancho: number): number {
  return largo * ancho;
}

const areaSala: number = calcularAreaRectangulo(5.5, 4.0);
const areaPatio: number = calcularAreaRectangulo(8.0, 6.25);

console.log(`Área de la sala: ${areaSala} m²`);
console.log(`Área del patio: ${areaPatio} m²`);