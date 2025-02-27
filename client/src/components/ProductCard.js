import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;