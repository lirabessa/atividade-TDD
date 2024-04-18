import { Funcionario } from '../src/models/Funcionario';
import { CalculadoraSalario } from '../src/services/CalculadoraSalario';

describe('CalculadoraSalario', () => {
  it('Deve calcular salário para Desenvolvedor', () => {
    const funcionario = new Funcionario('João', 'joao@email.com', 3000, 'DESENVOLVEDOR');
    const calculadora = new CalculadoraSalario();
    expect(calculadora.calcular(funcionario)).toBe(2400);
  });

  it('Deve calcular salário para DBA', () => {
    const funcionario = new Funcionario('Maria', 'maria@email.com', 2000, 'DBA');
    const calculadora = new CalculadoraSalario();
    expect(calculadora.calcular(funcionario)).toBe(1500);
  });

  it('Deve calcular salário para Testador', () => {
    const funcionario = new Funcionario('Pedro', 'pedro@email.com', 2500, 'TESTADOR');
    const calculadora = new CalculadoraSalario();
    expect(calculadora.calcular(funcionario)).toBe(1875);
  });

  it('Deve calcular salário para Gerente', () => {
    const funcionario = new Funcionario('Ana', 'ana@email.com', 6000, 'GERENTE');
    const calculadora = new CalculadoraSalario();
    expect(calculadora.calcular(funcionario)).toBe(4200);
  });
});
