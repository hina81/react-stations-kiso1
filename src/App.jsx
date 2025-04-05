import "./App.css";
import Header from "./components/Header";
import { TitleProvider } from "./contexts/TitleContext";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <TitleProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </TitleProvider>
  );
}

export default App;
