import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import ContactShow from "../pages/Contacts/Contact-show";
import Register from "../pages/Auth/Register";
export default function Router() {
  //let auth = localStorage.accessToken;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Register />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/contato/:id" element={<ContactShow />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
