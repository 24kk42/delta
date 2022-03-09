import { Link } from "react-router-dom";
import classes from "./ManagerNavigationBar.module.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import UserContext from "../../storage/UserContext";

function ManagerNavigationBar() {
  
  const content = useContext(UserContext);
  const navigation = useNavigate();

  function Logout() {
    content.logout();
    navigation("/");
  }
  function mainLogoCliclHandler(){
    navigation("/manager")
  }

  return (
    <header className={classes.header}>
      <div onClick={mainLogoCliclHandler} className={classes.logo}>Delta School</div>
      <nav>
        <ul className={classes.ul}>
          <li className={classes.actions}>
            <Link to="/manager-teachers">Teachers</Link>
          </li>
          <li className={classes.actions}>
            <Link to="/manager-students">Students</Link>
          </li>
          <li className={classes.actions}>
            <Link to="/" onClick={Logout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ManagerNavigationBar;