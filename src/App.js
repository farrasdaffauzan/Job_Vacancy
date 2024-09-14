import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/page";
import Lowongan from "./pages/Lowongan/page";
import Login from "./pages/Login/page";
import SingUp from "./pages/Register/page";
import Dashboard from "./pages/Dashboard/page";
import LowonganDetail from "./pages/LowonganDetail/page";
import PageCreate from "./pages/Dashboard/createData";
import Data from "./pages/Dashboard/data";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/lowongan" element={<Lowongan />} />
        <Route path="/lowongan/:id" element={<LowonganDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/Data"
          element={
            <PrivateRoute>
              <Data />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/CreateData"
          element={
            <PrivateRoute>
              <PageCreate />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
