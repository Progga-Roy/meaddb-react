
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Meals from './component/Meals/Meals';

function App({increase}) {
  return (
    <div className="App">
      <Header></Header>
      <Meals></Meals>
      <Footer></Footer>
    </div>
  );
}

export default App;
