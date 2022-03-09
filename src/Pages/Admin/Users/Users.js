import { useState, useContext, useEffect } from "react";
import UserContext from "../../../components/storage/UserContext";
import AdminLayout from "../../../components/navigationbars/AdminNavigation/AdminLayout";
import Table from "../../../components/Table/Table";
import classes from "./Users.module.css";
import { useNavigate } from "react-router";

function Users() {
  const [usersAreChanged, setUsersAreChanged] = useState(false);
  const navigation = useNavigate();
  function addButtonHandler() {
    navigation("/add-new-user");
  }
  const [isExecuted, setIsExecuted] = useState(false);
  const context = useContext(UserContext);
  const [users, setUsers] = useState([]);

  const propsName = [
    "User ID",
    "Username",
    "Name",
    "Surname",
    "Phone Number",
    "E-Mail",
    "Role",
    "Option",
  ];
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${context.user.token}`,
    },
  };

  const requestOptions2 = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${context.user.token}`,
    },
  };

  useEffect(() => {
    fetch(
      "https://smapi.eu-west-3.elasticbeanstalk.com/admin/users",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setUsersAreChanged(false);
        setIsExecuted(true);
      });
  }, [usersAreChanged]);

  useEffect(() => {
    if (context.deleteId !== undefined) {
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/admin/user/" +
          context.deleteId,
        requestOptions2
      ).then(() => setUsersAreChanged(true));
    }
  }, [context.deleteId]);
  return (
    <AdminLayout>
      {isExecuted ? <Table headers={propsName} item={users} /> : null}
      <div>
        <button onClick={addButtonHandler} className={classes.button}>
          Add New User
        </button>
      </div>
    </AdminLayout>
  );
}

export default Users;
