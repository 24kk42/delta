import { useState, useContext, useEffect } from "react";
import UserContext from "../../../components/storage/UserContext";
import AdminLayout from "../../../components/navigationbars/AdminNavigation/AdminLayout";
import Table from "../../../components/Table/Table";
import { useNavigate } from "react-router";
import classes from "./Students.module.css";

function Students() {
  const navigation = useNavigate();
  const context = useContext(UserContext);
  const [students, setStudents] = useState([]);
  const [isExecuted, setIsExecuted] = useState(false);
  const [studentsAreChanged, setStudentsAreChanged] = useState(false);
  function addButtonHandler() {
    navigation("/add-new-student");
  }
  const propsName = [
    "Student ID",
    "Student Number",
    "Name",
    "Surname",
    "Username",
    "Phone Number",
    "E-Mail",
    "School ID",
    "School Name",
    "School Location",
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
      "https://smapi.eu-west-3.elasticbeanstalk.com/admin/students",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setStudentsAreChanged(false);
        setStudents(data);
        setIsExecuted(true);
      });
  }, [studentsAreChanged]);

  useEffect(() => {
    if (context.deleteId !== undefined) {
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/admin/student/" +
          context.deleteId,
        requestOptions2
      ).then(() => setStudentsAreChanged(true));
    }
  }, [context.deleteId]);
  return (
    <div>
      <AdminLayout>
        {isExecuted ? <Table headers={propsName} item={students} /> : null}
      </AdminLayout>
      <div>
        <button onClick={addButtonHandler} className={classes.button}>
          Add New Student
        </button>
      </div>
    </div>
  );
}

export default Students;
