
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

//   valida email aqui
//   var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
function testInfo(phoneInput){
var re = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;
var OK = re.exec(phoneInput.value);
if (!OK){
    // window.alert(RegExp.input + " Não é um número de telefone com código de área!");
    var alerta = document.getElementById("alerta2")
    alerta.style.display = 'block'
    alerta.innerHTML = 'Número invalido'
    setTimeout(function(){ alerta.style.display = 'none';}, 2000)
}else{
    // window.alert("Obrigado, o seu número de telefone é " + OK[0]);
    var alerta = document.getElementById("alerta")
    alerta.style.display = 'block'
    alerta.innerHTML = 'Número valido'
    setTimeout(function(){ alerta.style.display = 'none';}, 2000)
}
}

// /*Valida email*/

// var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// function testInfo(emailvalida){
//     var OK = re.exec(emailvalida.value);
//     if (!OK){
//         var alerta = document.getElementById("alerta2")
//         alerta.style.display = 'block'
//         alerta.innerHTML = 'Email invalido'
//         setTimeout(function(){ alerta.style.display = 'none';}, 2000)
//     }else{
//         var alerta = document.getElementById("alerta")
//         alerta.style.display = 'block'
//         alerta.innerHTML = 'Email Valido'
//         setTimeout(function(){ alerta.style.display = 'none';}, 1000)
//     }
//     }