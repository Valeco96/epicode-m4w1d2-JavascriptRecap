const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

function searchBook() {
  let book = searchInput.value.toLowerCase().trim();
  console.log(book);
  if (!book) return alert("Please enter a valid book title");

  fetchBook(book, true);
}

searchButton.addEventListener("click", searchBook);

function fetchBook(book, searchBook = false) {
  //usa il fetch per chiamare l'API
  fetch("https://striveschool-api.herokuapp.com/books" + book)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      createBookList(data.data, book, (searchBook = false));
    });
}

function createBookList(book) {
  const cardsContainer = document.getElementById("cardsContainer");

  //Rimuovi il contenitore precedente
  cardsContainer.innerHTML - "";

  for (let title of book) {
    //crea il div contenitore
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    const card = createElement("div");
    card.className = "card";

    const img = createElement("img");
    img.className = "card-img-fluid";
    img.src = books.src.medium;
    img.alt = book.alt;
    card.appendChild(img);

    const cardBody = createElement("div");
    cardBody.className = "card-body text-dark";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardBody.appendChild(cardTitle);

    card.appendChild(cardBody);
    col.appendChild(card);
  }
}
