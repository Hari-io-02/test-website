import AppRoute from "./routes/AppRoute";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
