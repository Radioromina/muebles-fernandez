import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';

function  Item({id, title, price, pictureUrl, description}) {
  return (
    <Container className='d-flex p-3 col-4'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          Precio: ${price}
        </Card.Text>
        <Card.Text>
          ID: {id}
        </Card.Text>
        <Link to={`/item-detail/${id}`}>
          <Button className="comprar">Ver Más Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  </Container>
  );
}

export default Item;