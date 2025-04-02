import "./App.css";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
