import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import HomePages from "./pages/HomePages";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Timeline from "./pages/Timeline";
import Achievements from "./pages/Achievements";
import Team from "./pages/Team";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePages />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}