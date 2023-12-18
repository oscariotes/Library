/* All of your book objects are going to be stored in a simple array, so add a function to the script 
(not the constructor) that can take user’s input and store the new book objects into an array. 
Your code should look something like this: */



let myLibrary = [];




function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;

    const newBook = {
      title: title,
      author: author,
      genre: genre,
      year: year
    };

    myLibrary.push(newBook);
    displayBooks();
    resetForm();
  }

  function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    myLibrary.forEach(myLibrary => {
      const li = document.createElement('li');
      li.textContent = `${myLibrary.title} by ${myLibrary.author} (${myLibrary.year}) - Genre: ${myLibrary.genre}`;
      bookList.appendChild(li);
    });
  }

  function resetForm() {
    document.getElementById('bookForm').reset();
  };