import TeacherLayout from "../../components/navigationbars/TeacherNavigation/TeacherLayout";
import classes from "./AddLessonTeacher.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../components/storage/UserContext";

function AddLessonTeacherPage() {
  const context = useContext(UserContext);
  const navigator = useNavigate();
  const [name, setName] = useState();
  const [subject, setSubject] = useState();
  const [teacherId, setTeacherId] = useState();

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
      name: name,
      subject: subject,
      teacherId: parseInt(teacherId),
    }),
  };

  useEffect(() => {
    if (hasSubmitted) {
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/teacher/lesson",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.title === "One or more validation errors occurred.") {
            alert("One or more validation errors occurred...");
            setHasSubmitted(false);
          } else {
            navigator("/lectures-teacher");
          }
        })
        .catch((err) => {
          alert(err);
          setHasSubmitted(false);
        });
    }
  }, [hasSubmitted]);

  return (
    <TeacherLayout>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Lesson Name</label>
          <input
            type="text"
            required
            id="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="subject">Lesson Subject</label>
          <input
            type="text"
            required
            id="subject"
            onChange={(e) => setSubject(e.target.value)}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="teacherId">Teacher ID</label>
          <input
            type="text"
            required
            id="teacherId"
            onChange={(e) => setTeacherId(e.target.value)}
          ></input>
        </div>

        <div className={classes.actions}>
          <button className={classes.button}>Add Lesson</button>
        </div>
      </form>
    </TeacherLayout>
  );
}

export default AddLessonTeacherPage;