document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('add-book-form');
  const booksDiv = document.getElementById('books');

  // Fetch books on page load
  fetchBooks();

  // Handle form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const yearPublished = document.getElementById('year').value; 

    if (title && author && yearPublished) {
      try {
        const response = await fetch('http://localhost:3046/books', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, author, yearPublished: Number(yearPublished) }), 
        });

        if (response.ok) {
          form.reset(); // Clear form fields
          fetchBooks(); // Refresh book list
        } else {
          console.error('Failed to add book');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });

  // Function to fetch and display books
  async function fetchBooks() {
    try {
      const response = await fetch('http://localhost:3046/books'); // Fix: Port 3044
      const data = await response.json();

      if (!Array.isArray(data)) {
        console.error('Invalid response format:', data);
        return;
      }

      const booksHtml = data.map((book) => {
        return `
          <div class="book">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Year: ${book.yearPublished}</p> 
          </div>
        `;
      }).join('');
      
      if (booksDiv) {
        booksDiv.innerHTML = booksHtml; // Fix: Ensure booksDiv exists
      } else {
        console.error("Element with ID 'books' not found in the HTML");
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }
});
