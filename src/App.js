
import './App.css';
import Header from './component/Header/Header';
import Meals from './component/Meals/Meals';

function App({increase}) {
  return (
    <div className="App">
      <Header></Header>
      <Meals></Meals>
    </div>
  );
}

export default App;
