export class Funcionario {
    constructor(
      public nome: string,
      public email: string,
      public salarioBase: number,
      public cargo: string
    ) {}
  
    getSalarioLiquido(): number {
      switch (this.cargo) {
        case 'DESENVOLVEDOR':
          return this.calculaDesenvolvedor();
        case 'DBA':
          return this.calculaDBA();
        case 'TESTADOR':
          return this.calculaTestador();
        case 'GERENTE':
          return this.calculaGerente();
        default:
          throw new Error('Cargo inválido');
      }
    }
  
    private calculaDesenvolvedor(): number {
      return this.salarioBase >= 3000 ? this.salarioBase * 0.8 : this.salarioBase * 0.9;
    }
  
    private calculaDBA(): number {
      return this.salarioBase >= 2000 ? this.salarioBase * 0.75 : this.salarioBase * 0.85;
    }
  
    private calculaTestador(): number {
      return this.salarioBase >= 2000 ? this.salarioBase * 0.75 : this.salarioBase * 0.85;
    }
  
    private calculaGerente(): number {
      return this.salarioBase >= 5000 ? this.salarioBase * 0.7 : this.salarioBase * 0.8;
    }
  }
  