const display = document.getElementById("kalkulator");

function poka(value) {
  display.value += value;
}

function reset() {
  display.value = "";
}

function kalkuluj() {
    display.value = eval(display.value);
}