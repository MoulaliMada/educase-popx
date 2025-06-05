import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from "./components/LandingScreen";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<LandingScreen />} />
        <Route path="/" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
