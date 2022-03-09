import classes from "./ManagerLayout.module.css";
import ManagerNavigationBar from "./ManagerNavigationBar";

function ManagerLayout(props) {
  return (
    <div>
      <ManagerNavigationBar />

      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default ManagerLayout;