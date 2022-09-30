import React from 'react'
import Card from 'react-bootstrap/Card';
import './Item.css'
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';

function  Item({id, title, price, pictureUrl, description}) {
  return (
    <Container className=' container-card d-flex justify-content-center col-lg-4 col-md-6 col-sm-12 p-3'>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title className='fs-2'>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text className='fs-3'>
          Precio: ${price}
        </Card.Text>
        <Link to={`/item-detail/${id}`}>
          <button className="comprar button btn">Ver Más Detalles</button>
        </Link>
      </Card.Body>
    </Card>
  </Container>
  );
}

export default Item;