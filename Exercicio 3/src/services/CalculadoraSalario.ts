import { Funcionario } from '../models/Funcionario';

export class CalculadoraSalario {
  calcular(funcionario: Funcionario): number {
    return funcionario.getSalarioLiquido();
  }
}
