// src/components/Contato.jsx
import React from "react";

export default function Contato() {
  return (
    <section id="contato" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-pink-600">Contato</h2>
        <p className="mb-8 text-gray-700">
          Entre em contato para agendar seu horário ou tirar dúvidas!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://wa.me/5551982066508" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/camila_nails.designer/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}