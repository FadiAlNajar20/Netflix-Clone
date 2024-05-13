import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalMovie(props) {

  const [comment, setComment] = useState("");
  
  const addComment = (e) => setComment(e.target.value);
  
  
  const handleSaveChanges = () => {
    
    const movieData = {
      title: props.title,
      release_date: props.release_date,
      poster_path: props.poster_path,
      overview: props.overview,
      comment: comment
    }

    props.sendMovieToServer(movieData);
    props.handleClose();
  }
  
  return (
    <>
      <Modal show={props.showModal} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4 text-center" controlId="exampleForm.ControlInput1">
              <img className='rounded' src={`https://image.tmdb.org/t/p/w185${props.poster_path}`} alt='movie' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <h2>{props.title || "There is no Title"}</h2>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Add Some Comments</Form.Label>
              <Form.Control as="textarea" name="comment" type="text" rows={2}  onChange={addComment}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalMovie;