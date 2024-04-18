// Triangulo.test.ts
import { Triangulo, TipoTriangulo } from './triangulo';

describe('Triangulo', () => {
  test('Classifica triângulo equilátero válido', () => {
    expect(Triangulo.classificar(5, 5, 5)).toBe(TipoTriangulo.EQUILATERO);
  });

  test('Classifica triângulo isósceles válido', () => {
    expect(Triangulo.classificar(5, 5, 3)).toBe(TipoTriangulo.ISOSCELES);
  });

  test('Classifica triângulo escaleno válido', () => {
    expect(Triangulo.classificar(3, 4, 5)).toBe(TipoTriangulo.ESCALENO);
  });

  test('Lados com valor zero devem ser inválidos', () => {
    expect(Triangulo.classificar(0, 5, 5)).toBe(TipoTriangulo.INVALIDO);
    expect(Triangulo.classificar(5, 0, 5)).toBe(TipoTriangulo.INVALIDO);
    expect(Triangulo.classificar(5, 5, 0)).toBe(TipoTriangulo.INVALIDO);
  });

  test('Lados com valor negativo devem ser inválidos', () => {
    expect(Triangulo.classificar(-1, 5, 5)).toBe(TipoTriangulo.INVALIDO);
    expect(Triangulo.classificar(5, -1, 5)).toBe(TipoTriangulo.INVALIDO);
    expect(Triangulo.classificar(5, 5, -1)).toBe(TipoTriangulo.INVALIDO);
  });

  test('Soma de dois lados igual ao terceiro lado deve ser inválido', () => {
    expect(Triangulo.classificar(2, 3, 5)).toBe(TipoTriangulo.INVALIDO);
    expect(Triangulo.classificar(3, 5, 2)).toBe(TipoTriangulo.INVALIDO);
    expect(Triangulo.classificar(5, 2, 3)).toBe(TipoTriangulo.INVALIDO);
  });

  test('Todos os lados iguais a zero devem ser inválidos', () => {
    expect(Triangulo.classificar(0, 0, 0)).toBe(TipoTriangulo.INVALIDO);
  });
});
