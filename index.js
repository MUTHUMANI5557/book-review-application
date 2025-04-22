const sampleBooks = [
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
];

function loadBooks() {
  const bookList = document.getElementById("bookList");
  sampleBooks.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><em>${book.author}</em></p>
    `;
    bookList.appendChild(card);
  });
}

const reviewForm = document.getElementById("reviewForm");
const reviewsContainer = document.getElementById("reviewsContainer");

reviewForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("authorName").value;
  const review = document.getElementById("reviewText").value;

  const reviewCard = document.createElement("div");
  reviewCard.className = "book-card";
  reviewCard.innerHTML = `
    <h4>${title} <small>by ${author}</small></h4>
    <p>${review}</p>
  `;

  reviewsContainer.appendChild(reviewCard);

  reviewForm.reset();
});

loadBooks();
