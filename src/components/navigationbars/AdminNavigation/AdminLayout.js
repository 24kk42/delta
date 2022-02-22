import classes from './AdminLayout.module.css';
import AdminNavigationBar from './AdminNavigationBar';

function AdminLayout(props) {
    return (
      <div>
        <AdminNavigationBar />
        <main className={classes.main}>{props.children}</main>
      </div>
    );
  }
  
  export default AdminLayout;