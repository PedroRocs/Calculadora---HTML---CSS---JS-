const buttons = document.querySelectorAll(".numbers")
const display = document.querySelector("#visor");

const calculadora = {
    receberCaracteres: [],

    limparTodosOsValoresCalculadora: function limparTodosOsValoresCalculadora() {
        this.receberCaracteres = [];
        this.mostrarCaracteresNaCalculadora()
    },
    eliminarUltimoCaractereDaCalculadora: function eliminarUltimoCaractereDaCalculadora() {
        this.receberCaracteres.pop()
        this.mostrarCaracteresNaCalculadora()
    },
    mostrarCaracteresNaCalculadora: function mostrarValoresNaCalculadora() {
        let caracteres = this.receberCaracteres.join();
        caracteres = caracteres.replace(/,/g, "")
        display.textContent = caracteres;
    },
    mostrarValorTotal: function mostrarValorTotal() {
        let caracteres = this.receberCaracteres.join();
        caracteres = caracteres.replace(/,/g, "");
        caracteres = caracteres.replace(/%/g, "/100*");
        this.receberCaracteres = [eval(caracteres)];
        this.mostrarCaracteresNaCalculadora();
    },
}

buttons.forEach(element => {
    element.addEventListener("click", () => {
        if (element.textContent.length > 2 && element.textContent.length != calculadora.receberCaracteres.length) {
            return
        } 
        else {
            if (element.dataset.set == "receberCaracteres") {
                calculadora.receberCaracteres.push(element.textContent)
                calculadora.mostrarCaracteresNaCalculadora();
            }
            else {
                calculadora[element.dataset.set]()
            }
        }
    });
});