import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../components/storage/UserContext";
import StudentLayout from "../../components/navigationbars/StudentNavigation/StudentLayout";
import StudentTable from "../../components/StudentTable/StudentTable.js";
import classes from "./StudentLectures.module.css";

function StudentLectures() {
  const [addLessonButton, setAddLessonButton] = useState(false);
  const navigation = useNavigate();
  const context = useContext(UserContext);
  const [lessons, setLessons] = useState([]);
  const [isExecuted, setIsExecuted] = useState(false);
  const propsName = [
    "Course ID",
    "Course Name",
    "Subject",
    "Teacher",
    "Teacher ID",
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
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${context.user.token}`,
      Accept: "application/json",
    },
  };

  useEffect(() => {
    fetch(
      "https://smapi.eu-west-3.elasticbeanstalk.com/student/lessons",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setLessons(data);
        setIsExecuted(true);
      });
  }, []);

  useEffect(() => {
    if (addLessonButton) {
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/student/" +
          context.user.id +
          "/lesson" +
          "/" +
          context.lessonId,
        requestOptions2
      )
        .then((response) => response.json())
        .then((data) => {
          if (data === "Lesson Created") {
            setAddLessonButton(false);
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [addLessonButton]);

  return (
    <div>
      <StudentLayout>
        {isExecuted ? (
          <StudentTable
            headers={propsName}
            boolean={setAddLessonButton}
            item={lessons}
          />
        ) : null}
      </StudentLayout>
    </div>
  );
}

export default StudentLectures;
