import { useLibrary } from '../context/booksContext';
import { Card, Stack, Button } from "react-bootstrap";

export const BookCard = ({ title, page, image, onClick, data }) => {
  const { addBookToRead } = useLibrary();
  return (

    <Card className='bg-secondary bg-opacity-50'>
      <Card.Body className='bg-dark-subtle p-2 '>
        <div className="book-card">
          <img src={image} alt={title} />
          <div className='book-details'>
            <h4 className='book-name'>{title}</h4>
            <div className='book-info'>
              <p className='pages'>Page Count: {page}</p>
              <button onClick={() => { addBookToRead(data) }}>♥</button>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>

  )
}