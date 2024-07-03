//  hacer un carrito de compras en el que el precio de los productos se sumen al precio final

let elegir = prompt("desea ver las marcas de nuestros celulares?");
let precio = 0;

while (elegir !== "si" && elegir !== "no") {
  alert("debe seleccionar si o no");
  elegir = prompt("desea ver las marcas de nuestros celulares?");
}

if (elegir === "si") {
  let marca = prompt("elija entre iphone, xiaomi o samsung");
  if (marca === "iphone") {
    precio = 200;
  } else if (marca === "xiaomi") {
    precio = 50;
  } else if (marca === "samsung") {
    precio = 100;
  }
  console.log("su precio es " + precio);
} else (elegir === "no")[alert("pasemos a los accesorios")];

let auriculares = 20;
let funda = 15;
let cargadorTurbo = 25;

let accesorio = prompt("desea agregar un accesorio?");

while (accesorio !== "si" && accesorio !== "no") {
  alert("debe seleccionar si o no");
  accesorio = prompt("desea agregar un accesorio?");
}

if (accesorio === "si") {
  let deseaAccesorio = prompt(
    "elija entre funda, cargador turbo o auriculares"
  );
  if (deseaAccesorio === "auriculares") {
    precio += 20;
  } else if (deseaAccesorio === "cargador turbo") {
    precio += 25;
  } else if (deseaAccesorio === "funda") {
    precio += 15;
  }
  console.log("su precio final es de " + precio);
} else (accesorio === "no")[alert("su precio final es " + precio)];
