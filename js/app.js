// Función de encriptación
function encriptar(traduccion) {
  document.querySelector("#warning").removeAttribute("style");
  // Seleccionamos el texto del textarea
  let textarea = document.querySelector("#texto");
  // Almacenamos el texto a encriptar / desencriptar
  const texto = textarea.value;
  // Seleccionamos atributo defalult, result y texto_out
  let area_default = document.querySelector("#default");
  let area_result = document.querySelector("#result");
  let texto_out = document.querySelector("#texto_out");
  // Almacenamos el texto a encriptar / desencriptar
  if (texto != "") {
    let out = "";
    for (let i = 0; i < texto.length; i++) {
      if ((texto[i] < "a" || texto[i] > "z") && texto[i] != " ") {
        document.querySelector("#warning").style.color = "red";
        document.querySelector("#warning").style.fontSize = "16px";
        return;
      } else if (
        (texto.length == 1 && texto == " ") ||
        texto.replace(/ /g, "") == ""
      ) {
        area_default.classList.remove("invisible");
        area_result.classList.add("invisible");
        return;
      }
      if (texto[i] == "a") {
        out += traduccion["a"];
      } else if (texto[i] == "e") {
        out += traduccion["e"];
      } else if (texto[i] == "i") {
        out += traduccion["i"];
      } else if (texto[i] == "o") {
        out += traduccion["o"];
      } else if (texto[i] == "u") {
        out += traduccion["u"];
      } else {
        out += texto[i];
      }
    }
    // Agregar y remover clases para mostrar el resultado
    area_default.classList.add("invisible");
    area_result.classList.remove("invisible");
    texto_out.innerHTML = out;
  }

  return;
}
// Función de desencriptación
function desencriptar(traduccion) {
  document.querySelector("#warning").removeAttribute("style");
  // Seleccionamos el texto del textarea
  let textarea = document.querySelector("#texto");
  // Almacenamos el texto a encriptar / desencriptar
  let texto = textarea.value;
  // Seleccionamos atributo defalult, result y texto_out
  let area_default = document.querySelector("#default");
  let area_result = document.querySelector("#result");
  let texto_out = document.querySelector("#texto_out");
  // Validamos la entrada del texto si es vacía
  if (texto != "") {
    for (let i = 0; i < texto.length; i++) {
      if ((texto[i] < "a" || texto[i] > "z") && texto[i] != " ") {
        document.querySelector("#warning").style.color = "red";
        document.querySelector("#warning").style.fontSize = "16px";
        return;
      } else if (
        (texto.length == 1 && texto == " ") ||
        texto.replace(/ /g, "") == ""
      ) {
        area_default.classList.remove("invisible");
        area_result.classList.add("invisible");
        return;
      }
    }
    // Aplicación de la desencriptación
    area_default.classList.add("invisible");
    area_result.classList.remove("invisible");
    texto = texto.replace(new RegExp(traduccion["a"], "g"), "a");
    texto = texto.replace(new RegExp(traduccion["e"], "g"), "e");
    texto = texto.replace(new RegExp(traduccion["i"], "g"), "i");
    texto = texto.replace(new RegExp(traduccion["o"], "g"), "o");
    texto = texto.replace(new RegExp(traduccion["u"], "g"), "u");
    texto_out.innerHTML = texto;
  }
  return;
}
// Función de copiar texto del texarea
function clipboard() {
  const texto_out = document.querySelector("#texto_out");
  navigator.clipboard.writeText(texto_out.value);
}

const enc = document.querySelector("#enc");
const des = document.querySelector("#des");
const copy = document.querySelector("#copy");

let traduccion = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };

// Desencadenador de funciones en base a click event
enc.addEventListener("click", function () {
  encriptar(traduccion);
});
des.addEventListener("click", function () {
  desencriptar(traduccion);
});
copy.addEventListener("click", function () {
  clipboard();
});
