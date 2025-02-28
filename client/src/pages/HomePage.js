import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Container fluid>
      <Row className='mt-3'>
        <Col xs={12} md={8} lg={9}>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} className="d-flex justify-content-center">
                <ProductCard product={product} className="img-fluid" />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} md={4} lg={3}>
          {/* Sidebar Filters */}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;