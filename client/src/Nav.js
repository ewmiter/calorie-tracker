import './Nav.css';
import {useNavigate} from 'react-router-dom'
function Nav(props) {
  const Navigate = useNavigate();
  return (
    <div className="Nav">
      <div className='Nav-Username'>
      <p>User:</p>
      <p>{props.Username}</p>
      </div>
      <div>
        <ul>
          <li className={props.Path === "/" ? "Nav-Active":""} onClick={() => {Navigate("/")}}>Main</li>
          <li className={props.Path === "/days" ? "Nav-Active":""} onClick={() => {Navigate("/days")}}>Days</li>
          <li className={props.Path === "/meals" ? "Nav-Active":""} onClick={() => {Navigate("/meals")}}>Meals</li>
          <li className={props.Path === "/goals" ? "Nav-Active":""} onClick={() => {Navigate("/goals")}}>Goals</li>
          <li className={props.Path === "/weight" ? "Nav-Active":""} onClick={() => {Navigate("/weight")}}>Weight</li>
        </ul>
      </div>
  </div>
  );
}
export default Nav;

