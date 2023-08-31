import { useState } from 'react'
import { Container, Stack, Button,Card } from 'react-bootstrap'
import { library } from './assets/books.json'
import { useLibrary } from './context/booksContext'
import { BookCard } from './components/BookCard'
import { BookToRead } from './components/BookToReadModal'
import { Header } from './components/Header'


function App() {
  
  const { addBookToRead, toReadBooks, availableBooks } = useLibrary();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddBook = (book) => {
    addBookToRead(book);
  };

  return (
    <>
      <Container className=''>
        <Header openModal={openModal} availableBooks={availableBooks}>

        </Header>

        {/* <button onClick={closeModal}>Cerrar</button> */}
{/* 
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
          gap: "1rem", alignItems: "flex-start"
        }} /> */}
       <div  className='book-card-container '>
          {library.map((bookData, i) => (
            <BookCard 
              key={i}
              title={bookData.book.title}
              page={bookData.book.pages}
              image={bookData.book.cover}
              data={bookData.book}
              onClick={() => handleAddBook(addBookToRead(bookData.book))}
            />
          ))}
        </div >
      </Container>
      <BookToRead
        isOpen={isModalOpen}
        onRequestClose={closeModal}

      />
    </>
  );
}

export default App

