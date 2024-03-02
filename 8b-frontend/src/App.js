import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { useQuery } from '@apollo/client'
import { ALL_AUTHORS, ALL_BOOKS } from './query'

const App = () => {
  const [page, setPage] = useState("authors");

  const authors = useQuery(ALL_AUTHORS);
  const books = useQuery(ALL_BOOKS)
  console.log('booksi', books);

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
      </div>

      <Authors authors={authors.data} show={page === "authors"} />

      <Books books={books.data} show={page === "books"} />

      <NewBook show={page === "add"} />
    </div>
  );
}

export default App
