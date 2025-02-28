import { useCart } from '../context/CartContext';
import { Button } from '@material-ui/core'; // or the appropriate library

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };
  
  return <Button onClick={addToCart}>Add to Cart</Button>;
};

export default ProductCard;