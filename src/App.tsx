import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefaultPage from "./pages/DefaultPage";
import PaperPage from "./pages/Paper";
import DatasetPage from "./pages/Dataset";
import DownloadPage from "./pages/Download";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    path: "/",
    children: [
      { label: "About", path: "/#about" },
      { label: "Invited Speakers", path: "/#invited-speakers" },
      { label: "Schedule", path: "/#schedule" },
      { label: "Best Paper Award", path: "/#best-paper-award" },
      { label: "Papers", path: "/#papers" },
      { label: "Organisers", path: "/#organisers" },
    ],
  },
];

function App() {
  return (
    <Router basename="/failure-recovery">
       <NavigationBar navigationItems={navigationItems} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<DefaultPage/>} />
          {/* <Route path="/paper" element={<PaperPage/>} /> */}
          {/* <Route path="/dataset" element={<DatasetPage/>} /> */}
          {/* <Route path="/download" element={<DownloadPage/>} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
