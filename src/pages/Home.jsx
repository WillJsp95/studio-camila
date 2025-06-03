import React from "react";
import bannerImage from "../assets/banner-camila.jpg";
import { useNavigate } from "react-router-dom";
import ChibiAssistant from "../components/ChibiAssistant";

import foto1 from "../assets/images/foto1.png";
import foto2 from "../assets/images/foto2.png";
import foto3 from "../assets/images/foto3.png";
import foto4 from "../assets/images/foto4.png";
import foto5 from "../assets/images/foto5.png"; // se quiser, adicione mais
import foto6 from "../assets/images/foto6.png";
import foto7 from "../assets/images/foto7.png";
import foto8 from "../assets/images/foto8.png";
import foto9 from "../assets/images/foto9.png";
import foto10 from "../assets/images/foto10.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const navigate = useNavigate();

  //fotos no slide inicial
  const sliderImages = [foto1, foto2, foto3, foto4,
     foto5, foto6, foto7, foto8, foto9, foto10];

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
          Studio Camila Vieira
        </h1>

        <div className="space-y-6 mb-10 text-lg sm:text-xl md:text-2xl max-w-2xl text-white bg-black/50 p-6 rounded-xl shadow-lg">
          <p>Bem-vinda à minha página oficial!</p>
          <p>
       
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => navigate("/cursos")}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105 duration-300"
          >
            Cursos
          </button>

          <a
            href="https://wa.me/5551983185116"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105 duration-300"
          >
            WhatsApp
          </a>

          <a
            href="https://www.instagram.com/camila_nails.designer/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105 duration-300"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Swiper slider */}
      <div className="relative z-20 mt-4 mb-16 w-full max-w-5xl mx-auto px-4">
        <h2 className="text-3xl text-white font-bold text-center mb-6">Galeria</h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-xl"
        >
          {sliderImages.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Foto ${index + 1}`}
                className="w-full h-42 object-cover rounded-xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <ChibiAssistant />
      </div>
    </section>
  );
}
