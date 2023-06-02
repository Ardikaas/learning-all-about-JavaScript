var hasil = 0; 

function one(){
  document.getElementById("angka").innerHTML += "1";
}
function two(){
  document.getElementById("angka").innerHTML += "2";
}
function three(){
  document.getElementById("angka").innerHTML += "3";
}
function four(){
  document.getElementById("angka").innerHTML += "4";
}
function five(){
  document.getElementById("angka").innerHTML += "5";
}
function six(){
  document.getElementById("angka").innerHTML += "6";
}
function seven(){
  document.getElementById("angka").innerHTML += "7";
}
function eight(){
  document.getElementById("angka").innerHTML += "8";
}
function nine(){
  document.getElementById("angka").innerHTML += "9";
}
function zero(){
  document.getElementById("angka").innerHTML += "0";
}
function comma(){
  document.getElementById("angka").innerHTML += ".";
}
function sum(){
  var x = document.getElementById("angka").innerHTML;
  document.getElementById("operasi").innerHTML = "+";
  document.getElementById("angka").innerHTML = "";
  var pisah = parseFloat(x);
  hasil += pisah;
  document.getElementById("total").innerHTML = hasil;
}
function subtract(){
  var x = document.getElementById("angka").innerHTML;
  document.getElementById("operasi").innerHTML = "-";
  document.getElementById("angka").innerHTML = "";
  var pisah = parseFloat(x);
  hasil -= pisah;
  document.getElementById("total").innerHTML = hasil;
}
function time(){
  var x = document.getElementById("angka").innerHTML;
  document.getElementById("operasi").innerHTML = "*";
  document.getElementById("angka").innerHTML = "";
  var pisah = parseFloat(x);
  hasil *= pisah;
  document.getElementById("total").innerHTML = hasil;
}
function divide(){
  var x = document.getElementById("angka").innerHTML;
  document.getElementById("operasi").innerHTML = "/";
  document.getElementById("angka").innerHTML = "";
  var pisah = parseFloat(x);
  hasil /= pisah;
  document.getElementById("total").innerHTML = hasil;
}
function ambil(){
  document.getElementById("angka").innerHTML = "";
  document.getElementById("operasi").innerHTML = "";
  document.getElementById("total").innerHTML = hasil;
}
