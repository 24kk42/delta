import { useContext } from "react";
import UserContext from "../../components/storage/UserContext";
import classes from "./Student.module.css";
import StudentLayout from "../../components/navigationbars/StudentNavigation/StudentLayout";

function StudentPage() {
  const content = useContext(UserContext);

  return (
    <div>
      <StudentLayout>
        <p className={classes.context}>{content.user.firstName}</p>
      </StudentLayout>
    </div>
  );
}

export default StudentPage;