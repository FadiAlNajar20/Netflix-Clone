import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from '../ModalMovie/ModalMovie';
import { useState } from 'react';
import "./Style.css"

function Cards(props) {

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <Card style={{ width: '21rem' }}>
                <Card.Img style={{height: "300px"}} variant="top" src={`https://image.tmdb.org/t/p/w185${props.poster_path}`} />
                <Card.Body className='bodyCard d-flex flex-column justify-content-between'>
                    <Card.Title style={{color: "#005461"}}>{props.title || "There is no Title"}</Card.Title>
                    <Card.Text>
                        {/*  */}
                    </Card.Text>
                    <Button className='btn' onClick={handleShow}>Add to Favoritee</Button>
                </Card.Body>
            </Card>

            <ModalMovie 
            showModal={showModal} 
            handleClose={handleClose} 
            id={props.id}
            title={props.title}
            overview={props.overview}
            release_date={props.release_date}
            poster_path={props.poster_path}
            sendMovieToServer={props.sendMovieToServer}

            />
        </>
    );
}

export default Cards;