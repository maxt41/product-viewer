import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Product from './Product';
import ProductAdder from './ProductAdder';

const Index = () => {
  const [product, setProduct] = useState()
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (product) {
      setProducts([
        ...products,
        product
      ])
      setProduct()
    }
  })

  const handleClick = () => {
    setProducts([])
  }

  return (
    <Container>
        <Row style={{margin: '10px'}}>
          <Col>
            <ProductAdder product={setProduct}/>
            <Button className='btn-danger mt-1' onClick={handleClick}>Clear</Button>
          </Col>
        </Row>
        <Row style={{margin: '10px', display: 'flex', justifyContent: 'center'}}>
            {((products.length > 0) ? products.map((product, index) => {
            return <Product key={index} header={product.header} title={product.title} body={product.body}/>
            }) : null)}
        </Row>
    </Container>
  )
}

export default Index