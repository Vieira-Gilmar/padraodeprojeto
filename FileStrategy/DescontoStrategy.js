//Classe para as regras de desconto que não retorna alterações
class DescontoStrategy {
  calcular(total) {
    return total;
  }
}
//Classe para regra de desconto que aplica um desconto efetivo para valores acima de 30 reais
class DescontoNet extends DescontoStrategy {
  calcular(total) {
    if(total >= 30){
      return total * 0.9; // 10% de desconto
    }else{
      return total; 
    }
      
  }
}
//exportando os módulos
module.exports = { DescontoStrategy, DescontoNet };
  