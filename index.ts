import * as Function from './functions';

console.log("A ÁREA DE UM:");

console.log(`- Quadrado de lado 10cm: ${Function.getSquareArea(10)}cm²`);
console.log(`- Quadrado de lado 5cm: ${Function.getSquareArea(5)}cm²`);
console.log(`- Quadrado de lado 100cm: ${Function.getSquareArea(100)}cm²`);

console.log(`- Retângulo de base 10cm e altura 25cm: ${Function.getRectangleArea(10, 25)}cm²`);
console.log(`- Retângulo de base 5cm e altura 30cm: ${Function.getRectangleArea(5, 30)}cm²`);
console.log(`- Retângulo de base 200cm e altura 100cm: ${Function.getRectangleArea(200, 100)}cm²`);

console.log(`- Triângulo de base 10cm e altura 25cm: ${Function.getTriangleArea(10, 25)}cm²`);
console.log(`- Triângulo de base 5cm e altura 30cm: ${Function.getTriangleArea(5, 30)}cm²`);
console.log(`- Triângulo de base 100cm e altura 200cm: ${Function.getTriangleArea(100, 200)}cm²`);

console.log("\nO PERÍMETRO DE UM:");

console.log(`- Quadrado de lado 10cm: ${Function.getPolygonPerimeter([10, 10, 10, 10])}cm`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${Function.getPolygonPerimeter([10, 25, 10, 25])}cm`);
console.log(`- Triângulo cujos lados tem 10cm cada: ${Function.getPolygonPerimeter([10, 10, 10])}cm`);

console.log("\nVERIFICA A FunctionISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:");

console.log(`- 10cm, 5cm e 3cm: ${Function.triangleCheck(10, 5, 3)}`);
console.log(`- 10cm, 5cm e 3cm: ${Function.triangleCheck(10, 5, 8)}`);
console.log(`- 10cm, 5cm e 3cm: ${Function.triangleCheck(30, 30, 30)}`);