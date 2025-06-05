////Esercizio 1///////

let x = 20;
let y = 30;

if (x === 50 || y === 50 || x + y === 50) {
  console.log(true);
} else {
  console.log(false);
}

//////Esercizio 2///////

let frase = "Hello, everyone!";
posizione = 5;

function rimuoviCarattere(frase, posizione) {
  //Taglia la parte prima e dopo il carattere da rimuovere, poi le unisce
  return frase.slice(0, posizione) + frase.slice(posizione + 1);
}

let nuovaFrase = rimuoviCarattere(frase, posizione);

console.log(nuovaFrase);

///////Esercizio 3//////////

let a = 50;
let b = 80;

if ((a > 40 && a < 60) || (b > 70 && b < 90)) {
  console.log(true);
} else {
  console.log(false);
}

/////////Esercizio 4////////

//let city = prompt("Inserisci il nome di una citta'");

function mostraCitta(cityName) {
  let lowerCaseCities = cityName.toLowerCase();

  if (lowerCaseCities.startsWith("los") || lowerCaseCities.startsWith("new")) {
    console.log(cityName);
  } else {
    console.log(false);
  }
}

//let citta = mostraCitta(city);
//console.log(citta);

////////////Esercizio 5////////

let numeri = [45, 89, 2, 8, 12];

function calcolaSomma(numeri) {
  let somma = numeri.reduce((acc, numero) => acc + numero, 0);
  //acc = accumulatore (la somma totale fino ad ora)
  //numero = elemento corrente dell'array mentre .reduce() scorre
  //acc + numero = la somma parziale, che diventa il nuovo valore dell'accumulatore
  //0 = valore iniziale da cui parte la somma
  //Cosa succede internamente: acc = 0, numero = 45 => acc = 0 + 45 = 45; e cosí via.
  return somma;
}

let risultato = calcolaSomma(numeri);
console.log(risultato);

/////////Esercizio 6//////////

let listaNumeri = [12, 25, 40];

function controllaNumero(lista) {
  for (let i = 0; i < listaNumeri.length; i++) {
    if (listaNumeri.includes(1) || listaNumeri.includes(3)) {
      return false;
    } else {
      return true;
    }
  }
}

let checkNumeri = controllaNumero(listaNumeri);
console.log(checkNumeri);

////////Esercizio 7///////////

let angolo = 90;

function geometria(angolo) {
  if (angolo < 90) {
    return "acuto";
  } else if (angolo === 90) {
    return "retto;";
  } else if (angolo > 90 && angolo < 180) {
    return "ottuso";
  } else {
    if (angolo === 180) {
      return "piatto";
    }
  }
}

let definizioneAngoli = geometria(angolo);
console.log(definizioneAngoli);

////////Esercizio 8/////////

let sentence = "Fabbrica Italiana Automobili Torino";

function creaAcronimo() {
  //Dividi la frase in parole
  let parole = sentence.toLowerCase().split(` `);

  //Estrai la prima lettera di ogni parola
  let lettere = [];
  parole.forEach((parola) => {
    lettere.push(parola[0]);
  });

  //unisci le lettere
  let acronimo = lettere.join(``);

  //Trasforma in maiuscolo
  return acronimo.toUpperCase();
}

let sigla = creaAcronimo(sentence);
console.log(sigla);
