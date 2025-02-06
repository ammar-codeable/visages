import { BrowserRouter } from "react-router";
import { routes } from "./router";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      {routes}
    </BrowserRouter>
  );
}

export default App;
