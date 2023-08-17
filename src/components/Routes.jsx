import { Route, Routes } from "react-router-dom";
import AllPlayers from "./AllPlayers";
import SinglePlayer from "./SinglePlayer";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AllPlayers />} />
      <Route path="/players/:id" element={<SinglePlayer />} />
    </Routes>
  );
}
