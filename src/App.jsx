import "./App.css";
import NavBar from "./components/NavBar";
import MainRoutes from "./components/Routes";
// import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
      </div>
      <div className="main-section">
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
