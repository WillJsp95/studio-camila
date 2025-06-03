import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import Cursos from "./pages/Cursos";

function Layout() {
  const location = useLocation();

  // Esconde o Header se estiver na página Home (rota "/")
  const showHeader = location.pathname !== "/";

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cursos" element={<Cursos />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
