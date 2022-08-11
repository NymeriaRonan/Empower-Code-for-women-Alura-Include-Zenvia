function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = (valorEmDolarNumerico * 0.19).toFixed(2);
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em dolar é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverTerEuro() {
    var valorElementoEuro = document.getElementById("valor");
    var valor = valorElementoEuro.value;
    var valorEmEuro = parseFloat(valor);
    var valor = (valorEmEuro * 0.0026).toFixed(2);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Valor em Euro é € " + valor;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterLibra() {
    var valorElementoLibra = document.getElementById("valor");
    var valor = valorElementoLibra.value;
    var valorEmLibra = parseFloat(valor);
    var valor = (valorEmLibra * 0.16).toFixed(2);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = " O Valor em libra é £ " + valor;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  