import { Context } from "../context/contextONE";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Menu from "./components/Menu";
import ArchivePage from "./pages/ArchivePage";
import Notfound from "./pages/NotFound";
import LivePage from "./pages/LivePage";
import ProgramsPage from "./pages/ProgramsPage";
import CooperateWithUsPage from "./pages/CooperateWithUsPage";
import ArchivePostsPage from "./pages/ArchivePostsPage";
import Archive from "./components/forArchivePostsPage/Archive";

function App() {
  return (
    <>
      <Context>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="live" element={<LivePage />} />
            <Route path="archivePage" element={<ArchivePage />} />
            <Route
              path="/archivePage/archivePosts"
              element={<ArchivePostsPage />}
            >
              <Route //child
                path="/archivePage/archivePosts/archive"
                element={<Archive />}
              />
            </Route>
            <Route path="programs" element={<ProgramsPage />} />
            <Route path="cooperatewithus" element={<CooperateWithUsPage />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Menu />
        </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
