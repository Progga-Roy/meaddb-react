
import { useState } from 'react';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Meals from './component/Meals/Meals';

function App() {
  const [favorite,setFavorite] = useState([])
const [count,setCount] = useState(0);
const countReact =()=>{
  setCount(count +1 )

}
console.log(favorite)
  return (
    <div className="App">
      <Header count={count} favorite={favorite}></Header>
      <Meals countReact={countReact} setFavorite= {setFavorite} favorite={favorite}></Meals>
      <Footer></Footer>
    </div>
  );
}

export default App;
