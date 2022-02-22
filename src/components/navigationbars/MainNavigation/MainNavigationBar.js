import { Link } from "react-router-dom";
import classes from "./MainNavigationBar.module.css";

function MainNavigationBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Delta School</div>
    </header>
  );
}

export default MainNavigationBar;
