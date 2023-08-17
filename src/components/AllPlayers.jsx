import fetchAllPuppies from "../API";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function AllPlayers() {
  //     //import fetchall puppies; run it; run a useState here to create the array of puppies
  const [puppyData, setPuppyData] = useState([]);

  async function makePuppiesUseful() {
    let puppyArray = await fetchAllPuppies();
    setPuppyData(puppyArray);
  }

  useEffect(() => {
    makePuppiesUseful();
  }, []);
  const navigate = useNavigate();
  //   console.log(puppyData);
  return puppyData.map((puppy) => {
    return (
      <div key={puppy.id}>
        <h4>{puppy.id}</h4>
        <h4>{puppy.name}</h4>
        <h4>{puppy.breed}</h4>

        <img src={puppy.imageUrl} alt={puppy.name} />
        <button onClick={() => navigate("/players/:id")}>See Details</button>
      </div>
    );
  });
}
