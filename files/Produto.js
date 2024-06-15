//criando classe produto e setando parâmetros básicos como 'nome' e 'preço'
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
//criação de classes que estendem a classe 'Produto'
class Comida extends Produto {};
class Bebida extends Produto {};
class Sobremesa extends Produto {};

//Exportando essas classes.
module.exports = {Produto, Comida, Bebida, Sobremesa};
