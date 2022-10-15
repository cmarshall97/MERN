import './App.css';
import ProductForm from './components/AddProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductList from './components/ViewAllProducts';
import OneProduct from './components/ViewOneProduct';
import EditOneProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<ProductForm/>}/>
          <Route path='/api/allProducts' element= {<ProductList/>}/>
          <Route path='/api/product/:id' element= {<OneProduct/>}/>
          <Route path='/api/update/:id' element= {<EditOneProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
