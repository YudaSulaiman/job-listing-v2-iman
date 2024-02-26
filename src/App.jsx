/* eslint-disable react/no-unescaped-entities */
import { jsonData } from "./data/data";
import JobContainer from './components/JobContainer';
import JobList from './pages/JobPages'
import JobHeader from "./pages/JobHeader";
import JobDescription from "./pages/JobDescription";
import JobLandingPages from './pages/JobLandingPages'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<JobLandingPages/>} />
      <Route path="/job-list" element={<JobHeader/>}>
        <Route path="" element={<JobList/>}/>
        <Route path=":jobId" element={<JobDescription/>}/>
      </Route>
    </Routes>
  );
};

export default App;
