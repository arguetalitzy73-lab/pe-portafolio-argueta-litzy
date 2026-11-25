function identidad<T>(valor: T): T {
  return valor;
}

// Llamadas con inferencia de tipo
const duiInferido = identidad("04829103-7");
const carnetInferido = identidad(20261506);
const solvenciaInferida = identidad(true);

// Llamadas con tipo explícito
const duiExplicito = identidad<string>("04829103-7");
const carnetExplicito = identidad<number>(20261506);
const solvenciaExplicita = identidad<boolean>(false);

console.log({ duiInferido, carnetInferido, solvenciaInferida });
console.log({ duiExplicito, carnetExplicito, solvenciaExplicita });