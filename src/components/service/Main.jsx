import MyDataTable from "./MyDataTable";
import p1 from "../../assets/img/bg-service.png";
import { useEffect } from "react";
import { motion } from "framer-motion";

// Variants untuk efek slide-in yang halus
const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
      <section className="bg-background min-h-screen flex flex-col items-center px-6 py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-white to-secondary opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-primary opacity-40 pointer-events-none"></div>
        <motion.div
          className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between text-center lg:text-left mt-12 relative z-10"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
        >
          <div className="max-w-2xl">
            <motion.h1
              className="text-6xl font-bold text-secondary drop-shadow-xl"
              variants={slideFromLeft}
            >
              API Geoportal
            </motion.h1>
            <motion.p
              className="text-dark mt-4 text-lg drop-shadow-md"
              variants={slideFromLeft}
              transition={{ delay: 0.3 }}
            >
              Akses data spasial dengan mudah melalui layanan{" "}
              <span className="font-semibold text-primary">
                Geoportal Inclusive District GIS
              </span>
              . Tingkatkan integrasi dan efisiensi dalam pengelolaan informasi geospasial.
            </motion.p>
            <motion.button
              className="mt-6 px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-hover transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              variants={slideFromBottom}
              transition={{ delay: 0.6 }}
            >
              Pelajari Lebih Lanjut
            </motion.button>
          </div>
          <motion.img
            src={p1}
            alt="Illustration"
            className="w-80 lg:w-[450px] mt-6 lg:mt-0 rounded-2xl"
            variants={slideFromRight}
            transition={{ delay: 0.6 }}
          />
        </motion.div>

        <motion.div
          className="text-center mb-10 mt-14 relative z-10"
          variants={slideFromBottom}
          transition={{ delay: 0.9 }}
        >
          <p className="text-dark text-xl font-semibold">
            Daftar Geoservices <span className="text-secondary">WMS</span> dan{" "}
            <span className="text-primary">WFS</span> yang tersedia di Geoportal Inclusive District GIS
          </p>
          <hr className="w-32 border-t-4 border-secondary mx-auto mt-2 transition-transform duration-300 ease-in-out hover:scale-x-110" />
        </motion.div>
        <motion.div
          className="w-full max-w-6xl shadow-xl rounded-2xl bg-white p-6 border-t-4 border-primary relative z-10"
          variants={slideFromBottom}
          transition={{ delay: 1.2 }}
        >
          <MyDataTable />
        </motion.div>
      </section>
    </>
  );
};

export default Main;
