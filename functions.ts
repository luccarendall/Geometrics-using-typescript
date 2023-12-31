// Area quadrado = lado²
export function getSquareArea(side: number): number {
  return side ** 2;
}

// Área retângulo = base * altura
export function getRectangleArea(base: number, height: number): number {
  return base * height;
}

// Área triângulo =  (base * altura)/2
export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

// Perímetro de um polígono = ladoA + ladoB + ladoC + ladoD + ladoE + ladoF ...
export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acumulador, side) => acumulador + side, 0); // função reduce que itera pelos elementos do array sides e acumula seus valores
} // (acumulador, side) => acumulador + side é uma função de callback usada na redução. O acumulador começa com o valor inicial de 0, e side é o valor atual do array sendo percorrido. A função de callback simplesmente adiciona o valor side ao acumulador em cada iteração, somando todos os comprimentos dos lados do polígono.


// Verifica se um triângulo é válido com base na medida de seus lados e deve retornar um valor booleano (true ou false) - Regra matematica: Para formar um triângulo, um de seus lados deve ser maior que a diferença absoluta entre os outros dois e menor que a soma deles.
export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
  return checkSideA && checkSideB && checkSideC;
}