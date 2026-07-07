import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefaultPage from "./pages/DefaultPage";
// import DatasetPage from "./pages/Dataset";
// import DownloadPage from "./pages/Download";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import CallForPapersPage from "./pages/CallForPapers";
import PaperPage from "./pages/Paper";
import SchedulePage from "./pages/Schedule";

const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    path: "/",
  },
  
  {
    label: "Invited Speakers",
    path: "/#keynote-speakers",
  },
  {
    label: "Schedule",
    path: "/schedule",
  },
  {
    label: "Call for Papers",
    path: "/call-for-papers",
  },
  
  {
    label: "Accepted Papers",
    path: "/papers",
  },
  
  {
    label: "Organisers",
    path: "/#organisers",
  },
  
];

function App() {
  return (
    <Router basename="/failure-recovery">
       <NavigationBar navigationItems={navigationItems} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<DefaultPage/>} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/call-for-papers" element={<CallForPapersPage/>} />
          <Route path="/papers" element={<PaperPage/>} />
          {/* <Route path="/dataset" element={<DatasetPage/>} /> */}
          {/* <Route path="/download" element={<DownloadPage/>} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
