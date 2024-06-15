//Importando arquivo de 'DescontoStrategy'
const { DescontoStrategy } = require('../FileStrategy/DescontoStrategy');
//Criando classe 'Pedido' com construtor para criar o array de itens 
//e receber regras de descontos
class Pedido {
    constructor() {
        this.items = []; 
        this.descontoStrategy = new DescontoStrategy();
    }
    //criando um método para adicionar
    adicionarItem(item) { 
        this.items.push(item);
    }
    //criando um método para calcular o total
    calcularTotal() {
        let total = this.items.reduce((sum, item) => sum + item.preco, 0);
        return this.descontoStrategy.calcular(total);
    }
    //setando as regras de desconto
    setDescontoStrategy(strategy) {
        this.descontoStrategy = strategy;
    }
}
//exportanto a classe Pedido
module.exports = Pedido;
