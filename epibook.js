const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

//Cosa vogliamo fare: all'avvio della pagina, carica e mostra tutte le card dei libri; quando l'utente scrive un titolo, filtra i libri gia' scaricati e aggiorna le card

//Crea una variabile globale per salvare tutti i libri
let allBooks = []; //contiene tutti i libri una volta caricati

//Fetch iniziale: salvi i dati e mostri tutte le card
function fetchBook() {
  //usa il fetch per chiamare l'API
  fetch(`https://striveschool-api.herokuapp.com/books`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      allBooks = data; // salva tutti i libri nell'array vuota che abbiamo creato
      displayBooks(allBooks); //funzione per mostrare tutto all'inizio
    })
    .catch((error) => {
      console.error("Errore nella fetch:", error);
    });
}

function displayBooks(booksArray) {
  const cardsContainer = document.getElementById("cardsContainer"); //prendo l'elemento del div dove inserire le card
  cardsContainer.innerHTML = ""; //pulisce il container dal contenuto precedente

  booksArray.forEach((book) => {
    const col = document.createElement("div");
    col.className = "col-md-4 col-lg-3";

    const card = document.createElement("div");
    card.className = "card h-100";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = book.img;
    img.alt = book.alt;
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = book.title;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = `Price: ${book.price}`;
    cardBody.appendChild(cardText);

    const cardLink = document.createElement("a");
    cardLink.className = "btn btn-success";
    cardLink.href = "#";
    cardLink.textContent = "Aggiungi al carrello";
    cardLink.setAttribute("id", "bookId");
    cardLink.dataset.bookId = book.asin; //asin e' l'id del libro nell'array
    cardLink.addEventListener("click", addToCart);
    cardBody.appendChild(cardLink);

    card.appendChild(cardBody);
    col.appendChild(card);
    cardsContainer.appendChild(col); // Qui aggiungiamo la colonna alla griglia
  });
}

function searchBook(event) {
  event.preventDefault(); //previene il refresh della pagina
  let libro = searchInput.value.toLowerCase().trim();
  console.log(libro);
  if (!libro) {
    displayBooks(allBooks); //se il campo e' vuoto, mostriamo tutti i libri
    return alert("Please enter a valid book title");
  }
  let filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(libro)
  );

  displayBooks(filteredBooks); //mostra solo i risultati trovati
}

searchButton.addEventListener("click", searchBook);

//Crea una funzione per aggiungere al carrello al click del link:
//al click, salva in un array del carrello; viene aggiunto nella pagina HTML e cambia stile

//Crea un array vuoto per tenere traccia dei libri nel carrello
let cartBooks = [];

function addToCart(event) {
  event.preventDefault();
  console.log(bookId);

  if (!cartBooks.includes(book)) {
    //per indicare, se il libro selezionato non e' gia' presente nel carrello (diverso da presente), push nell'array
    cartBooks.push(book);
  }
  // } else if (cartBooks.includes(book)) {
  //   {
  //     alert("This book is already in your cart!");
  //   }
  // } else {
  //   cartBooks.push(book);
  //   alert("This book was added to your cart!");
  // }

  //Cambia stile della cart
  card.classList.add("border", "border-success", "shadow");
}

fetchBook(); //Alla fine del file, carica tutti i libri all'inizio
