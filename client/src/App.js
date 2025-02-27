import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/product/:id' element={<ProductPage />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;