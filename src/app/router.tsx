import { Route, Routes } from "react-router";
import Events from "./routes/events/Events";
import Home from "./routes/home/Home";
import Layout from "@/app/routes/root";

export const routes = (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
    </Route>
  </Routes>
);
