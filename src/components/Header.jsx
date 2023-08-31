import { Button } from 'react-bootstrap';


export const Header = ({openModal,availableBooks}) => {
    return (
        <header className='d-flex m-4'>
            <h5>{availableBooks} Libros Disponibles para leer</h5>
            <Button className='ms-auto p-2' onClick={openModal}>Libros para Leer</Button>
        </header>


    )
}
