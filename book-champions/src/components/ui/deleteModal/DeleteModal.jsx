import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    setShow(false);
    alert("El libro fue borrado con exito!");
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Borrar Libro
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Borrar Libro</Modal.Title>
        </Modal.Header>
        <Modal.Body>Estas seguro que queres borrar el libro?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Nop
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Borrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
