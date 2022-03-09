import AdminLayout from "../../../components/navigationbars/AdminNavigation/AdminLayout";
import classes from "./AddTeacher.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../components/storage/UserContext";

function AddTeacher() {
  const context = useContext(UserContext);
  const navigator = useNavigate();
  const [userId, setUserId] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    setHasSubmitted(true);
  }
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${context.user.token}`,
      'Accept': 'application/json' 
    },
    body: JSON.stringify({
      userId: parseInt(userId),
      schoolId: parseInt(schoolId),
    }),
  };

  useEffect(() => {
    if (hasSubmitted) {
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/admin/teacher",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => { 
          if (data.title==="One or more validation errors occurred.") {
            alert("One or more validation errors occurred...");
            setHasSubmitted(false);
          } else {
            navigator("/teachers");
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
          <label htmlFor="userId">UserID</label>
          <input
            type="text"
            required
            id="userId"
            onChange={(e) => setUserId(e.target.value)}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="schoolId">School ID</label>
          <input
            type="text"
            required
            id="schoolId"
            onChange={(e) => setSchoolId(e.target.value)}
          ></input>
        </div>

        <div className={classes.actions}>
          <button className={classes.button}>Add Teacher</button>
        </div>
      </form>
    </AdminLayout>
  );
}

export default AddTeacher;
