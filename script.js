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
var x;
var y;
var total;
var tambah;
var kurang;
var kali;
var bagi;
var angka = document.getElementById("angka")

// var sum;
document.getElementById("sum").addEventListener("click", function(){
  tambah = true;
  document.getElementById("operasi").innerHTML = "+"
  x = parseFloat(angka.innerHTML)
  document.getElementById("total").innerHTML = x
  angka.innerHTML = ""
});

document.getElementById("subtract").addEventListener("click", function(){
  kurang = true;
  document.getElementById("operasi").innerHTML = "-"
  x = parseFloat(angka.innerHTML)
  document.getElementById("total").innerHTML = x
  angka.innerHTML = ""
});

document.getElementById("time").addEventListener("click", function(){
  kali = true;
  document.getElementById("operasi").innerHTML = "*"
  x = parseFloat(angka.innerHTML)
  document.getElementById("total").innerHTML = x
  angka.innerHTML = ""
});

document.getElementById("divide").addEventListener("click", function(){
  bagi = true;
  document.getElementById("operasi").innerHTML = "/"
  x = parseFloat(angka.innerHTML)
  document.getElementById("total").innerHTML = x
  angka.innerHTML = ""
});

function calc(){
  y = parseFloat(angka.innerHTML) 
  if (tambah == true){
    total = x + y
    document.getElementById("total").innerHTML = total
    tambah == false
  }else if (kurang == true){
    total = x - y
    document.getElementById("total").innerHTML = total
    kurang == false
  }else if (kali == true){
    total = x * y
    document.getElementById("total").innerHTML = total
    kali == false
  }else if (bagi == true){
    total = x / y
    document.getElementById("total").innerHTML = total
    bagi == false
  }
}

function ac(){
  angka.innerHTML = ""
  document.getElementById("operasi").innerHTML = ""
  document.getElementById("total").innerHTML = ""
}