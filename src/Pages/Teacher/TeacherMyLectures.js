import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../components/storage/UserContext";
import TeacherLayout from "../../components/navigationbars/TeacherNavigation/TeacherLayout";
import Table from "../../components/Table/Table";
import classes from "./TeacherMyLectures.module.css";

function TeacherMyLectures() {
  const navigation = useNavigate();
  const context = useContext(UserContext);
  const [lessons, setLessons] = useState([]);
  const [isExecuted, setIsExecuted] = useState(false);
  const [lessonsAreChanged, setLessonsAreChanged] = useState(false);
  function addButtonHandler() {
    navigation("/add-new-lecture-teacher");
  }
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
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${context.user.token}`,
    },
  };

  useEffect(() => {
    fetch(
      "https://smapi.eu-west-3.elasticbeanstalk.com/teacher/lessons",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setLessonsAreChanged(false);
        setLessons(data);
        setIsExecuted(true);
      });
  }, [lessonsAreChanged]);

  useEffect(() => {
    if (context.deleteId !== undefined) {
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/teacher/lesson/" +
          context.deleteId,
        requestOptions2
      ).then(() => setLessonsAreChanged(true));
    }
  }, [context.deleteId]);
  return (
    <div>
      <TeacherLayout>
        {isExecuted ? <Table headers={propsName} item={lessons} /> : null}
      </TeacherLayout>
      <div>
        <button onClick={addButtonHandler} className={classes.button}>
          Add New Lesson
        </button>
      </div>
    </div>
  );
}

export default TeacherMyLectures;