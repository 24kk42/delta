import { Link } from "react-router-dom";
import classes from "./AdminNavigationBar.module.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import UserContext from "../../storage/UserContext";

function AdminNavigationBar() {
  const content = useContext(UserContext);
  const navigation = useNavigate();

  function Logout() {
    content.logout();
    navigation("/");
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Delta School</div>
      <nav>
        <ul className={classes.ul}>
          <li className={classes.actions}>
            <Link to="/admin">Admin</Link>
          </li>
          <li className={classes.actions}>
            <Link to="/users">Users</Link>
          </li>
          <li className={classes.actions}>
            <Link to="/teachers">Teachers</Link>
          </li>
          <li className={classes.actions}>
            <Link to="/students">Students</Link>
          </li>
          <li className={classes.actions}>
            <Link to="/lessons">Lessons</Link>
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

export default AdminNavigationBar;
