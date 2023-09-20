# Geometrics using typescript

## Sobre

O objetivo principal deste repositório é disponibilizar um conjunto de funções prontas para uso, auxiliando no cálculo de propriedades geométricas básicas. As funções estão implementadas em TypeScript e podem ser facilmente importadas e utilizadas em seus próprios projetos ou experimentos. O arquivo principal deste repositório é `functions.ts`.

Este arquivo contém a implementação das funções que permitem calcular a área de quadrados e retângulos, a área e o perímetro de triângulos, bem como verificar se é possível formar triângulos com base nas medidas de seus lados.

## Funções Disponíveis

A seguir, estão listadas as funções disponíveis no arquivo `functions.ts`:

- `getSquareArea(side: number): number`: Calcula a área de um quadrado com base na medida de um dos lados.
- `getRectangleArea(base: number, height: number): number`: Calcula a área de um retângulo com base nas medidas da base e altura.
- `getTriangleArea(base: number, height: number): number`: Calcula a área de um triângulo com base nas medidas da base e altura.
- `getPolygonPerimeter(sides: number[]): number`: Calcula o perímetro de um polígono fechado com base em uma lista de medidas dos lados.
- `triangleCheck(sideA: number, sideB: number, sideC: number): boolean`: Verifica se é possível formar um triângulo com base nas medidas dos três lados.

## Utilizando as Funções

Para utilizar as funções deste repositório, siga os seguintes passos:

1. Clone o repositório para o seu ambiente de desenvolvimento, ou copie o conteúdo do arquivo `functions.ts` para o seu projeto.

2. Importe as funções necessárias em seu código TypeScript conforme mostrado nos exemplos do arquivo `index.ts`.

3. Utilize as funções com os parâmetros apropriados para calcular áreas, perímetros ou verificar a existência de triângulos válidos.

Esperamos que este conjunto de funções seja útil em seus projetos relacionados à geometria. Divirta-se explorando as funcionalidades e experimentando com as propriedades geométricas!
