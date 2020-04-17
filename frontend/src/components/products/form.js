import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import ProductsService from '../../services/product_service';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormProducts() {
  const createEmptyForm = () => {
    return {
      name: '',
      price: 0.0,
      picture: ''
    };
  };

  const [form, setForm] = useState(createEmptyForm());
  const {idProduct} = useParams();
  const history = useHistory();

  useEffect(() => {
    if (idProduct !== undefined) {
      setForm(ProductsService.getProduct(parseInt(idProduct)));
    }
  }, [idProduct]);

  const setValue = (event, field) => {
    setForm({...form, [field]: event.target.value});
  };

  const submit = (event) => {
    event.preventDefault();    
    if (idProduct === undefined) {
      ProductsService.addProduct(form, () => {
        history.push('/products');
      });
    } else {
      ProductsService.editProduct(form, () => {
        history.push('/products');
      });
    }
  };

  return (
    <Form onSubmit={(e) => submit(e)}>
      <Form.Group controlId="nameField">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={form.name} onChange={(e) => setValue(e, 'name')}/>
      </Form.Group>

      <Form.Group controlId="priceField">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" min="0" step="0.01" value={form.price} onChange={(e) => setValue(e, 'price')}/>
      </Form.Group>

      <Form.Group controlId="pictureField">
        <Form.Label>Picture</Form.Label>
        <Form.Control type="text" placeholder="Picture" value={form.picture} onChange={(e) => setValue(e, 'picture')}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      &nbsp;
      <Button variant="secondary" type="button" onChange={(e) => setValue(e, 'picture')}>
        Clear
      </Button>
    </Form>
  );
}

export default FormProducts;