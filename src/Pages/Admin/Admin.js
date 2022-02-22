import { useContext } from "react";
import UserContext from "../../components/storage/UserContext";
import classes from "./Admin.module.css";
import AdminLayout from "../../components/navigationbars/AdminNavigation/AdminLayout";

function AdminPage() {
  const content = useContext(UserContext);

  return (
    <div>
      <AdminLayout>
        <p className={classes.context}>{content.user.firstName}</p>
      </AdminLayout>
    </div>
  );
}

export default AdminPage;
