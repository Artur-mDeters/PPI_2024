// mostrar senha

console.log("ola");

let olho = document.querySelector(".lnr-eye");

olho.addEventListener("click", function () {
  let input = document.querySelector("#password-input");

  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});

// concertar cores do input em focus

function styles(element, fill, color) {
  element.style.borderLeft = fill;
  element.style.borderRight = fill;
}

const emailInput = document.querySelector("#email-input");
const passInput = document.querySelector("#password-input");

emailInput.addEventListener("focus", () => {
  let label = document.querySelector("#label-email");
  styles(label, "2px solid black");
});

emailInput.addEventListener("blur", () => {
  let label = document.querySelector("#label-email");
  styles(label, "1px solid #ccc");
});

passInput.addEventListener("focus", () => {
  let label = document.querySelector("#label-pass");
  styles(label, "2px solid black");
});

passInput.addEventListener("blur", () => {
  let label = document.querySelector("#label-pass");
  styles(label, "1px solid #ccc");
});

// esqueci o nome

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!emailInput.value || !passInput.value) {
    console.error("sem informaçoes suficientes")
    return;
  }
  alert("Entrando...");
});
