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
        <ul>
          <li className={classes.actions}>
            <Link to="/" onClick={Logout}>Logout</Link>
          </li>
          <li className={classes.actions}>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AdminNavigationBar;
