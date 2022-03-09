import ManagerLayout from "../../../components/navigationbars/ManagerNavigation/ManagerLayout";
import classes from "./AddStudentManagement.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../components/storage/UserContext";

function AddStudentManagement() {
  const context = useContext(UserContext);
  const navigator = useNavigate();
  const [studentNo, setStudentNo] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [userId, setUserId] = useState("");

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
      Accept: "application/json",
    },
    body: JSON.stringify({
      studentNo: studentNo,
      schoolId: parseInt(schoolId),
      userId: parseInt(userId),
    }),
  };

  useEffect(() => {
    if (hasSubmitted) {
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/management/student",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.title === "One or more validation errors occurred.") {
            alert("One or more validation errors occurred...");
            setHasSubmitted(false);
          } else {
            navigator("/manager-students");
          }
        })
        .catch((err) => {
          alert(err);
          setHasSubmitted(false);
        });
    }
  }, [hasSubmitted]);

  return (
    <ManagerLayout>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="studentNo">Student Number</label>
          <input
            type="text"
            required
            id="studentNo"
            onChange={(e) => setStudentNo(e.target.value)}
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
        <div className={classes.control}>
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            required
            id="userId"
            onChange={(e) => setUserId(e.target.value)}
          ></input>
        </div>

        <div className={classes.actions}>
          <button className={classes.button}>Add Student</button>
        </div>
      </form>
    </ManagerLayout>
  );
}

export default AddStudentManagement;