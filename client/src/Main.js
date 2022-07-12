import logo from './logo.svg';
import './Main.css';
import {useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import axios from "axios";
function Main() {
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get('/isLoggedIn',{ withCredentials: true }).then((res) => {
      if(res.data == false){
        Navigate("/login")
      }
    });
  }, [""]);
  return (
  <div className="Main">
    <h1>main</h1>
  </div>
  );
}
export default Main;
