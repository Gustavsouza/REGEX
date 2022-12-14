
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions


function testInfo(phoneInput){
var re = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
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
function testEmail(emailvalida){
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var OK = re.exec(emailvalida.value);
    if (!OK){
        var alerta = document.getElementById("alerta2")
        alerta.style.display = 'block'
        alerta.innerHTML = 'Email invalido'
        setTimeout(function(){ alerta.style.display = 'none';}, 2000)
    }else{
        var alerta = document.getElementById("alerta")
        alerta.style.display = 'block'
        alerta.innerHTML = 'Email Valido'
        setTimeout(function(){ alerta.style.display = 'none';}, 1000)
    }
}
/* Mascara do telefone*/
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('phone').onkeyup = function(){
		mascara( this, mtel );
	}
}


/*Máscara telefone fixo*/
function mask(o, f) {
    setTimeout(function() {
      var v = phonefixo(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
  function phonefixo(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }