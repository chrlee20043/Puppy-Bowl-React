import { useState, useEffect } from "react";
import SinglePlayer from "./SinglePlayer";

const cohortName = "2306-ghp-et-web-ft-sf";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await fetch(`${API_URL}/players`);
        const result = await response.json();
        setPlayers(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers();
  }, []);
  return (
    <div>
      {players.map((player) => {
        return (
          <div>
            <h4>Name</h4>
            <p>Breed</p>
            <p>ImageUrl</p>
            <p>Team</p>

            <SinglePlayer key={player.id} />
          </div>
        );
      })}
    </div>
  );
}
