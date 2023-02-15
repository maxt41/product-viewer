import React from 'react'
import Form from 'react-bootstrap/Form';

const Range = ({set}) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{fontWeight: 'bold'}}>Amount of products</Form.Label>
                <Form.Range min="0" max="12" defaultValue="2" onChange={e => set(e.target.value)}/>
            </Form.Group>
        </Form>
    )
}

export default Range