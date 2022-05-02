function calcular(){
    var b1 = document.querySelector("#b1").value;
    var b2 = document.querySelector("#b2").value;
    var B = (parseFloat(b1) + parseFloat(b2)) / 2;

    if (B > 0 && A2 != String)
        document.getElementById('resultado').innerHTML = 'Valor de B é ' + B + " mm";
    else
        document.getElementById('resultado').innerHTML = "Digite um número";

    var a1_1 = document.querySelector("#a1_1").value;
    var a1_2 = document.querySelector("#a1_2").value;
    var A1 = (parseFloat(a1_1) + parseFloat(a1_2)) / 2;

    if (A1 > 0 && A2 != String)
        document.getElementById('resultadodeA1').innerHTML = 'Valor de A1 é ' + A1 + " mm";
    else
        document.getElementById('resultadodeA1').innerHTML = "Digite um número"

    var a2_1 = document.querySelector("#a2_1").value;
    var a2_2 = document.querySelector("#a2_2").value;
    var A2 = (parseFloat(a2_1) + parseFloat(a2_2)) / 2;

    if (A2 > 0 && A2 != String)
        document.getElementById('resultadodeA2').innerHTML = 'Valor de A2 é ' + A2 + " mm";
    else
        document.getElementById('resultadodeA2').innerHTML = "Digite um número"

    var toleranciaK1 = document.querySelector("#toleranciaK1").value;
    var toleranciaK2 = document.querySelector("#toleranciaK2").value;

    var SK1 = (A1 - B) + toleranciaK1;
    var SK2 = (A2 - B) + toleranciaK2;

    if ((toleranciaK1) && (toleranciaK2) > 0){
    document.getElementById('resultadodeSK1').innerHTML = 'Valor do calço de ajuste SK1 é ' + SK1 + " mm";
    document.getElementById('resultadodeSK2').innerHTML = 'Valor do calço de ajuste SK2 é ' + SK2 + " mm";
    }
    // document.getElementsById('#resultadodeSK1').innerHTML='';
    //document.getElementsById('#resultadodeSK2').innerHTML='';
}
function limparDados(){
   b1.value = '';
   b2.value = '';
   a1_1.value = '';
   a1_2.value = '';
   a2_1.value = '';
   a2_2.value = '';
   toleranciaK1.value = '';
   toleranciaK2.value = '';
   document.getElementById('resultadodeSK1').innerHTML = '';
   document.getElementById('resultadodeSK2').innerHTML = '';

}

