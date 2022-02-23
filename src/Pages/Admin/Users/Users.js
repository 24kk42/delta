import { useState, useContext, useEffect } from "react";
import UserContext from "../../../components/storage/UserContext";
import AdminLayout from "../../../components/navigationbars/AdminNavigation/AdminLayout";
import User from "./User";

function Users() {
  function onClickButton(props) {
    console.log(props);
  }
  const context = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const requestOptions = {
    method: "GET",
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
      });
  }, []);

  return (
    
      <AdminLayout>

        {users.map((user) => (
          <User user={user}></User>
        ))}
      </AdminLayout>
    
  );
}

export default Users;
