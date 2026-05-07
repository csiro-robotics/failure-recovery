import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefaultPage from "./pages/DefaultPage";
// import PaperPage from "./pages/Paper";
// import DatasetPage from "./pages/Dataset";
// import DownloadPage from "./pages/Download";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import CallForPapersPage from "./pages/CallForPapers";

const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/#about",
  },
  {
    label: "Invited Speakers",
    path: "/#keynote-speakers",
  },
  {
    label: "Schedule",
    path: "/#schedule",
  },
  {
    label: "Best Paper Award",
    path: "/#best-paper-award",
  },
  {
    label: "Papers",
    path: "/#papers",
  },
  {
    label: "Organisers",
    path: "/#organisers",
  },
  {
    label: "Call for Papers",
    path: "/call-for-papers",
  },
];

function App() {
  return (
    <Router basename="/failure-recovery">
       <NavigationBar navigationItems={navigationItems} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<DefaultPage/>} />
          <Route path="/call-for-papers" element={<CallForPapersPage/>} />
          {/* <Route path="/paper" element={<PaperPage/>} /> */}
          {/* <Route path="/dataset" element={<DatasetPage/>} /> */}
          {/* <Route path="/download" element={<DownloadPage/>} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
