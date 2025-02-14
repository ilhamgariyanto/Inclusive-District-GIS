import p1 from '../../assets/img/p1.png';
import bgaplikasi from '../../assets/img/bg-aplikasi.png';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Variants untuk animasi
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Main = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="bg-background min-h-screen flex flex-col items-center px-6 py-10 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-white to-secondary opacity-20 pointer-events-none"></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-primary opacity-40 pointer-events-none"></div>

      {/* Breadcrumb */}
      <motion.div
        className="w-full max-w-6xl text-gray-700 text-sm mb-3 mt-12 relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <span className="text-gray-800 font-medium">🏠 Beranda</span> / Aplikasi
      </motion.div>

      {/* Hero Section */}
      <motion.div
        className="w-full max-w-6xl mb-10 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left relative z-10"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="max-w-2xl"
          variants={fadeInRight}
        >
          <h1 className="text-5xl font-bold text-[#007F73] leading-tight drop-shadow-md">
            Transformasi Digital
          </h1>
          <h1 className="text-5xl font-bold text-[#FFC700] leading-tight drop-shadow-md">
            Dengan Empat Solusi Terbaik
          </h1>
          <p className="text-gray-800 mt-4 text-lg drop-shadow-sm">
            Temukan informasi terkait{" "}
            <span className="font-semibold text-[#4CCD99]">Services Geoportal Inclusive District GIS</span>{" "}
            yang akan membantu Anda memahami lebih dalam.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-6 py-3 bg-[#FFC700] text-[#007F73] font-semibold rounded-full shadow-lg hover:bg-[#FFF455] transition-transform duration-300"
          >
            Pelajari Lebih Lanjut
          </motion.button>
        </motion.div>

        {/* Gambar dengan efek dari tengah ke kanan */}
        <motion.img
          src={bgaplikasi}
          alt="Illustration"
          className="w-80 lg:w-[450px] mt-6 lg:mt-0 transition-transform duration-1000 ease-in-out rounded-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        />
      </motion.div>

      {/* Grid dengan 4 kolom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl relative z-10">
        {[
          {
            title: "CMDBUILD Dilans",
            desc: "Platform berbasis web untuk mengakses data Sumur Bandung.",
            link: "http://103.233.103.22:8080/dilans/ui/#classes/tutupan_lahan/cards"
          },
          {
            title: "Mobile Dilans",
            desc: "Aplikasi mobile untuk akses mudah di smartphone.",
            link: "https://play.google.com/store/games?hl=id"
          },
          {
            title: "Mapstore Dilans",
            desc: "Penyimpanan peta digital dan data geospasial.",
            link: "https://play.google.com/store/games?hl=id"
          },
          {
            title: "Geoserver Dilans",
            desc: "Jelajahi data geospasial dengan mudah.",
            link: "https://play.google.com/store/games?hl=id"
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            className="card border border-gray-200 bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-500 ease-out transform hover:scale-105 group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
          >
            <figure className="overflow-hidden">
              <img
                className="w-full h-40 object-cover rounded-t-2xl transition-transform duration-500 transform group-hover:scale-105"
                src={p1}
                alt={card.title}
              />
            </figure>
            <div className="p-6 transition-all duration-300 group-hover:bg-[#4CCD99]">
              <h2 className="text-2xl font-bold text-[#007F73] group-hover:text-[#FFF455]">{card.title}</h2>
              <p className="text-gray-700 mt-2 group-hover:text-white">{card.desc}</p>
              <div className="mt-4 flex justify-end">
                <a
                  href={card.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#FFC700] text-[#007F73] px-5 py-2 rounded-lg transition duration-300 hover:bg-[#FFF455]"
                >
                  Telusuri
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Main;
