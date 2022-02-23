import { useState, useContext, useEffect } from "react";
import UserContext from "../../components/storage/UserContext";
import AdminLayout from "../../components/navigationbars/AdminNavigation/AdminLayout";

function Teachers() {
  function onClickButton(props) {
    console.log(props);
  }
  const context = useContext(UserContext);
  const [teachers, setTeachers] = useState([]);

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${context.user.token}`,
    },
  };

  useEffect(() => {
    fetch(
      "https://smapi.eu-west-3.elasticbeanstalk.com/admin/teachers",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setTeachers(data);
      });
  }, []);
  return (
    <div>
      <AdminLayout>
        <button onClick={() => onClickButton(teachers)}>teachers</button>

        {teachers.map((teacher, pos) => (
          <div key={pos}>{teacher.teacherId}</div>
        ))}
      </AdminLayout>
    </div>
  );
}

export default Teachers;
