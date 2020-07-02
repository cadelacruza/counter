const add = document.querySelector("#add");
const lower = document.querySelector("#lower");

let count = 0;

add.addEventListener("click", adding);
lower.addEventListener("click", lowering);

let numero = document.getElementById("number");

function adding() {
  count++;
  numero.textContent = count;
  if (count >= 0) {
    numero.style.color = "black";
  }
}

function lowering() {
  count--;
  numero.textContent = count;
  if (count < 0) {
    numero.style.color = "red";
  }
}
