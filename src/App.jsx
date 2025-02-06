import HomePage from "./pages/HomePage";
import Menu from "./components/Menu";
import { Context } from "../context/contextONE";
// import ArchivePage from "./pages/ArchivePage";

function App() {
  return (
    <>
      <Context>
        <HomePage />
        <Menu />
      </Context>
      {/* <ArchivePage /> */}
    </>
  );
}

export default App;
