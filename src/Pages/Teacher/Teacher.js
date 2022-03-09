import { useContext } from "react";
import UserContext from "../../components/storage/UserContext";
import classes from "./Teacher.module.css";
import TeacherLayout from "../../components/navigationbars/TeacherNavigation/TeacherLayout";

function TeacherPage() {
  const content = useContext(UserContext);

  return (
    <div>
      <TeacherLayout>
        <p className={classes.context}>{content.user.firstName}</p>
      </TeacherLayout>
    </div>
  );
}

export default TeacherPage;
