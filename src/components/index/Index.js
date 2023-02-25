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
    if (product) { // Check for products
      setProducts([
        ...products, // Keep previous products
        product // Push new product to products
      ])
      setProduct() // Set product in prep for new product
    }
  })

  const handleClick = () => {
    setProducts([]) // set products to empty arr
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