// // File: src/context/UserContext.jsx

// import { createContext, useEffect, useState } from "react";
// import { getCurrentUser } from "../api/auth";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     getCurrentUser()
//       .then(setUser)
//       .catch(() => setUser(null));
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
