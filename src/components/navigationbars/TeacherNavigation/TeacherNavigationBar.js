import { Link } from "react-router-dom";
import classes from "./TeacherNavigationBar.module.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import UserContext from "../../storage/UserContext";

function TeacherNavigationBar() {
  const content = useContext(UserContext);
  const navigation = useNavigate();

  function Logout() {
    content.logout();
    navigation("/");
  }
  function mainLogoCliclHandler() {
    navigation("/teacher");
  }

  return (
    <header className={classes.header}>
      <div onClick={mainLogoCliclHandler} className={classes.logo}>Delta School</div>
      <nav>
        <ul className={classes.ul}>
          <li className={classes.actions}>
            <Link to="/lectures-teacher">My Lectures</Link>
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

export default TeacherNavigationBar;