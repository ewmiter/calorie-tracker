import logo from './logo.svg';
import './Login.css';
import {useState,useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import axios from "axios";
const post_path = "/login"
function Login() {
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get('/isLoggedIn')
    .then((res) => {
      if(res.data == true){
        Navigate("/")
      }
    });
  }, [""]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function performValidation() {
    return username.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.post(post_path, {username:username,password:password},{ withCredentials: true }).then((res) => {
        if(res.data == true){
          Navigate("/")
        }else{

        }
      });
  }
  return (
  <div className="Login">
    <form onSubmit={handleSubmit}>
      <label>User Name</label>
      <input type="text" data-test="username" onChange={e => setUsername(e.target.value)}/>
      <label>Password</label>
      <input type="password" data-test="password" onChange={e => setPassword(e.target.value)}/>
      <input type="submit" value="Log In" data-test="submit" disabled={!performValidation()}/>
    </form>
  </div>
  );
}
export default Login;
