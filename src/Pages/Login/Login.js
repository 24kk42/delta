import classes from "./Login.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
function LoginPage() {
  const [passwordType, setPasswordType] = useState("password");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    };
    fetch(
      "https://smapi.eu-west-3.elasticbeanstalk.com/user/token",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (isLoading === false) {
          const message = data.message;
          if (message === "Username or password is incorrect") {
            setIsValid(true);
            setIsLoading(true);
          } else {

            if (data.roleName === "SYSADMIN") {
              navigate("/admin");
            } else if (data.roleName === "MANAGER") {
              navigate("/admin");
            } else if (data.roleName === "TEACHER") {
              navigate("/admin");
            } else if (data.roleName === "STUDENT") {
              navigate("/admin");
            }
          }
        }
      });
  }, [isLoading]);
  function SubmitHandler(event) {
    event.preventDefault();
    setIsLoading(false);
  }
  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          required
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          required
          type={passwordType}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className={classes.button}>Login</button>
      </div>
      {isValid ? (
        <div className={classes.content}>
          <p>"Invalid username or password"</p>
        </div>
      ) : null}
    </form>
  );
}
export default LoginPage;
