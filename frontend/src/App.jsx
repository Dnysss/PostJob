import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Content from "./contents/Content";
import Form from "./components/Form";
import Job from "./components/Job";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content />}/>
        <Route path="/form" element={<Form />} />
        <Route path="/job" element={<Job />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
