import "./App.css";
import AllPlayers from "./components/AllPlayers.jsx";
import fetchAllPuppies from "./API";
import SinglePlayer from "./components/SinglePlayer";
import CreatePlayerForm from "./components/NewPlayerForm";
import SearchBar from "./components/SearchBar";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [players, setPlayers] = useState([]);
  const [results, setResults] = useState([]);

  async function makePlayersUseful() {
    let puppyArray = await fetchAllPuppies();
    setPlayers(puppyArray);
  }
  useEffect(() => {
    makePlayersUseful();
  }, []);

  return (
    <>
      <div id="Searchbar">
        <SearchBar />
      </div>
      <div>
        <NavBar />
      </div>
      <div id="routeDiv">
        <Routes>
          <Route path="/" element={<AllPlayers players={players} />} />
          <Route
            path="/players/:playerId"
            element={<SinglePlayer players={players} />}
          />
          <Route path="/newPlayerForm" element={<CreatePlayerForm />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
