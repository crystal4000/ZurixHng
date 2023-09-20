import { Routes, Route } from "react-router-dom";
import Login from "./Components/auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateAccount from "./Components/auth/CreateAccount";
import ImageGallery from "./Components/imageGallery/ImageGallery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/homepage" element={<ImageGallery />} />
      </Routes>
    </div>
  );
}

export default App;
