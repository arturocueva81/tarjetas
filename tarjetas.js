function crearTarjetas() {
  let contenido = "";
  let divTarjetas = document.getElementById("divTarjetas");
  for (let i = 1; i <= 10; i++) {
    contenido = contenido + "<div class ='item'>" + i + "</div>";
    divTarjetas.innerHTML = contenido;
  }
}

function pintarTarjetas(numDesde, numHasta) {
  const tarjetas = document.querySelectorAll(".item");
  
  tarjetas.forEach((tarjeta, index) => {
    const numero = index + 1;    
    if (numero >= numDesde && numero <= numHasta) {
      tarjeta.style.backgroundColor = "#3e7a41";
      tarjeta.style.color = "white";
    }
  });
}

function crearPintar() {
  const numeroDesde = parseInt(document.getElementById("txtDesde").value);
  const numeroHasta = parseInt(document.getElementById("txtHasta").value);
  crearTarjetas();
  pintarTarjetas(numeroDesde, numeroHasta);
}