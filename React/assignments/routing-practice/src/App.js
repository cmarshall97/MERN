import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';

const Home = (props)=>{
  return(
    <div>
      <h1> Home </h1>
      <Link to={'/about'}>Go to about</Link>
    </div>
  )
}

const About = (props)=>{
  return(
    <div>
      <h1> About Component </h1>
      <Link to={'/'}>Go to home</Link>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes> ///everything inside of me is going to need a particular route component
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
