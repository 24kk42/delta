import "./App.css";
import LoginPage from "./Pages/Login/Login.js";
import AdminPage from "./Pages/Admin/Admin";
import ManagerPage from "./Pages/Manager/Manager";
import Users from "./Pages/Admin/Users/Users";
import Teachers from "./Pages/Admin/Teachers/Teachers";
import Students from "./Pages/Admin/Students/Students.js";
import ManagerTeachers from "./Pages/Manager/ManagerTeachers/ManagerTeachers";
import ManagerStudents from "./Pages/Manager/ManagerStudents/ManagerStudents";
import StudentPage from "./Pages/Student/Student.js";
import MyLecturesPage from "./Pages/Student/MyLectures";
import StudentLectures from "./Pages/Student/StudentLectures.js";
import TeacherPage from "./Pages/Teacher/Teacher";
import TeacherMyLecturesPage from "./Pages/Teacher/TeacherMyLectures";

import { Route, Routes } from "react-router-dom";
import Lessons from "./Pages/Admin/Lessons/Lessons.js";
import { Navigate } from "react-router-dom";

import AddUserPage from "./Pages/AddPages/AddUser/AddUser.js";
import AddTeacherPage from "./Pages/AddPages/AddTeacher/AddTeacher.js";
import AddStudentPage from "./Pages/AddPages/AddStudent/AddStudent.js";
import AddLessonsPage from "./Pages/AddPages/AddLessons/AddLessons.js";
import AddStudentPageManagement from "./Pages/AddPagesForManegement/AddStudent/AddStudentManagement.js";
import AddTeacherPageManagement from "./Pages/AddPagesForManegement/AddTeacher/AddTeacherManagement.js";
import AddLessonTeacherPage from "./Pages/AddPagesForTeacher/AddLessonTeacher";
import UserContext from "./components/storage/UserContext";
import { useContext } from "react";


function App() {
  const user = useContext(UserContext);
  function isValid(roleName){
    if(user.user.roleName===roleName){
      return true;
    }
    else{return false}
  }

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={ isValid("SYSADMIN")? <AdminPage />:<LoginPage/>} />
      <Route path="/manager" element={isValid("MANAGER")? <ManagerPage />:<LoginPage/>} />
      <Route path="/users" element={isValid("SYSADMIN")? <Users />:<LoginPage/>} />
      <Route path="/teachers" element={isValid("SYSADMIN")? <Teachers />:<LoginPage/>} />
      <Route path="/teacher" element={isValid("TEACHER")? <TeacherPage />:<LoginPage/>} />
      <Route path="/students" element={isValid("SYSADMIN")? <Students />:<LoginPage/>} />
      <Route path="/student" element={isValid("STUDENT")? <StudentPage />:<LoginPage/>} />
      <Route path="/lectures-student" element={isValid("STUDENT")? <StudentLectures />: <LoginPage/>} />
      <Route path="/my-lectures" element={isValid("STUDENT")? <MyLecturesPage /> : <LoginPage/>} />
      <Route path="/lectures-teacher" element={isValid("TEACHER")?<TeacherMyLecturesPage />:<LoginPage/>} />
      <Route path="/add-new-lecture-teacher" element={isValid("TEACHER")?<AddLessonTeacherPage />:<LoginPage/>} />
      
      
      <Route path="/lessons" element={isValid("SYSADMIN")? <Lessons />:<LoginPage/>} />
      <Route path="/manager-teachers" element={isValid("MANAGER")?<ManagerTeachers />:<LoginPage/>} />
      <Route path="/manager-students" element={isValid("MANAGER") ?<ManagerStudents />:<LoginPage/>} />
      <Route path="/add-new-user" element={isValid("SYSADMIN")?<AddUserPage />:<LoginPage/>} />
      <Route path="/add-new-teacher" element={isValid("SYSADMIN")? <AddTeacherPage />:<LoginPage/>} />
      <Route path="/add-new-student" element={isValid("SYSADMIN")? <AddStudentPage />:<LoginPage/>} />
      <Route path="/add-new-lesson" element={isValid("SYSADMIN")? <AddLessonsPage />:<LoginPage/>} />
      <Route
        path="/add-new-student-management"
        element={isValid("MANAGER")? <AddStudentPageManagement />:<LoginPage/>}
      />
      <Route
        path="/add-new-teacher-management"
        element={isValid("MANAGER")? <AddTeacherPageManagement />:<LoginPage/>}
      />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
