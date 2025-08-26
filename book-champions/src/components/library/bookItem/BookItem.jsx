import React from "react";

import { Badge, Card, Button } from "react-bootstrap";
import DeleteModal from "../../ui/deleteModal/DeleteModal";

const BookItem = ({
  title,
  author,
  rating,
  pageCount,
  available,
  imageUrl,
}) => {
  return (
    <>
      <Card style={{ width: "22rem" }} className="mx-3">
        <Card.Img height={400} variant="top" src={imageUrl} />
        <Card.Body>
          <div className="mb-2">
            {available ? (
              <Badge bg="success" color="black">
                Disponible
              </Badge>
            ) : (
              <Badge bg="danger">Reservado</Badge>
            )}
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
          <div>
            {rating} estrella{rating > 1 ? "s" : ""}
          </div>
          <p>{pageCount} paginas</p>
          <Button>Actualizar titulo</Button>
          <DeleteModal />
        </Card.Body>
      </Card>
    </>
  );
};

export default BookItem;
