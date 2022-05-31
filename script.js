const buttons = document.querySelectorAll(".numbers")
const display = document.querySelector("#visor");
const calculadora = {
    limparRegistro: function limparRegistro() {
        display.innerHTML = "";
    },

    eliminarUltimoCaractere: function eliminarUltimoCaractere() {
        let text = display.innerHTML;
        text = text.slice(0, -1);
        display.innerHTML = text;
    },

    totalDisplay: function totalDisplay() {
        display.innerHTML = eval(display.textContent)
    },

    showDisplay: function showDisplay(number) {

        if (isNaN(number) == true && isNaN(display.innerHTML.charAt(display.innerHTML.length - 1)) == true) {
            display.innerHTML += "";
        } else {
            if (number == "%") {
                number = "/100*";
            }
            if (display.innerHTML == 0) {
                display.innerHTML = "";
                display.innerHTML += number
            } else {
                display.innerHTML += number
            }
        }
    },
}



buttons.forEach(element => {
    element.addEventListener("click", () => {
        calculadora[element.dataset.set](element.textContent);
    })
})