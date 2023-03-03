import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductAdder = ({ product }) => {
  const [header, setHeader] = useState([])
  const [title, setTitle] = useState([])
  const [body, setBody] = useState([])
  const [cannotBeEmpty, setCannotBeEmpty] = useState('')

  const handleSubmit = () => {
    if(header.length > 0 && title.length > 0 && body.length > 0) {
      const UID = Math.floor(Math.random() * 9999999) // Generate unique ID
      product({header, title, body, UID }) // Set prop to be returned
      setHeader([])
      setTitle([])
      setBody([])
      setCannotBeEmpty([])
    } else {
      setCannotBeEmpty('All fields must be completed.')
    }
  }

  return (
    <Form style={{fontWeight: 'bold'}}>
      <Form.Group className="mb-3">
        <Form.Label>Product Header</Form.Label>
        <Form.Control value={header} onChange={e => setHeader(e.target.value)} type="text" placeholder="Product Header" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Product Title</Form.Label>
        <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Product Title" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Product Body</Form.Label>
        <Form.Control value={body} onChange={e => setBody(e.target.value)} type="text" placeholder="Product Body" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Text style={{color: 'red', opacity: '80%'}}>{cannotBeEmpty}</Form.Text>
      </Form.Group>


      <Button onClick={handleSubmit} className='btn-success'>Submit</Button>
    </Form>
  )
}

export default ProductAdder