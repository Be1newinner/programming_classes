import { useContext, createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  function login() {}

  function logout() {}

  function register({ email, password, name }) {
    if (!email || !password) throw new Error("Email and password are required");

    const user = {
      email,
      password,
      name,
    };

    // Add data first Time
    const all_users = [...users, user];
    localStorage.setItem("users", JSON.stringify(all_users));
  }

  useEffect(() => {
    if (window.document) {
      try {
        const local_users = JSON.parse(localStorage.getItem("users"));
        setUsers(local_users);
      } catch (error) {
        console.log("ERROR parsing USERS JSON!", error);
      }
    }
  }, []);

  useEffect(() => {
    console.log({ users });
  }, [users]);

  return (
    <AuthContext.Provider value={{ currentUser, users, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuhtContext = useContext(AuthContext);
  if (!AuhtContext)
    throw new Error("useAuth must be used within an AuthProvider");
  return AuhtContext;
};

/*
CONTEXT SET UP

STEP 1
const AuthContext = createContext();

STEP 2
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

STEP 3
export const useAuth = () => {
  const AuhtContext = useContext(AuthContext);
  if (!AuhtContext)
    throw new Error("useAuth must be used within an AuthProvider");
  return AuhtContext;
};


*/
