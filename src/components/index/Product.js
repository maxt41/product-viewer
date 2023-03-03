import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Product = ({header, title, body, UID}) => {
  const [show, setShow] = useState(false);
  
  if(show) {
    return (
      <Card className='product_card' style={{ textAlign: 'center', width: '20rem', margin: '10px' }}>
        <Card.Header style={{fontWeight: 'bold'}}>{header}</Card.Header>
        <Card.Body>
            <Card.Text>{UID}</Card.Text>
            <Button onClick={ () => setShow(false)}>Show Product Info</Button>
        </Card.Body>
      </Card>
    )
  }

  return (
    <Card className='product_card' style={{ textAlign: 'center', width: '20rem', margin: '10px' }}>
        <Card.Header style={{fontWeight: 'bold'}}>{header}</Card.Header>
        <Card.Img style={{objectFit: 'contain'}} src="https://medicalvalues.de/wp-content/uploads/Files-And-Folder_Isometric.svg"></Card.Img>
        <Card.Body>
            <Card.Title><h2>{title}</h2></Card.Title>
            <Card.Text>{body}</Card.Text>
            <Button onClick={() => setShow(true)}>Show Unique ID</Button>
        </Card.Body>
    </Card>
  )
}

export default Product