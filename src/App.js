import LandingPage from "./Views/LandingPage";
import Main from "./Views/Main";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
