import classes from "./StudentLayout.module.css";
import StudentNavigationBar from "./StudentNavigationBar";

function StudentLayout(props) {
  return (
    <div>
      <StudentNavigationBar />

      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default StudentLayout;
