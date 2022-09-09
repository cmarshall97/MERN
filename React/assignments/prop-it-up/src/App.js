import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        lastName={"Marshall"} 
        firstName={"Carol"}
        age={25}
        hairColor={"Blonde"}/>
      <PersonCard 
        lastName={"Rineer"} 
        firstName={"Grace"}
        age={26}
        hairColor={"Black"}/>
      <PersonCard 
        lastName={"McMullen"} 
        firstName={"Ryne"}
        age={29}
        hairColor={"Strawberry Blonde"}/>
      <PersonCard 
        lastName={"Hunt"} 
        firstName={"Sam"}
        age={33}
        hairColor={"Brown"}/>
    </div>
  );
}

export default App;
