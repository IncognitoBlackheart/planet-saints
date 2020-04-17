import React, {useState, useEffect} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import ProductsService from '../../services/product_service';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductsService.getProducts());
  }, []);

  const renderProduct = (product) => {
    return (
      <Card className="product">
        <Card.Img variant="top" src={product.picture} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <LinkContainer to={"/products/" + product.id}>
            <Button variant="primary" block>Visualize</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="productsList">
      { products.map(renderProduct) }
    </div>
  );
}

export default ListProducts;