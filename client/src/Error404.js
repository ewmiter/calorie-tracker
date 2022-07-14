import './Error404.css';
import {useEffect,useState} from "react"
import {useNavigate,useLocation} from 'react-router-dom'
import Nav from "./Nav";
import axios from "axios";
function Error404() {
  const [Path,setPath] = useState("")
  const [Username,SetUsername] = useState("")
  const Navigate = useNavigate();
  const Location = useLocation();
  useEffect(() => {
    setPath(Location.pathname)
      axios.get('/GetUserData',{ withCredentials: true }).then((res) => {
      if(res.data == false){
          Navigate("/login");
      }else{
          SetUsername(res.data.username);
      }
      });
  }, [""]);

  useEffect(() => {
    setPath(Location.pathname)
  }, [Location]);
  return (
  <>
    <Nav Username={Username} path={Path}/>
    <div className="Main">
      <div className="Content">
        <h1>ERROR 404 Page not found!</h1>
      </div>
    </div>
  </>
  );
}
export default Error404;