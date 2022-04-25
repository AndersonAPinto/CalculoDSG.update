function calcular(){

var b1 = document.querySelector("#b1").value;
var b2 = document.querySelector("#b2").value;
var B = (parseFloat(b1) + parseFloat(b2)) / 2;

if (B > 0 )
    document.getElementById('resultado').innerHTML= 'Valor de B é ' + B +" mm" ;
else  
    document.getElementById('resultado').innerHTML= "Digite um número" ;
    
} 
