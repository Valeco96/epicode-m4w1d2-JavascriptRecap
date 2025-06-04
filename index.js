////Esercizio 1///////

let x = 20;
let y = 30;

if (x === 50 || y === 50 || x + y === 50) {
  console.log(true);
} else {
  console.log(false);
}

//////Esercizio 2///////

let frase = "Here comes the sun";
console.log(frase);
let parola = "sun";

//Trova la posizione della parola "sun"
let posizione = frase.search(parola);
console.log(posizione);

function sostituisciParola(frase, posizione) {
  let nuovaParola = "rain";
  let nuovaFrase = frase.replace(parola, nuovaParola);
  console.log(nuovaFrase);
  return nuovaFrase;
}

///////Esercizio 3//////////

let a = 50;
let b = 80;

if ((a > 40 && a < 60) || (b > 70 && b < 90)) {
  console.log(true);
} else {
  console.log(false);
}

/////////Esercizio 4////////

let city = prompt("Inserisci il nome di una citta'");

function mostraCitta(cityName) {
  if (cityName.startsWith("Los") || cityName.startsWith("New")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

////////////Esercizio 5////////

let numeri = [45, 89, 2, 8, 12];

function calcolaSomma() {
    
}