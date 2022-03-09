import UserContext from "../storage/UserContext";
import {useContext} from "react";
import classes from "./TableItem.module.css"


function TableItem(props) {
  const context = useContext(UserContext);
  const idParameter = Object.values(props.item)[0];
  function deleteHandler(){
    context.setDeleteId(idParameter);
  }
  
  return (
    <tr>
      {Object.entries(props.item).map((item) => (
        <td>{item[1]}</td>
      ))}
      <td>
        <button  className={classes.actions} onClick={deleteHandler}>Delete</button>
      </td>
    </tr>
  );
}

export default TableItem;
