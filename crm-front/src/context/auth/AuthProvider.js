import { useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
