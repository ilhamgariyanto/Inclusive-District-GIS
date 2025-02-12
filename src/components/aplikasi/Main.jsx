import p1 from '../../assets/img/p1.png';
import bgaplikasi from '../../assets/img/bg-aplikasi.png';
import { useEffect, useState } from 'react';

const Main = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <>
            <section className="bg-white min-h-screen flex flex-col items-center px-6 py-10">
                <div
                    className={`w-full max-w-6xl text-gray-500 text-sm mb-3 mt-12 transition-all duration-1000 ease-out transform ${
                        show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                >
                    <span className="text-gray-700 font-medium">🏠 Beranda</span> / Aplikasi
                </div>

                <div
                    className={`w-full max-w-6xl mb-10 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left transition-all duration-1000 ease-out transform ${
                        show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                >
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold text-gray-900 leading-snug">
                            <span className="block">Transformasi Digital</span>
                            <span className="block text-blue-600">Dengan Empat Solusi Terbaik</span>
                        </h1>
                        <p className="text-gray-600 mt-2 text-lg">
                            Temukan informasi terkait <span className="font-semibold text-gray-800">Services Geoportal Inclusive District GIS</span> yang akan membantu Anda memahami lebih dalam.
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

                <div
                    className={`mb-6 text-center transition-all duration-1000 ease-out transform ${
                        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <p className="text-gray-700 text-lg font-medium">
                        <span className="text-blue-600 font-semibold">Empat Aplikasi Unggulan</span> kami yang bisa diakses <span className="text-green-600 font-semibold">kapan saja</span> dan di mana saja.
                    </p>

                    <hr className="w-32 border-t-2 border-gray-300 mx-auto mt-2" />
                </div>

                {/* Grid dengan 4 kolom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
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
                        <div
                        key={index}
                        className={`bg-white shadow-2xl rounded-2xl overflow-hidden transition-all duration-700 ease-out transform ${
                            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        } hover:scale-105 hover:shadow-2xl w-72`}
                    >
                        {/* Gambar */}
                        <figure className="w-full">
                            <img 
                                className="w-full h-40 object-cover rounded-t-2xl" 
                                src={p1} 
                                alt={card.title} 
                            />
                        </figure>
                    
                        {/* Konten */}
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-gray-800">{card.title}</h2>
                            <p className="text-gray-600 text-sm">{card.desc}</p>
                    
                            {/* Tombol Telusuri */}
                            <div className="mt-4 flex justify-end">
                                <a
                                    href={card.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block bg-blue-500 text-white px-5 py-2 rounded-lg transition duration-300 hover:bg-blue-600"
                                >
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
