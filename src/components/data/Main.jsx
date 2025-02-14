import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import p1 from "../../assets/img/bg-data.png";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const MetadataPage = () => {
  const [category, setCategory] = useState("");
  const [organization, setOrganization] = useState("");
  const [sort, setSort] = useState("Terpopuler");
  const location = useLocation();

  // Variants untuk animasi yang lebih dinamis
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-background min-h-screen flex flex-col items-center px-6 py-10 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-white to-secondary opacity-20 pointer-events-none"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-primary opacity-40 pointer-events-none"></div>

      {/* Breadcrumb */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className="w-full max-w-6xl text-dark text-sm mt-12 relative z-10"
      >
        <span className="text-secondary font-semibold">🏠 Beranda</span> / Data
      </motion.div>

      {/* Hero Section */}
      <motion.div
        key={location.key}
        initial="hidden"
        animate="show"
        variants={container}
        className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between text-center lg:text-left relative z-10"
      >
        <motion.div variants={fadeInUp} className="max-w-2xl">
          <h1 className="text-6xl font-bold text-secondary drop-shadow-xl">
            Metadata
          </h1>
          <p className="text-dark mt-4 text-lg drop-shadow-md">
            Temukan informasi dalam bentuk struktur dan format baku untuk{" "}
            <span className="font-semibold text-primary">
              menggambarkan data
            </span>
            , menjelaskan data, serta memudahkan pencarian, penggunaan, dan
            pengelolaan informasi data.
          </p>
        </motion.div>

        <motion.img
          src={p1}
          alt="Illustration"
          initial="hidden"
          animate="show"
          variants={slideInRight}
          className="w-80 lg:w-[450px] mt-6 lg:mt-0"
        />
      </motion.div>

      {/* Search Section */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="w-full max-w-6xl mt-12 relative z-10"
      >
        <motion.div variants={fadeInUp} className="relative w-full rounded-full shadow-xl overflow-hidden">
          <input
            type="text"
            placeholder="Cari Metadata..."
            className="w-full p-4 pl-6 text-dark focus:outline-none rounded-full bg-white border-2 border-primary shadow-inner"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="absolute right-0 top-0 bottom-0 px-6 bg-primary text-white rounded-full flex items-center justify-center shadow-lg"
          >
            <FaSearch />
          </motion.button>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-4">
          <motion.select
            whileHover={{ scale: 1.05 }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full md:w-auto p-3 border-2 border-secondary rounded-lg bg-white text-dark shadow-lg"
          >
            <option value="">Pilih Kategori</option>
            <option value="kategori1">Kategori 1</option>
            <option value="kategori2">Kategori 2</option>
          </motion.select>

          <motion.select
            whileHover={{ scale: 1.05 }}
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="w-full md:w-auto p-3 border-2 border-secondary rounded-lg bg-white text-dark shadow-lg"
          >
            <option value="">Pilih Organisasi</option>
            <option value="org1">Organisasi 1</option>
            <option value="org2">Organisasi 2</option>
          </motion.select>

          <motion.div variants={fadeInUp} className="flex items-center space-x-2">
            <span className="text-dark">Urutkan:</span>
            <motion.select
              whileHover={{ scale: 1.05 }}
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="p-3 border-2 border-secondary rounded-lg bg-white text-dark shadow-lg"
            >
              <option value="Terpopuler">Terpopuler</option>
              <option value="Terbaru">Terbaru</option>
            </motion.select>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className="w-full max-w-6xl mt-6 text-dark relative z-10"
      >
        <p className="font-semibold">0 Metadata ditemukan</p>
      </motion.div>
    </section>
  );
};

export default MetadataPage;
