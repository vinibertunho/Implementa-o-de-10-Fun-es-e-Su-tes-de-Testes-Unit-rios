function calcularMedia(nota1, nota2, nota3) {
  const notas = [nota1, nota2, nota3];

  if (
    notas.some(
      (nota) => typeof nota !== 'number' || !Number.isFinite(nota) || nota < 0 || nota > 10
    )
  ) {
    throw new Error('Nota inválida: deve estar entre 0 e 10');
  }

  return (nota1 + nota2 + nota3) / 3;
}

function verificarAprovacao(media, frequencia) {
  return media >= 7 && frequencia >= 75;
}

function classificarFaixaEtaria(idade) {
  if (idade < 0) {
    throw new Error('Idade não pode ser negativa');
  }

  if (idade <= 12) return 'Criança';
  if (idade <= 17) return 'Adolescente';
  if (idade <= 59) return 'Adulto';
  return 'Idoso';
}

function converterKmParaMilhas(km) {
  if (km < 0) {
    throw new Error('Distância não pode ser negativa');
  }

  return km * 0.621371;
}

function gerarEmailCorporativo(nome, sobrenome, empresa) {
  return `${nome.trim().toLowerCase()}.${sobrenome.trim().toLowerCase()}@${empresa
    .trim()
    .toLowerCase()}`;
}

function adicionarItemCarrinho(carrinho, item) {
  return [...carrinho, item];
}

function calcularSalarioLiquido(salarioBruto, percentualDesconto) {
  if (
    salarioBruto <= 0 ||
    percentualDesconto < 0 ||
    percentualDesconto > 100
  ) {
    throw new Error('Valores de salário ou desconto inválidos');
  }

  return salarioBruto - salarioBruto * (percentualDesconto / 100);
}

function criarProduto(id, nome, preco, categoria) {
  if (preco <= 0) {
    throw new Error('Preço deve ser maior que zero');
  }

  return { id, nome, preco, categoria, emEstoque: true };
}

function ehTrianguloValido(ladoA, ladoB, ladoC) {
  return (
    ladoA > 0 &&
    ladoB > 0 &&
    ladoC > 0 &&
    ladoA < ladoB + ladoC &&
    ladoB < ladoA + ladoC &&
    ladoC < ladoA + ladoB
  );
}

function removerElemento(array, elemento) {
  return array.filter((item) => item !== elemento);
}

module.exports = {
  calcularMedia,
  verificarAprovacao,
  classificarFaixaEtaria,
  converterKmParaMilhas,
  gerarEmailCorporativo,
  adicionarItemCarrinho,
  calcularSalarioLiquido,
  criarProduto,
  ehTrianguloValido,
  removerElemento
};
