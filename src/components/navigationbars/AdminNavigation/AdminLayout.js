import classes from "./AdminLayout.module.css";
import AdminNavigationBar from "./AdminNavigationBar";
import Box from "@material-ui/core/Box";

function AdminLayout(props) {
  return (
    <div>
      <AdminNavigationBar />

      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default AdminLayout;
