import MyDataTable from "./MyDataTable";
import p1 from "../../assets/img/bg-service.png";
import { useEffect, useState } from "react";

const Main = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Trigger animation on component mount
  }, []);

  return (
    <>
      <section className="bg-white min-h-screen flex flex-col items-center px-6 py-10">
        
        {/* Breadcrumb Section */}
        <div className="w-full max-w-6xl text-gray-500 text-sm mt-12">
          <span className="text-gray-700 font-medium">🏠 Beranda</span> / Services
        </div>

        {/* Hero Section with Animation */}
        <div
          className={`w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between text-center lg:text-left mt-12 transition-all duration-700 ease-in-out transform ${
            show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900">API</h1>
            <p className="text-gray-600 mt-2 text-lg">
              Temukan informasi terkait Services Geoportal Inclusive Disctict GIS
            </p>
          </div>
          <img
            src={p1}
            alt="Illustration"
            className="w-80 lg:w-90 mt-6 lg:mt-0 transition-all duration-700 ease-in-out transform"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(30px)",
            }}
          />
        </div>

        {/* API Info Section */}
        <div
          className={`text-center mb-10 mt-14 transition-all duration-700 ease-in-out transform ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-3xl font-semibold text-gray-800">Layanan API Inclusive Disctict GIS</h1>
          <p className="text-gray-600 mt-2 text-lg">
            Akses cepat dan aman ke berbagai endpoint untuk mendukung aplikasi Anda.
          </p>
          <hr className="w-32 border-t-2 border-gray-300 mx-auto mt-4" />
        </div>

        {/* Table Section */}
        <div className="w-full max-w-6xl shadow-md rounded-lg bg-gray-50 p-6">
          <MyDataTable />
        </div>
      </section>
    </>
  );
};

export default Main;
