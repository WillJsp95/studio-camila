// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6 justify-center">
      <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
        Home
      </NavLink>
      <NavLink to="/servicos" className={({ isActive }) => (isActive ? "underline" : "")}>
        Serviços
      </NavLink>
      <NavLink to="/contato" className={({ isActive }) => (isActive ? "underline" : "")}>
        Contato
      </NavLink>
      <NavLink to="/cursos" className={({ isActive }) => (isActive ? "underline" : "")}>
        Cursos
      </NavLink>
    </nav>
  );
}
