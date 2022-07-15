import './Nav.css';
import {useEffect,useState} from "react"
import {useNavigate,useLocation} from 'react-router-dom'
import axios from "axios";
function Nav() {
  const [Path,setPath] = useState("")
  const [Username,SetUsername] = useState("")
  const Navigate = useNavigate();
  const Location = useLocation();
  useEffect(() => {
      axios.get('/GetUserData',{ withCredentials: true }).then((res) => {
      if(res.data === false){
          Navigate("/login");
      }else{
          SetUsername(res.data.username);
      }
      });
  });

  useEffect(() => {
    setPath(Location.pathname)
  }, [Location]);
  return (
    <div className="Nav">
      <div className='Nav-Username'>
      <p>User:</p>
      <p>{Username}</p>
      </div>
      <div>
        <ul>
          <li className={Path === "/" ? "Nav-Active":""} onClick={() => {Navigate("/")}}>Main</li>
          <li className={Path === "/days" ? "Nav-Active":""} onClick={() => {Navigate("/days")}}>Days</li>
          <li className={Path === "/meals" ? "Nav-Active":""} onClick={() => {Navigate("/meals")}}>Meals</li>
          <li className={Path === "/goals" ? "Nav-Active":""} onClick={() => {Navigate("/goals")}}>Goals</li>
          <li className={Path === "/weight" ? "Nav-Active":""} onClick={() => {Navigate("/weight")}}>Weight</li>
        </ul>
      </div>
  </div>
  );
}
export default Nav;

