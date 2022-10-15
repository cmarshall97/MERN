import './App.css';
import ProductForm from './components/AddProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductList from './components/ViewAllProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<ProductForm/>}/>
          <Route path='/api/allProducts' element= {<ProductList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
