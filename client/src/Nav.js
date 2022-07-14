import './Nav.css';
import {useEffect,useState} from "react"
import {useNavigate,useLocation} from 'react-router-dom'
import axios from "axios";
function Nav() {
    const [Path,setPath] = useState("")
    const [Username,SetUsername] = useState("error")
    const Navigate = useNavigate();
    const Location = useLocation();
    useEffect(() => {
        var path = Location.pathname
        console.log(path);
        axios.get('/GetUserData',{ withCredentials: true }).then((res) => {
        if(res.data == false){
            Navigate("/login")
        }else{
            SetUsername(res.data.username);
        }
        });
    }, [""]);

    useEffect(() => {
        var path = Location.pathname
        setPath(path)
    }, [Location]);
  return (
    <div className="Nav">
      <div className='Nav-Username'>
      <p>User:</p>
      <p>{Username}</p>
      </div>
      <ul>
        <li className={Path === "/" ? "Nav-Active":""} onClick={() => {Navigate("/")}}>Main</li>
        <li className={Path === "/meals" ? "Nav-Active":""} onClick={() => {Navigate("/meals")}}>Meals</li>
      </ul>
  </div>
  );
}
export default Nav;

