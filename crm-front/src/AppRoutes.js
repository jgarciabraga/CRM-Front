import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import { useAuthContext } from "./context/auth/AuthContext";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}
