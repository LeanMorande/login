const forma = document.querySelector("#formulario");
forma.addEventListener("submit", Ingresar);

function Ingresar() {
  const usuario = document.querySelector("#usuario").value;
  const pass = document.querySelector("#pass").value;
  if (usuario == "rodridega@gmail.com" && pass == "123456") {
setTimeout(() => {  location.href = "portada.html";
});
} else {
    alert("fuera bicho!");
    Index();
  }
}
function Index() {
  location.href = "index.html";
}
function Portada() {
  location.href = "portada.html";
}
