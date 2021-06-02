import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import AccessPage from "./pages/AccessPage";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Route path="/welcome" component={Welcome} />
        <Route path="/accesspage" component={AccessPage} />
      </main>
    </>
  );
}

export default App;
