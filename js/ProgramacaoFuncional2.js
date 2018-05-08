function somar(x) {
    return function (y) {
        return x + y;
    };
}

function dvd(x) {
    return function (y) {
        return x / y;
    };
}
function multi(x) {
    return function (y) {
        return x * y;
    };
}

function sub(x) {
    return function (y) {
        return x - y;
    };
}


function calculo() {
    let calculo = document.getElementById("opcao").value;
    let n1 = document.getElementById("numero1").value;
    let n2 = document.getElementById("numero2").value;

    if (calculo === "soma") {

        let resultado = somar(parseInt(n1))(parseInt(n2));
        return document.getElementById("resultado").value = resultado;

    } else if (calculo === "div") {

        let resultado = dvd(parseInt(n1))(parseInt(n2));
        return document.getElementById("resultado").value = resultado;
    } else if (calculo === "multi") {

        let resultado = multi(parseInt(n1))(parseInt(n2));
        return document.getElementById("resultado").value = resultado;
    } else if (calculo === "sub") {

        let resultado = sub(parseInt(n1))(parseInt(n2));
        return document.getElementById("resultado").value = resultado;
    }


}

