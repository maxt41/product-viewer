import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import ProductAdder from './ProductAdder';

const Index = () => {
  const [product, setProduct] = useState()
  const [products, setProducts] = useState([])

  if (product) {
    setProducts([
      ...products,
      product
    ])
    setProduct()
  }

  return (
    <Container>
        <Row style={{margin: '10px'}}>
          <Col>
            <ProductAdder product={setProduct}/>
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