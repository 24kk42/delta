import { useState, createContext } from "react";

const UserContext = createContext({
  user: {
    firstName: "",
    id: null,
    lastName: "",
    roleId: null,
    roleName: "",
    token: "",
    username: "",
  },
  deleteId: null,
  lessonId: null,
  setLessonId: (lessonToAdd) => {},
  setDeleteId: (idToDelete) => {},
  addLessonId: null,
  login: (user) => {},
  logout: () => {},
});

export function UserContextProvider(props) {
  const [lessonId, setLessonId] = useState();
  const [deleteId, setDeleteId] = useState();
  const [user, setUser] = useState({
    firstName: "",
    id: null,
    lastName: "",
    roleId: null,
    roleName: "",
    token: "",
    username: "",
  });

  const nullUser = {
    firstName: "",
    id: null,
    lastName: "",
    roleId: null,
    roleName: "",
    token: "",
    username: "",
  };

  const context = {
    user: user,
    deleteId: deleteId,
    lessonId: lessonId,
    setDeleteId: setDeleteId,
    setLessonId: setLessonId,
    login: login,
    logout: logout,
  };

  function login(user) {
    setUser(user);
  }

  function logout() {
    setUser(nullUser);
  }
  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
