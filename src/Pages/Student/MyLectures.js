import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../components/storage/UserContext";
import StudentLayout from "../../components/navigationbars/StudentNavigation/StudentLayout";
import Table from "../../components/Table/Table";
import classes from "./MyLectures.module.css";

function MyLecturesPage() {
  const navigation = useNavigate();
  const context = useContext(UserContext);
  const [lessons, setLessons] = useState([]);
  const [isExecuted, setIsExecuted] = useState(false);
  const [lessonsAreChanged, setLessonsAreChanged] = useState(false);

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
        "https://smapi.eu-west-3.elasticbeanstalk.com/student/"+context.user.id+"/lessons",
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
        "https://smapi.eu-west-3.elasticbeanstalk.com/student/"+context.user.id+"/lesson/"+context.deleteId,
        requestOptions2
      ).then(() => {setLessonsAreChanged(true);context.setDeleteId(0)});
    }
  }, [context.deleteId]);
  return (
    <div>
      <StudentLayout>
        {isExecuted ? <Table headers={propsName} item={lessons} /> : null}
      </StudentLayout>
    </div>
  );
}

export default MyLecturesPage;
