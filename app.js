// Importando módulos necessários
const ProdutoFactory = require('./files/ProdutoFactory');
const Pedido = require('./files/pedido');
const {DescontoNet} = require('./FileStrategy/DescontoStrategy');
const prompt = require('prompt-sync')(); // Importando prompt-sync para interação com o usuário

// Função para criar um produto baseado na escolha do cliente
function escolherProduto(tipo, opcoes) {
    let escolha;
    while (true) {
        escolha = prompt(`Escolha um(a) ${tipo}: ${opcoes.map((opcao, index) => 
            `${index + 1} para ${opcao.nome} de R$${opcao.preco.toFixed(2)}`).join('; ')}; 0 para pular: `);
        escolha = parseInt(escolha, 10);
        if (escolha >= 0 && escolha <= opcoes.length) {
            break;
        } else {
            console.log('Opção inválida. Tente novamente.');
        }
    }
    return escolha === 0 ? null : opcoes[escolha - 1];
}

// Definindo opções de produtos disponíveis
const opcoesComida = [
    { nome: 'Hambúrguer simples', preco: 15.00 },
    { nome: 'Hambúrguer duplo', preco: 22.00 }
];

const opcoesBebida = [
    { nome: 'Sprite pequena', preco: 6.00 },
    { nome: 'Coca-cola grande', preco: 9.00 }
];

const opcoesSobremesa = [
    { nome: 'Pudim pequeno', preco: 6.00 },
    { nome: 'Brownie grande', preco: 8.50 }
];

// Interagindo com o usuário para montar o pedido
const pedido = new Pedido();

let comidaEscolhida = escolherProduto('comida', opcoesComida);
if (comidaEscolhida) pedido.adicionarItem(ProdutoFactory
    .criarProduto('comida', comidaEscolhida.nome, comidaEscolhida.preco));
let bebidaEscolhida = escolherProduto('bebida', opcoesBebida);
if (bebidaEscolhida) pedido.adicionarItem(ProdutoFactory
    .criarProduto('bebida', bebidaEscolhida.nome, bebidaEscolhida.preco));
let sobremesaEscolhida = escolherProduto('sobremesa', opcoesSobremesa);
if (sobremesaEscolhida) pedido.adicionarItem(ProdutoFactory
    .criarProduto('sobremesa', sobremesaEscolhida.nome, sobremesaEscolhida.preco));

// Setando a estratégia de desconto
pedido.setDescontoStrategy(new DescontoNet());

// Imprimindo os resultados
pedido.items.forEach(item => {
    console.log(`${item.nome} .... R$${item.preco.toFixed(2)}`);
});
console.log(`Valor total é: .... R$${pedido.calcularTotal().toFixed(2)}`);
