import { Modal, Stack,Button,Card } from 'react-bootstrap'
import { useLibrary } from '../context/booksContext'

export const BookToRead = ({ isOpen, onRequestClose }) => {
    console.log(isOpen);
    const { toReadBooks } = useLibrary();
    return (
        
        <Modal show={true} onHide={onRequestClose} className='modal-toread'>
                <Modal.Header closeButton>
                    <Modal.Title>{toReadBooks.length} Books to Read</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    <Stack>
                        {toReadBooks.map(toReadBook => {
                            return (
                                <Card className='modal-card'>
                                    <Button className='remove-modal'>X</Button>
                                    <img src={toReadBook.cover} className='modal-img'/>
                                    <h4>{toReadBook.title}</h4>
                                </Card>
                            )
                        })}
                    </Stack>
                </Modal.Body>
            </Modal>
    )
}
