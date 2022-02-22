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
  login: (user) => {},
  logout: () => {},
});

export function UserContextProvider(props) {
  const [user, setUser] = useState({
    firstName: "",
    id: null,
    lastName: "",
    roleId: null,
    roleName: "",
    token: "",
    username: "",
  });

  const context = {
    user: user,
    login: login,
    logout: logout,
  };

  function login(user) {
    setUser(user);
  }

  function logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
