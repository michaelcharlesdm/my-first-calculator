function insert(number) {
  document.querySelector(".display-result").innerHTML +=
    number; /* += comcatenando */
}


function clean() {
  document.querySelector(".display-result").innerHTML = "";
}


function sum() {
  let tela = document.querySelector(".display-result").innerHTML;

  if (tela) {
    document.querySelector(".display-result").innerHTML = eval(tela);
  } else {
    document.querySelector(".display-result").innerHTML = "nenhum comando";
  }
}


function back() {
  let result = document.querySelector(".display-result").innerHTML;
  document.querySelector(".display-result").innerHTML = result.substring(0,result.length - 1);
}


function percentage() {
  let tela = document.querySelector(".display-result").innerHTML;

  if (tela) {
    document.querySelector(".display-result").innerHTML = eval(tela) / 100
  } else {
    document.querySelector(".display-result").innerHTML = "nenhum comando";
  }
}


function invertValues() {
  sum();
  const input = document.querySelector(".display-result").innerHTML;
  document.querySelector(".display-result").innerHTML = input * -1;
}
