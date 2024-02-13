var originalText = "";
var background = document.getElementById('background');
var modal = document.getElementById("dialogModal");

function validateKey(event) {
    return (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32);
}

function processText(replacements) {
    // Obtener los elementos del DOM
    var resultContainer = document.getElementById("container-result");
    var notResultContainer = document.getElementById("container-not-result");

    // Obtener el texto original del input
    originalText = document.getElementById("originalText").value;

    // Verificar si el texto original no está vacío
    if (originalText !== "") {
        // Inicializar el texto encriptado con el texto original
        var encryptText = originalText;

        // Iterar sobre las sustituciones y aplicar los reemplazos en orden
        for (var key in replacements) {
            if (replacements.hasOwnProperty(key)) {
                encryptText = encryptText.replace(new RegExp(key, "g"), replacements[key]);
            }
        }

        // Mostrar el resultado en el elemento con el id "result"
        document.getElementById("result").innerText = encryptText;

        // Mostrar el contenedor del resultado y ocultar el contenedor de "no resultado"
        resultContainer.classList.remove("inactive");
        notResultContainer.classList.add("inactive");
    } else {
        // Si el texto original está vacío, ocultar el contenedor del resultado y mostrar el contenedor de "no resultado"
        resultContainer.classList.add("inactive");
        notResultContainer.classList.remove("inactive");
    }
}

function encrypt() {
    var replacements = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };
    processText(replacements);
}

function decrypt() {
    var replacements = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    };
    processText(replacements);
}

function clean() {
    document.getElementById("result").innerText = "";
    document.getElementById("originalText").value = "";
}

function copy() {
    var textarea = document.getElementById("result");
    textarea.select();
    document.execCommand("copy");
    showModal();
    clean();
}

function showModal() {
    modal.show();
    background.style.display = 'block';
}

function closeModal() {
    modal.close();
    background.style.display = 'none';
}
