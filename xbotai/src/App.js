import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
    </div>
  );
}

export default App;
