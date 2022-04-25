import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route path="/" element={<profile />} />
        <Route path="/:username" element={<profile />} />
        <Route path="/:username/:reponame" element={<repo />} />
      </Routes>

      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;
