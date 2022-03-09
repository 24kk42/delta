import TableItem from "./TableItem";
import classes from "./Table.module.css";

function Table(props) {
  return (
    <div className={classes.App}>
      <table>
        <tr>
          {props.headers.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
        {props.item.map((items) => (
          <TableItem item={items} />
        ))}
      </table>
    </div>
  );
}

export default Table;
