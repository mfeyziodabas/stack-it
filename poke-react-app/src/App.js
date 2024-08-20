import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllBattleResults from "./components/AllBattleResults";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          path="/allbattleresults"
          element={<AllBattleResults />}
        />
      </Routes>
    </Router>
  );
}

export default App;
