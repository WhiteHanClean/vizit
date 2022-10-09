import "./App.css";
import Main from "./pages/main/main";
import { Routes, Route, Link } from "react-router-dom";
import Redirect from "./pages/Redirect/Redirect";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={ <Main />} />
        <Route path="/redirect" element={<Redirect/>} />
        <Route path="/auth" element={ <Auth/>} />
      </Routes>

    </div>
  );
}

export default App;
