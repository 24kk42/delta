import StudentTableItem from "./StudentTableItem";
import classes from "./StudentTable.module.css";

function StudentTable(props) {
  return (
    <div className={classes.App}>
      <table>
        <tr>
          {props.headers.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
        {props.item.map((items) => (
          <StudentTableItem item={items} addButtonBoolean= {props.boolean} />
        ))}
      </table>
    </div>
  );
}

export default StudentTable;
