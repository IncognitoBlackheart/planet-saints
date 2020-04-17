import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";
import ProductsService from '../../services/product_service';

import { LinkContainer } from 'react-router-bootstrap';
import Card from 'react-bootstrap/Card';

function VisualizeProduct() {
  const {idProduct} = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(ProductsService.getProduct(parseInt(idProduct)));
  }, [idProduct]);

  const formatMunny = (value) => {
    if (value !== undefined) {
      return 'US$ ' + parseFloat(value).toFixed(2).replace('.',',');
    }
    
    return 'US$ 0,00';
  };
  
  const removeProduct = (event) => {
    event.preventDefault();
    ProductsService.removeProduct(parseInt(idProduct), () => {
      history.push('/products');
    });
  };

  return (
    <Card className="productDetail">
      <Card.Img variant="top" src={product.picture} alt="Product Picture" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Price: {formatMunny(product.price)}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <LinkContainer to={'/products/edit/' + idProduct}>
          <Card.Link className="btn btn-primary" href="#">Edit</Card.Link>
        </LinkContainer>
        <Card.Link onClick={(e) => removeProduct(e)} className="btn btn-danger" href="#">Remove</Card.Link>
      </Card.Body>        
    </Card>
  );
}

export default VisualizeProduct;