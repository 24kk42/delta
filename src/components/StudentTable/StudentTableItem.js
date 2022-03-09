import UserContext from "../storage/UserContext";
import { useContext } from "react";
import classes from "./StudentTableItem.module.css";

function StudentTableItem(props) {
  const context = useContext(UserContext);
  const idParameter = Object.values(props.item)[0];
  function addLessonHandler() {
    props.addButtonBoolean(true);
    context.setLessonId(idParameter);
    
  }

  return (
    <tr>
      {Object.entries(props.item).map((item) => (
        <td>{item[1]}</td>
      ))}
      <td>
        <button className={classes.actions} onClick={addLessonHandler}>
          Add Lesson
        </button>
      </td>
    </tr>
  );
}

export default StudentTableItem;
