import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'
import Container from 'react-bootstrap/esm/Container';

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
        <Button className="comprar">Comprar</Button>
      </Card.Body>
    </Card>
  </Container>
  );
}

export default Item;