import AdminLayout from "../../../components/navigationbars/AdminNavigation/AdminLayout";
import classes from "./AddUser.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../components/storage/UserContext";

function AddUser() {
  const context = useContext(UserContext);
  const navigator = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [roleId, setRoleId] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    setHasSubmitted(true);
  }
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.user.token}`,
      },
      body: JSON.stringify({
        username: username,
        password: password,
        name: name,
        surname: surname,
        phoneNumber: phoneNumber,
        email: email,
        roleId: parseInt(roleId),
      }),
    };
    if (hasSubmitted) {
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/admin/user",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          if (isNaN(roleId)) {
            alert("Role ID has to be a number.")
            setHasSubmitted(false);
            
          } else {
            navigator("/users");
          }
        })
        .catch((err) => {
          alert(err);
          setHasSubmitted(false);
        });
    }
  }, [hasSubmitted]);

  return (
    <AdminLayout>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            required
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            id="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            required
            id="surname"
            onChange={(e) => setSurname(e.target.value)}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="text"
            required
            id="phonenumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            required
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="roleid">Role ID</label>
          <input
            type="text"
            required
            id="roleid"
            onChange={(e) => setRoleId(e.target.value)}
          ></input>
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>Add User</button>
        </div>
      </form>
    </AdminLayout>
  );
}

export default AddUser;
