function CalcularMedia(){
    var notaDoprimeiroBimestre = parseFloat(document.getElementById("notaDoprimeiroBimestre").value);
    var notaSegundoBimestre = parseFloat(document.getElementById("notaDosegundoBimestre").value);
    var notaTerceiroBimestre = parseFloat(document.getElementById("notaDoterceiroBimestre").value);
    var notaQuartoBimestre = parseFloat(document.getElementById("notaDoquartoBimestre").value);
    var notaFinal = (notaDoprimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4
    var notaFixada = notaFinal.toFixed(1)
  if(notaFixada<7){
    resultado.innerHTML= "reprovado"
    
    } else if(notaFixada>=7){
      resultado.innerHTML= "aprovado"
    }
  }
   
  
  
  
  
  
  