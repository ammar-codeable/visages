import { Route, Routes } from "react-router";
import Events from "./routes/events/Events";
import Home from "./routes/home/Home";

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<Events />} />
  </Routes>
);
