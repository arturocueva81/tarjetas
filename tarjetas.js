function crearTarjetas() {
 
  const NUM_DESDE = parseInt(document.getElementById("txtDesde").value);
  const NUM_HASTA  = parseInt(document.getElementById("txtHasta").value);
  const NUM_SALTO  = parseInt(document.getElementById("txtSalto").value);
  const DIV_TARJETAS = document.getElementById("divTarjetas");
  
  DIV_TARJETAS.innerHTML="";

  for (let i = 1; i <= NUM_HASTA; i++) {
    const ELEMENTO = document.createElement("div");
    ELEMENTO.className = "item";
    ELEMENTO.textContent = i;
    DIV_TARJETAS.appendChild(ELEMENTO);
  }
}

function pintarTarjetas(numDesde, numHasta, numSalto) {
  
  const NUM_DESDE= numDesde;
  const NUM_HASTA = numHasta;
  const NUM_SALTO = numSalto;
  const TARJETAS = document.querySelectorAll(".item");

  TARJETAS.forEach((tarjeta) => {
    tarjeta.style.backgroundColor = "";
    tarjeta.style.color = "";
  });

  for (let n = NUM_DESDE; n <= NUM_HASTA; n += NUM_SALTO) {
    const INDEX = n - 1;                  
    const TARJETA = TARJETAS[INDEX];      
    if (TARJETA) {                        
      TARJETA.style.backgroundColor = "#3e7a41";
      TARJETA.style.color = "white";
    }
  }
  
}

function crearPintar() {
  const NUM_DESDE = parseInt(document.getElementById("txtDesde").value);
  const NUM_HASTA = parseInt(document.getElementById("txtHasta").value);
  const NUM_SALTO = parseInt(document.getElementById("txtSalto").value);
  crearTarjetas();
  pintarTarjetas(NUM_DESDE, NUM_HASTA, NUM_SALTO);
}