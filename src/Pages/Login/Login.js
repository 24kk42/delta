import classes from "./Login.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import Card from "../../components/ui/Card";
import UserContext from "../../components/storage/UserContext";
import MainLayout from "../../components/navigationbars/MainNavigation/MainLayout";

function LoginPage() {
  const context = useContext(UserContext);
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
            context.login(data);
            console.log(data);
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
    <div>
      <MainLayout>
        <Card>
          <form className={classes.form} onSubmit={SubmitHandler}>
            <h1>Login</h1>
            <div className={classes.control}>
              <label htmlFor="username"></label>
              <input
                placeholder="Username"
                id="username"
                required
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="password"></label>
              <input
                placeholder="Password"
                id="password"
                required
                type={passwordType}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={classes.actions}>
              <button className={classes.button}>Login</button>
            </div>
            {isValid ? (
              <div className={classes.content}>
                <p>Invalid username or password</p>
              </div>
            ) : null}
          </form>
        </Card>
      </MainLayout>
    </div>
  );
}
export default LoginPage;
