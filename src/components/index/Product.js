import React from 'react'
import Card from 'react-bootstrap/Card';

const Product = ({header, title, body}) => {
  return (
    <Card className='product_card' style={{ width: '100%', textAlign: 'center' }}>
        <Card.Header style={{fontWeight: 'bold'}}>{header}</Card.Header>
        <Card.Img src="https://medicalvalues.de/wp-content/uploads/Files-And-Folder_Isometric.svg"></Card.Img>
        <Card.Body>
            <Card.Title><h2>{title}</h2></Card.Title>
            <Card.Text>{body}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product