import { useState, useContext, useEffect } from "react";
import UserContext from "../../components/storage/UserContext";
import AdminLayout from "../../components/navigationbars/AdminNavigation/AdminLayout";

function Students() {
  function onClickButton(props) {
    console.log(props);
  }
  const context = useContext(UserContext);
  const [students, setStudents] = useState([]);

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${context.user.token}`,
    },
  };

  useEffect(() => {
    fetch(
      "https://smapi.eu-west-3.elasticbeanstalk.com/admin/students",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);
  return (
    <div>
      <AdminLayout>
        <button onClick={() => onClickButton(students)}>students</button>

        {students.map((student, pos) => (
          <div key={pos}>{student.studentId}</div>
        ))}
      </AdminLayout>
    </div>
  );
}

export default Students;