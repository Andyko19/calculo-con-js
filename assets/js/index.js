let precio = 400000;
let cantidad = 0;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector("#cantidad");
const pagoSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio;

function actualizarTotal() {
  const total = precio * cantidad;
  pagoSpan.innerHTML = total;
}

const btnMas = document.querySelector(".btn1");
const btnMenos = document.querySelector(".btn2");

btnMas.addEventListener("click", () => {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  actualizarTotal();
});

btnMenos.addEventListener("click", () => {
  if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
  }
});
