import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
