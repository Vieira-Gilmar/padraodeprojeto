//Importando classes de da pasta 'Produto'
const { Comida, Bebida, Sobremesa } = require('./Produto');
//criando classe ProdutoFactory para aplicar o design pattern 'Factory Method'
class ProdutoFactory {
    //criando o método para criar os produtos e verificando o tipo
    static criarProduto(tipo, nome, preco) { 
        switch(tipo) {
            case 'comida':
                return new Comida(nome, preco);
            case 'bebida':
                return new Bebida(nome, preco);
            case 'sobremesa':
                return new Sobremesa(nome, preco);
            default:
                throw new Error('Produto não encontrado!');
        }
    }
}

module.exports = ProdutoFactory;
