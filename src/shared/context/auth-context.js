import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

// const authContext = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default authContext
