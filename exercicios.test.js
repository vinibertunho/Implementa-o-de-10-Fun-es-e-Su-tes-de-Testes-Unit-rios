const {
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
} = require('./exercicios');

describe('🧪 Suíte de Testes Unitários - 10 Regras de Negócio', () => {
  test('1. calcularMedia calcula médias e valida notas', () => {
    expect(calcularMedia(7, 8, 9)).toBe(8);
    expect(calcularMedia(7.5, 8, 9)).toBeCloseTo(8.17, 2);
    expect(() => calcularMedia(-1, 8, 9)).toThrow(
      'Nota inválida: deve estar entre 0 e 10'
    );
    expect(() => calcularMedia(11, 8, 9)).toThrow(
      'Nota inválida: deve estar entre 0 e 10'
    );
  });

  test('2. verificarAprovacao valida nota e frequência mínima', () => {
    expect(verificarAprovacao(7, 75)).toBe(true);
    expect(verificarAprovacao(8.5, 80)).toBe(true);
    expect(verificarAprovacao(6.9, 90)).toBe(false);
    expect(verificarAprovacao(9, 74)).toBe(false);
  });

  test('3. classificarFaixaEtaria classifica faixas e rejeita idade negativa', () => {
    expect(classificarFaixaEtaria(10)).toBe('Criança');
    expect(classificarFaixaEtaria(15)).toBe('Adolescente');
    expect(classificarFaixaEtaria(25)).toBe('Adulto');
    expect(classificarFaixaEtaria(65)).toBe('Idoso');
    expect(() => classificarFaixaEtaria(-5)).toThrow(
      'Idade não pode ser negativa'
    );
  });

  test('4. converterKmParaMilhas converte distância e rejeita valor negativo', () => {
    expect(converterKmParaMilhas(10)).toBeCloseTo(6.21, 2);
    expect(converterKmParaMilhas(0)).toBe(0);
    expect(() => converterKmParaMilhas(-10)).toThrow(
      'Distância não pode ser negativa'
    );
  });

  test('5. gerarEmailCorporativo normaliza os dados', () => {
    expect(gerarEmailCorporativo('Lucas', 'Silva', 'empresa.com')).toBe(
      'lucas.silva@empresa.com'
    );
    expect(gerarEmailCorporativo(' Ana ', ' Souza ', 'TECH.IO')).toBe(
      'ana.souza@tech.io'
    );
  });

  test('6. adicionarItemCarrinho preserva a imutabilidade', () => {
    const carrinhoInicial = ['Monitor', 'Mouse'];
    const novoCarrinho = adicionarItemCarrinho(carrinhoInicial, 'Teclado');

    expect(novoCarrinho).toEqual(['Monitor', 'Mouse', 'Teclado']);
    expect(novoCarrinho).toHaveLength(3);
    expect(carrinhoInicial).toHaveLength(2);
  });

  test('7. calcularSalarioLiquido calcula desconto e valida valores', () => {
    expect(calcularSalarioLiquido(3000, 10)).toBe(2700);
    expect(calcularSalarioLiquido(5000, 0)).toBe(5000);
    expect(() => calcularSalarioLiquido(0, 10)).toThrow(
      'Valores de salário ou desconto inválidos'
    );
    expect(() => calcularSalarioLiquido(3000, -5)).toThrow(
      'Valores de salário ou desconto inválidos'
    );
  });

  test('8. criarProduto cria produto em estoque e valida preço', () => {
    expect(criarProduto(1, 'Monitor', 899.9, 'Informática')).toEqual({
      id: 1,
      nome: 'Monitor',
      preco: 899.9,
      categoria: 'Informática',
      emEstoque: true
    });
    expect(() => criarProduto(2, 'Produto', 0, 'Categoria')).toThrow(
      'Preço deve ser maior que zero'
    );
    expect(() => criarProduto(3, 'Produto', -50, 'Categoria')).toThrow(
      'Preço deve ser maior que zero'
    );
  });

  test('9. ehTrianguloValido aplica a desigualdade triangular', () => {
    expect(ehTrianguloValido(3, 4, 5)).toBe(true);
    expect(ehTrianguloValido(1, 2, 10)).toBe(false);
    expect(ehTrianguloValido(0, 4, 5)).toBe(false);
    expect(ehTrianguloValido(-1, 4, 5)).toBe(false);
  });

  test('10. removerElemento remove ocorrências sem alterar a lista original', () => {
    const listaOriginal = ['banana', 'maca', 'uva'];
    const listaSemMaca = removerElemento(listaOriginal, 'maca');

    expect(listaSemMaca).toEqual(['banana', 'uva']);
    expect(removerElemento([1, 2, 3], 99)).toEqual([1, 2, 3]);
    expect(listaOriginal).toHaveLength(3);
  });
});
