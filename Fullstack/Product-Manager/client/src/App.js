import './App.css';
import ProductForm from './components/AddProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductList from './components/ViewAllProducts';
import OneProduct from './components/ViewOneProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<ProductForm/>}/>
          <Route path='/api/allProducts' element= {<ProductList/>}/>
          <Route path='/api/product/:id' element= {<OneProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
