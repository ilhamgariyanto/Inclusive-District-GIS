import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import p1 from "../../assets/img/bg-data.png";
import { useLocation } from "react-router-dom"; // untuk mendapatkan lokasi saat ini

const MetadataPage = () => {
  const [category, setCategory] = useState("");
  const [organization, setOrganization] = useState("");
  const [sort, setSort] = useState("Terpopuler");
  const [show, setShow] = useState(false);
  const location = useLocation(); // Menggunakan hook untuk melacak lokasi

  useEffect(() => {
    setShow(true); // Trigger animation on component mount
  }, [location]); // Ketika lokasi berubah, animasi di-trigger

  return (
    <section className="bg-gray-100 min-h-screen flex flex-col items-center px-6 py-10">
      {/* Breadcrumb */}
      <div className="w-full max-w-6xl text-gray-500 text-sm mt-12">
        <span className="text-gray-700 font-medium">🏠 Beranda</span> / Data
      </div>

      {/* Header with Animation */}
      <div
        key={location.key} // Tambahkan key yang berubah saat lokasi berubah
        className={`w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between text-center lg:text-left transition-all duration-1000 ease-in-out transform ${
          show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900">Metadata</h1>
          <p className="text-gray-600 mt-1 text-lg">
            Temukan informasi dalam bentuk struktur dan format baku untuk menggambarkan data,
            menjelaskan data, serta memudahkan pencarian, penggunaan, dan pengelolaan informasi data.
          </p>
        </div>
        <img
          src={p1}
          alt="Illustration"
          className="w-80 lg:w-96 mt-6 lg:mt-0 transition-all duration-1000 ease-in-out transform"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(30px)",
          }}
        />
      </div>

      {/* Search & Filters Section with Animation */}
      <div
        className={`w-full max-w-6xl mt-12 transition-all duration-1000 ease-in-out transform ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex items-center rounded-lg">
          <input
            type="text"
            placeholder="Pencarian"
            className="w-full p-3 pl-4 text-gray-700 focus:outline-none rounded-l-lg bg-white"
          />
          <button className="px-5 py-4 btn text-white flex items-center justify-center h-full bg-blue-500 rounded-r-lg">
            <FaSearch />
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full md:w-auto p-3 border border-gray-300 rounded-lg bg-white"
          >
            <option value="">Pilih</option>
            <option value="kategori1">1</option>
            <option value="kategori2">2</option>
          </select>

          <select
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="w-full md:w-auto p-3 border border-gray-300 rounded-lg bg-white"
          >
            <option value="">Pilih</option>
            <option value="org1">1</option>
            <option value="org2">2</option>
          </select>

          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Urutkan:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg bg-white"
            >
              <option value="Terpopuler">Terpopuler</option>
              <option value="Terbaru">Terbaru</option>
            </select>
          </div>
        </div>
      </div>

      {/* Result Section with Animation */}
      <div
        className={`w-full max-w-6xl mt-6 text-gray-700 transition-all duration-1000 ease-in-out transform ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="font-semibold">0 Metadata ditemukan</p>
      </div>
    </section>
  );
};

export default MetadataPage;
