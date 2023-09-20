"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
// Area quadrado = lado²
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
// Área retângulo = base * altura
function getRectangleArea(base, height) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
// Área triângulo =  (base * altura)/2
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
// Perímetro de um polígono = ladoA + ladoB + ladoC + ladoD + ladoE + ladoF ...
function getPolygonPerimeter(sides) {
    return sides.reduce((acumulador, side) => acumulador + side, 0); // função reduce que itera pelos elementos do array sides e acumula seus valores
} // (acumulador, side) => acumulador + side é uma função de callback usada na redução. O acumulador começa com o valor inicial de 0, e side é o valor atual do array sendo percorrido. A função de callback simplesmente adiciona o valor side ao acumulador em cada iteração, somando todos os comprimentos dos lados do polígono.
exports.getPolygonPerimeter = getPolygonPerimeter;
// Verifica se um triângulo é válido com base na medida de seus lados e deve retornar um valor booleano (true ou false) - Regra matematica: Para formar um triângulo, um de seus lados deve ser maior que a diferença absoluta entre os outros dois e menor que a soma deles.
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
