import p1 from '../../assets/img/p1.png';
import bgaplikasi from '../../assets/img/bg-aplikasi.png';
import { useEffect, useState } from 'react';

const Main = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true); // Trigger animation on component mount
    }, []);

    return (
        <>
          <section className="bg-white min-h-screen flex flex-col items-center px-6 py-10">
                
                {/* Breadcrumb Section */}
                <div
                    className={`w-full max-w-6xl text-gray-500 text-sm mb-3 mt-12 transition-all duration-1000 ease-out transform ${
                        show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                >
                    <span className="text-gray-700 font-medium">🏠 Beranda</span> / Aplikasi
                </div>
                
                {/* Hero Section with Animation */}
                <div
                    className={`w-full max-w-6xl mb-10 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left transition-all duration-1000 ease-out transform ${
                        show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                >
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold text-gray-900">Aplikasi</h1>
                        <p className="text-gray-600 mt-1 text-lg">
                            Temukan informasi terkait Services Geoportal Inclusive Disctict GIS
                        </p>
                    </div>
                    <img
                        src={bgaplikasi}
                        alt="Illustration"
                        className="w-80 lg:w-80 mt-6 lg:mt-0 transition-all duration-1000 ease-out transform"
                        style={{
                            opacity: show ? 1 : 0,
                            transform: show ? "translateY(0)" : "translateY(30px)",
                        }}
                    />
                </div>
           
                {/* Informasi tentang aplikasi */}
                <div
                    className={`mb-6 text-center transition-all duration-1000 ease-out transform ${
                        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <h1 className="text-3xl font-bold text-gray-800">Aplikasi Sumur Bandung</h1>
                    <p className="text-gray-600 mt-2">Berbagai aplikasi yang tersedia untuk Sumur Bandung.</p>
                    <hr className="w-32 border-t-2 border-gray-300 mx-auto mt-2" />
                </div>

                {/* Grid untuk Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                    {[
                        {
                            title: "Aplikasi Sumur Bandung",
                            desc: "Platform berbasis web untuk mengakses data Sumur Bandung.",
                            link: "http://103.233.103.22:8080/dilans/ui/#classes/tutupan_lahan/cards"
                        },
                        {
                            title: "Mobile Sumur Bandung",
                            desc: "Aplikasi mobile untuk akses mudah di smartphone.",
                            link: "https://play.google.com/store/games?hl=id"
                        },
                        {
                            title: "Mapstore Sumur Bandung",
                            desc: "Penyimpanan peta digital dan data geospasial.",
                            link: "https://play.google.com/store/games?hl=id"
                        }
                    ].map((card, index) => (
                        <div 
                            key={index}
                            className={`card bg-white shadow-2xl rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-3xl transition-all duration-1000 ease-out transform ${
                                show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                            }`}
                        >
                            <figure className="w-full">
                                <img className="w-full h-48 object-cover" src={p1} alt={card.title} />
                            </figure>
                            <div className="card-body p-6">
                                <h2 className="card-title text-2xl font-bold text-gray-800">{card.title}</h2>
                                <p className="text-gray-600">{card.desc}</p>
                                <div className="card-actions justify-end">
                                    <a href={card.link} target="_blank" rel="noreferrer" className="btn btn-primary px-6 py-2 rounded-lg transition duration-300 hover:bg-blue-600">
                                        Telusuri
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

        </section>
        </>
    );
}

export default Main;
