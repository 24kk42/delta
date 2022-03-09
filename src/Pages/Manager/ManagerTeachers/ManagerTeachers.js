import { useState, useContext, useEffect} from "react";
import UserContext from "../../../components/storage/UserContext";
import ManagerLayout from "../../../components/navigationbars/ManagerNavigation/ManagerLayout";
import Table from "../../../components/Table/Table";
import { useNavigate } from "react-router";
import classes from "./ManagerTeachers.module.css"

function ManagerTeachers() {
  const navigation = useNavigate();
  const context = useContext(UserContext);
  const [teachers, setTeachers] = useState([]);
  const [isExecuted, setIsExecuted] = useState(false);
  const [teachersAreChanged, setTeachersAreChanged] = useState(false);
  function addButtonHandler() {
    navigation("/add-new-teacher-management");
  }
  const propsName = [
    "Teacher ID",
    "Name",
    "Surname",
    "Username",
    "Phone Number",
    "E-Mail",
    "School ID",
    "School Name",
    "School Address",
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
      "https://smapi.eu-west-3.elasticbeanstalk.com/management/teachers",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setTeachersAreChanged(false);
        setTeachers(data);
        setIsExecuted(true);
      });
  }, [teachersAreChanged]);

  useEffect(() => {
    if (context.deleteId !== undefined) {
      fetch(
        "https://smapi.eu-west-3.elasticbeanstalk.com/management/teacher/" +
          context.deleteId,
        requestOptions2
      ).then(() => setTeachersAreChanged(true));
    }
  }, [context.deleteId]);

  return (
    <div>
      <ManagerLayout>
        {isExecuted ? <Table headers={propsName} item={teachers} /> : null}
        <div>
          <button onClick={addButtonHandler} className={classes.button}>
            Add New Teacher
          </button>
        </div>
      </ManagerLayout>
    </div>
  );
}

export default ManagerTeachers;