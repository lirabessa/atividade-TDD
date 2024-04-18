// Triangulo.ts
export enum TipoTriangulo {
    EQUILATERO = 'Equilátero',
    ISOSCELES = 'Isósceles',
    ESCALENO = 'Escaleno',
    INVALIDO = 'Inválido',
  }
  
  export class Triangulo {
    static classificar(lado1: number, lado2: number, lado3: number): TipoTriangulo {
      if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) return TipoTriangulo.INVALIDO;
      if (lado1 === lado2 && lado2 === lado3) return TipoTriangulo.EQUILATERO;
      if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) return TipoTriangulo.ISOSCELES;
      if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) return TipoTriangulo.ESCALENO;
      return TipoTriangulo.INVALIDO;
    }
  }
  