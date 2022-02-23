import Card from "../../../components/ui/Card";
import classes from "./User.module.css";
function User(props) {
  return (
    <div>
      <Card>
        <p className={classes.info}>ID : {props.user.id}</p>
        <p className={classes.info}>Username : {props.user.username}</p>
        <p className={classes.info}>Name : {props.user.name}</p>
        <p className={classes.info}>Surname : {props.user.surname}</p>
        <p className={classes.info}>Phone Number : {props.user.phoneNumber}</p>
        <p className={classes.info}>E-Mail : {props.user.email}</p>
        <p className={classes.info}>Role : {props.user.role}</p>
      </Card>
    </div>
  );
}

export default User;
