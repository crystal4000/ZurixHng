import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MovieDetails from "./Components/MovieDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
