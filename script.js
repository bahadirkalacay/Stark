setTimeout(start, 1000);
var i = 80;
var num = document.getElementById("count");
function start() {
  setInterval(increase, 2000);
}
function increase() {
  if (i < 150) {
    i++;
    num.innerText = i;
    document.getElementById("count").style.fontSize = "16px";
  }
}
setInterval(function () {
  document.getElementById("count").style.fontSize = "18px";
}, 1000);

setTimeout(start1, 1000);
var ia = 803;
var numa = document.getElementById("count2");
function start1() {
  setInterval(increase2, 1000);
}
function increase2() {
  if (ia < 10000) {
    ia++;
    numa.innerText = ia;
    document.getElementById("count2").style.fontSize = "16px";
  }
}
setInterval(function () {
  document.getElementById("count2").style.fontSize = "18px";
}, 500);


