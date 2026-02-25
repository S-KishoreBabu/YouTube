import NavButtons from "./NavButtons"
import SearchBar from "./SearchBar"
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/YouTubeLogo.png'
import { Link } from "react-router-dom";

const Header = ({toggleFunction}) =>{
    // let [sideBarActive, setSideBarVal] = useState(false);
    return (
        <div className="header bg-white w-full h-15 flex justify-between items-center px-5">
            <div className="MenuLogo flex justify-around items-center gap-2 w-45">
                <div className="menuImage cursor-pointer" onClick={()=>toggleFunction()}>
                    <GiHamburgerMenu className="text-2xl"/>
                </div>
                <div className="logoImg">
                    <img src={logo} alt="Logo" /> 
                </div>
            </div>
            <SearchBar/>
            <NavButtons/>
        </div>
    )
}

export default Header