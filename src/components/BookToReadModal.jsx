import { Modal, Stack,Button,Card } from 'react-bootstrap'
import { useLibrary } from '../context/booksContext'

export const BookToRead = ({ isOpen, onRequestClose }) => {

    const { toReadBooks,deleteBook } = useLibrary();
    return (
        
        <Modal show={isOpen} onHide={onRequestClose} className='modal-toread'>
                <Modal.Header closeButton>
                    <Modal.Title>{toReadBooks.length} Books to Read</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex justify-items-center'>
                    <Stack className='d-flex justify-content-center gap-2'>
                        {toReadBooks.map((toReadBook,i) => {
                            return (
                                <Card key={i} className='d-flex flex-row justify-content-around'>
                                    <Button className='position-absolute top-0 end-0 ' onClick={()=>deleteBook(toReadBook)}>X</Button>
                                    <img src={toReadBook.cover} className='modal-img'/>
                                    <div className='modal-info'>
                                    <h4>{toReadBook.title}</h4>
                                    <p>Page Count {toReadBook.pages}</p>
                                    </div>
                                </Card>
                            )
                        })}
                    </Stack>
                </Modal.Body>
            </Modal>
    )
}
