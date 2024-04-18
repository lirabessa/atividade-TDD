import { Triangulo, TipoTriangulo } from './Triangulo/triangulo';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro lado do triângulo: ', (lado1) => {
  rl.question('Digite o segundo lado do triângulo: ', (lado2) => {
    rl.question('Digite o terceiro lado do triângulo: ', (lado3) => {
      const tipo = Triangulo.classificar(parseInt(lado1), parseInt(lado2), parseInt(lado3));
      console.log('Tipo de triângulo:', tipo);
      rl.close();
    });
  });
});
