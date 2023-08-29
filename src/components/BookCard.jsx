import { useLibrary } from '../context/booksContext';
import { Card, Stack, Button } from "react-bootstrap";

export const BookCard = ({ title, page, image, onClick, data }) => {
  const { addBookToRead } = useLibrary();
  return (
  
      <Card>
        <Card.Body className='bg-ligth'>
        <div className="book-card">
          <img src={image} alt={title} />
          <div className='book-info'>
            <h3 className='book-name'>{title}</h3>
            <p>Page Count: {page}</p>
            <button onClick={() => { addBookToRead(data) }}>♥</button>
          </div>
        </div>
        </Card.Body>
      </Card>
   
  )
}