
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser,faHeart} from '@fortawesome/free-solid-svg-icons'
const Header = (props) => {
   const {favorite} = props; 
console.log(favorite.length)
    return (
        <div className='header'>
            <nav className='navbar'>
            <h2 className='logo'>meal<span>DB</span></h2>
            <div className='menu'>
            <a href="/home" className='home'>Home</a>
            <a href="/menu">Menu</a>
            <a href="/service">Service</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/"> <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a>
            <a href="/"> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> </a>
            <a href="/"> <FontAwesomeIcon  icon={faHeart}  className="icon" >  </FontAwesomeIcon>  { favorite.length>0? <sup>{favorite.length}</sup> : ''} </a>
            </div>
           </nav>
        </div>
    );
};

export default Header;