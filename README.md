# Library Add Books

A web application that allows users to add books to a library database using **MongoDB Atlas**, **Node.js (Express.js)**, and **JavaScript**.

## Features
- Add books with title, author, and publication year.
- Store book details in **MongoDB Atlas**.
- Fetch and display books dynamically.
- Simple and interactive UI.

## Project Structure
```
Library-Add-Books/
│-- public/
│   ├── index.html  # Frontend UI
│   ├── script.js   # Handles frontend interactions
│
├── server.js       # Backend server using Express.js & MongoDB
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (https://nodejs.org/)
- MongoDB Atlas account (https://www.mongodb.com/atlas)

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/library-add-books.git
   cd library-add-books
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run the server**
   ```sh
   node server.js
   ```
4. **Open the application**
   - Open `index.html` in a browser or run a live server.

## API Endpoints
| Method | Endpoint    | Description |
|--------|------------|-------------|
| GET    | `/books`   | Fetch all books |
| POST   | `/books`   | Add a new book |
| DELETE | `/books/:id` | Remove a book |

## Usage
- Open `index.html` in a browser.
- Enter book details in the input fields and click **Add Book**.
- Books are stored in **MongoDB Atlas** and displayed on the page.

## License
This project is licensed under the MIT License.

