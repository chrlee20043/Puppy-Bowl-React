const API_URL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF";

export default async function fetchAllPuppies() {
  try {
    const response = await fetch(`${API_URL}/players`);
    const result = await response.json();
    console.log(result.data.players);
    return result.data.players;
  } catch (error) {
    console.error(error);
  }
}
