import { useContext } from "react";
import UserContext from "../../components/storage/UserContext";
import classes from "./Manager.module.css";
import ManagerLayout from "../../components/navigationbars/ManagerNavigation/ManagerLayout";

function ManagerPage() {
  const content = useContext(UserContext);

  return (
    <div>
      <ManagerLayout>
        <p className={classes.context}>{content.user.firstName}</p>
      </ManagerLayout>
    </div>
  );
}

export default ManagerPage;