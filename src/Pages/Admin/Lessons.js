import { useState, useContext, useEffect } from "react";
import UserContext from "../../components/storage/UserContext";
import AdminLayout from "../../components/navigationbars/AdminNavigation/AdminLayout";

function Lessons() {
  function onClickButton(props) {
    console.log(props);
  }
  const context = useContext(UserContext);
  const [lessons, setLessons] = useState([]);

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${context.user.token}`,
    },
  };

  useEffect(() => {
    fetch(
      "https://smapi.eu-west-3.elasticbeanstalk.com/admin/lessons",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setLessons(data);
      });
  }, []);
  return (
    <div>
      <AdminLayout>
        <button onClick={() => onClickButton(lessons)}>lessons</button>

        {lessons.map((lesson, pos) => (
          <div key={pos}>{lesson.id}</div>
        ))}
      </AdminLayout>
    </div>
  );
}

export default Lessons;