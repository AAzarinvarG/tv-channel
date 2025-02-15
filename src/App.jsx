import { Context } from "../context/contextONE";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Menu from "./components/Menu";
import ArchivePage from "./pages/ArchivePage";
import Notfound from "./pages/NotFound";

function App() {
  return (
    <>
      <Context>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="archive" element={<ArchivePage />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Menu />
        </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
