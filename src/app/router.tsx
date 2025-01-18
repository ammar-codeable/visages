import { Route, Routes } from "react-router";
import Home from "./routes/home/Home";

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<div>Events</div>} />
    <Route path="/contact" element={<div>Contact</div>} />
  </Routes>
);
