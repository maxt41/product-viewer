import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product'

const Index = () => {
    let products = [{header: 'Header', title: 'Title', body: 'Body'},
                    {header: 'Header', title: 'Title', body: 'Body'},
                    {header: 'Header', title: 'Title', body: 'Body'},
                    {header: 'Header', title: 'Title', body: 'Body'}]

  return (
    <Container>
        <Row style={{margin: '10px'}}>
            {((products) ? products.map((product, index) => {
            return <Col key={index}><Product header={product.header+' '+(index+1)} title={product.title+' '+(index+1)} body={product.body+' '+(index+1)}/></Col>
            }) : null)}
        </Row>
    </Container>
  )
}

export default Index