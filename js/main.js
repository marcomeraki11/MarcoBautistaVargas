
// SEMANA 1

var index = 0;
var imagenes_semana_uno = document.querySelectorAll(".carrusel-imagen.semana_uno");

function cambiarImagen_semana_uno(direccion) {
  imagenes_semana_uno[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_uno.length) % imagenes_semana_uno.length;
  imagenes_semana_uno[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_uno(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_uno(1);
  }
});


// SEMANA 2

var index = 0;
var imagenes_semana_dos = document.querySelectorAll(".carrusel-imagen.semana_dos");

function cambiarImagen_semana_dos(direccion) {
  imagenes_semana_dos[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_dos.length) % imagenes_semana_dos.length;
  imagenes_semana_dos[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_dos(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_dos(1);
  }
});

// SEMANA 3

var index = 0;
var imagenes_semana_tres = document.querySelectorAll(".carrusel-imagen.semana_tres");

function cambiarImagen_semana_tres(direccion) {
  imagenes_semana_tres[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_tres.length) % imagenes_semana_tres.length;
  imagenes_semana_tres[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_tres(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_tres(1);
  }
});




// SEMANA 4

var index = 0;
var imagenes_semana_cuatro = document.querySelectorAll(".carrusel-imagen.semana_cuatro");

function cambiarImagen_semana_cuatro(direccion) {
  imagenes_semana_cuatro[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_cuatro.length) % imagenes_semana_cuatro.length;
  imagenes_semana_cuatro[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_cuatro(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_cuatro(1);
  }
});



// SEMANA 5

var index = 0;
var imagenes_semana_cinco = document.querySelectorAll(".carrusel-imagen.semana_cinco");

function cambiarImagen_semana_cinco(direccion) {
  imagenes_semana_cinco[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_cinco.length) % imagenes_semana_cinco.length;
  imagenes_semana_cinco[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_cinco(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_cinco(1);
  }
});



// SEMANA 6

var index = 0;
var imagenes_semana_seis = document.querySelectorAll(".carrusel-imagen.semana_seis");

function cambiarImagen_semana_seis(direccion) {
  imagenes_semana_seis[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_seis.length) % imagenes_semana_seis.length;
  imagenes_semana_seis[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_seis(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_seis(1);
  }
});


// SEMANA 7

var index = 0;
var imagenes_semana_siete = document.querySelectorAll(".carrusel-imagen.semana_siete");

function cambiarImagen_semana_siete(direccion) {
  imagenes_semana_siete[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_siete.length) % imagenes_semana_siete.length;
  imagenes_semana_siete[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_siete(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_siete(1);
  }
});



// SEMANA 8

var index = 0;
var imagenes_semana_ocho = document.querySelectorAll(".carrusel-imagen.semana_ocho");

function cambiarImagen_semana_ocho(direccion) {
  imagenes_semana_ocho[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_ocho.length) % imagenes_semana_ocho.length;
  imagenes_semana_ocho[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_ocho(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_ocho(1);
  }
});



// SEMANA 9

var index = 0;
var imagenes_semana_nueve = document.querySelectorAll(".carrusel-imagen.semana_nueve");

function cambiarImagen_semana_nueve(direccion) {
  imagenes_semana_nueve[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_nueve.length) % imagenes_semana_nueve.length;
  imagenes_semana_nueve[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_nueve(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_nueve(1);
  }
});



// SEMANA 10

var index = 0;
var imagenes_semana_diez = document.querySelectorAll(".carrusel-imagen.semana_diez");

function cambiarImagen_semana_diez(direccion) {
  imagenes_semana_diez[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_diez.length) % imagenes_semana_diez.length;
  imagenes_semana_diez[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_diez(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_diez(1);
  }
});



// SEMANA 11

var index = 0;
var imagenes_semana_once = document.querySelectorAll(".carrusel-imagen.semana_once");

function cambiarImagen_semana_once(direccion) {
  imagenes_semana_once[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_once.length) % imagenes_semana_once.length;
  imagenes_semana_once[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_once(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_once(1);
  }
});



// SEMANA 12

var index = 0;
var imagenes_semana_doce = document.querySelectorAll(".carrusel-imagen.semana_doce");

function cambiarImagen_semana_doce(direccion) {
  imagenes_semana_doce[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_doce.length) % imagenes_semana_doce.length;
  imagenes_semana_doce[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_doce(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_doce(1);
  }
});



// SEMANA 13

var index = 0;
var imagenes_semana_trece = document.querySelectorAll(".carrusel-imagen.semana_trece");

function cambiarImagen_semana_trece(direccion) {
  imagenes_semana_trece[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_trece.length) % imagenes_semana_trece.length;
  imagenes_semana_trece[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_trece(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_trece(1);
  }
});



// SEMANA 14

var index = 0;
var imagenes_semana_catorce = document.querySelectorAll(".carrusel-imagen.semana_catorce");

function cambiarImagen_semana_catorce(direccion) {
  imagenes_semana_catorce[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_catorce.length) % imagenes_semana_catorce.length;
  imagenes_semana_catorce[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_catorce(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_catorce(1);
  }
});


// SEMANA 15

var index = 0;
var imagenes_semana_quince = document.querySelectorAll(".carrusel-imagen.semana_quince");

function cambiarImagen_semana_quince(direccion) {
  imagenes_semana_quince[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_quince.length) % imagenes_semana_quince.length;
  imagenes_semana_quince[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_quince(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_quince(1);
  }
});