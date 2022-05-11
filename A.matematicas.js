function sumar(){
var p2 = prompt("¿Quieres que sume para ti?")
if (p2 === "si"){
  alert("A continuación tienes que poner los numeros que deseas que sume para tí")
  var sumaA = prompt("Numero 1")
  alert("+")
  var sumaB = prompt("Numero 2")

  var num1 = parseFloat(sumaA)
  var num2 = parseFloat(sumaB)
  let suma = num1 + num2;
  alert("El resultado es: " + suma)
  alert("Me alegro mucho de poder ayudarte")
}
else {alert("Mmm, okay...")}
}
//-------------------------------------------------------------------------------------//
function multiplicar(){
var p2 = prompt("¿Quieres que multiplique para ti?")
if (p2 === "si"){
  alert("A continuación tienes que poner los numeros que deseas que multiplique para tí")
  var mulA = prompt("Numero 1")
  alert("X")
  var mulB = prompt("Numero 2")

  var num1 = parseFloat(mulA)
  var num2 = parseFloat(mulB)
  let multi = num1 * num2
  alert("El resultado es: " + multi)
  alert("Me alegro mucho de poder ayudarte")
}
else {alert("Mmm, okay...")}
}
//------------------------------------------------------------------------------------//
function dividir(){
var p2 = prompt("¿Quieres que divida para ti?")
if (p2 === "si"){
  alert("A continuación tienes que poner los numeros que deseas que divida para tí")
  var divA = prompt("Numero 1")
  alert(":");
  var divB = prompt("Numero 2")

  var num1 = parseFloat(divA)
  var num2 = parseFloat(divB)
  let divi = num1 / num2
  alert("El resultado es: " + divi)
  alert("Me alegro mucho de poder ayudarte")
}
else {alert("Mmm, okay...")}
}
//------------------------------------------------------------------------------------//
function restar(){
var p2 = prompt("¿Quieres que reste para ti?")
if (p2 === "si"){
  alert("A continuación tienes que poner los numeros que deseas que reste para tí")
  var restaA = prompt("Numero 1")
  alert("-");
  var restaB = prompt("Numero 2")

  var num1 = parseFloat(restaA)
  var num2 = parseFloat(restaB)
  let resta = num1 - num2
  alert("El resultado es: " + resta)
  alert("Me alegro mucho de poder ayudarte")
}
else {alert("Mmm, okay...")}
}


          


