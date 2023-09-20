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

