import React, { useState } from "react";
import { Card, Button, Col, Form, Row } from "react-bootstrap";

const NewBook = ({ onBookAdded }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [available, setAvailable] = useState(false);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  const handlePageCountChange = (e) => {
    setPageCount(e.target.value);
  };
  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };
  const handleAvailabilityChange = (e) => {
    setAvailable(e.target.checked);
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    const bookData = {
      title,
      author,
      rating: parseInt(rating, 10),
      pageCount: parseInt(pageCount, 10),
      imageUrl,
      available,
    };

    onBookAdded(bookData);
    setTitle("");
    setAuthor("");
    setRating("");
    setPageCount("");
    setImageUrl("");
    setAvailable(false);
  };

  return (
    <>
      <Card className="m-4 w-50 " bg="success">
        <Card.Body>
          <Form className="text-white" onSubmit={handleAddBook}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Titulo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresar título"
                    value={title}
                    onChange={handleChangeTitle}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="author">
                  <Form.Label>Autor</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresar autor"
                    value={author}
                    onChange={handleAuthorChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="rating">
                  <Form.Label>Puntuacion</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ingresar cantidad de estrellas"
                    max={5}
                    min={0}
                    value={rating}
                    onChange={handleRatingChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="pageCount">
                  <Form.Label>Cantidad de Paginas</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ingresar cantidad de páginas"
                    min={1}
                    value={pageCount}
                    onChange={handlePageCountChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-between">
              <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>URL de imagen</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar url de imagen"
                  value={imageUrl}
                  onChange={handleImageUrlChange}
                />
              </Form.Group>
            </Row>
            <Row className="justify-content-end">
              <Col
                md={3}
                className="d-flex flex-column justify-content-end align-items-end"
              >
                <Form.Check
                  type="switch"
                  id="available"
                  className="mb-3"
                  label="¿Disponible?"
                  onChange={handleAvailabilityChange}
                  checked={available}
                />

                <Button variant="primary" type="submit">
                  Agregar lectura
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewBook;
