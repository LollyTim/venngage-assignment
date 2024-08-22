import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPage from "./components/FormPage";
import ResumeDisplayPage from "./components/ResumeDisplayPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/resume" element={<ResumeDisplayPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
