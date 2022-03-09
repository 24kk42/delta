import classes from "./TeacherLayout.module.css";
import TeacherNavigationBar from "./TeacherNavigationBar";


function TeacherLayout(props) {
  return (
    <div>
      <TeacherNavigationBar />

      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default TeacherLayout;
