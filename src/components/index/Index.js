import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import Range from './Range';

const Index = () => {
  const [amount, setAmount] = useState(2)
  const [products, setProducts] = useState([])
  useEffect(() => {
    let arr = []
    for(let i = 1; i <= amount; i++) {
      arr.unshift({header: 'Header', title: 'Title', body: 'Body'})
    }
    setProducts(arr)
  }, [amount])


  return (
    <Container>
        <Row style={{margin: '10px'}}>
          <Col>
            <Range set={setAmount}/>
          </Col>
        </Row>
        <Row style={{margin: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            {((products.length > 0) ? products.map((product, index) => {
            return <Product header={product.header+' '+(index+1)} title={product.title+' '+(index+1)} body={product.body+' '+(index+1)}/>
            }) : null)}
        </Row>
    </Container>
  )
}

export default Index