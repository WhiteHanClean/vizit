import "./App.css";
import Main from "./pages/main/main";
import { Routes, Route, Link } from "react-router-dom";
import Redirect from "./pages/Redirect/Redirect";
import Auth from "./pages/auth/Auth";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/user/:id" element={ <Main />} />
        <Route path="/redirect/:id" element={<Redirect/>} />
        <Route path="/auth" element={ <Auth/>} />
        <Route path="*" element={ <Auth/>} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
