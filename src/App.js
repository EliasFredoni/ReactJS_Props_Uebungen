import Caritem from './components/Caritem';
import ListIncome from './components/ListIncome';
import './App.css';
//import IncomeItem from './components/IncomeItem';


let cars = [
  {
    car: "Audi",
    model: "A4",
    year: 2021
  },
  {
    car: "Audi",
    model: "A5",
    year: 2018
  },
  {
    car: "BMW",
    model: "M3",
    year: 2020
  }
]

function App() {
  return (
    <div>
      {cars.map((elt, i) =>
        <Caritem
          key={i}
          car={elt.car}
          carModel={elt.model}
          carYear={elt.year}
        />
      )}
      <ListIncome />
    </div>
  );
}

export default App;
