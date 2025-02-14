import bgImageTentang from '../assets/img/bg-about.png';
import { FaSearch, FaPlus, FaEdit, FaUpload, FaArchive, FaCog, FaFileExport, FaCalculator } from "react-icons/fa";
import { motion } from 'framer-motion';

// Variants untuk animasi
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const About = () => {
    return (
        <section className="tentang-sitangkal">
            {/* Background Gradasi untuk Tentang */}
            <div className="relative w-full bg-gradient-to-br from-[#007F73]/10 to-[#4CCD99]/10 rounded-b-2xl overflow-hidden">
                <div className="container mx-auto py-12 px-6 text-gray-800 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <motion.div 
                            className="space-y-4"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <h1 className="text-3xl font-bold text-[#007F73]">
                                Tentang Inclusive District GIS
                            </h1>
                            <p className="text-base leading-relaxed text-gray-700">
                                Inclusive District GIS adalah platform manajemen aksesibilitas berbasis data geospasial.
                                Platform ini menggabungkan alat untuk pengumpulan data spasial, analisis aksesibilitas wilayah, 
                                perencanaan kota ramah Disabilitas dan Lansia, serta keterlibatan komunitas dalam menciptakan 
                                lingkungan yang inklusif dan berkelanjutan.
                            </p>
                        </motion.div>

                        {/* Bagian Gambar */}
                        <motion.div 
                            className="flex justify-center lg:justify-end"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <img className="w-full max-w-md rounded-xl shadow-md" src={bgImageTentang} alt="Tentang Inclusive District GIS" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Fitur Section dengan Background Lembut */}
            <div className="fitur flex flex-col justify-center items-center mt-12 mb-5">
                <span className="text-[#FFC700]/80 font-semibold my-3 text-lg">Fitur Utama</span>
                <h1 className="font-bold text-4xl text-[#007F73]/90">Fitur Canggih untuk Meningkatkan Alur Kerja</h1>
                <p className="py-2 w-9/12 text-center text-gray-600">
                    Jelajahi fitur canggih yang membantu membuat keputusan lebih cerdas, melacak kemajuan, dan mengelola dengan mudah. 
                    Tetap terorganisir dan terkendali dengan fitur yang dirancang untuk meningkatkan produktivitas.
                </p>
            </div>

            <div className="bg-[#FFF455]/10 py-10 rounded-2xl px-6 mx-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Pencarian Dilans", desc: "Berdasarkan spesies, lokasi, atau filter lanjutan seperti diameter, tanggal penanaman, atau karakteristik Dilans.", icon: <FaSearch size={40} /> },
                        { title: "Penambahan Dilans", desc: "Secara individu atau memuat dataset Dilans ke dalam sistem.", icon: <FaPlus size={40} /> },
                        { title: "Pengeditan dan Penambahan", desc: "Informasi tentang catatan Dilans yang ada, termasuk nama spesies, lokasi, tinggi, ukuran dan jenis plot.", icon: <FaEdit size={40} /> },
                        { title: "Unggah Foto Dilans", desc: "Unggah gambar Dilans yang dapat dilihat dan dipertahankan", icon: <FaUpload size={40} /> },
                        { title: "Inventaris", desc: "Membuat inventaris Anda publik atau privat sesuai keinginan", icon: <FaArchive size={40} /> },
                        { title: "Kustomisasi", desc: "Kustomisasi semua opsi pencarian geografis dan basis data, peta, aktivitas pengelolaan", icon: <FaCog size={40} /> },
                        { title: "Ekspor", desc: "Ekspor daftar Dilans sebagai file KML atau CSV", icon: <FaFileExport size={40} /> },
                        { title: "Perhitungan Otomatis", desc: "Perhitungan otomatis layanan ekosistem berdasarkan spesies dan diameter Dilans", icon: <FaCalculator size={40} /> },
                    ].map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="card border border-gray-200 bg-white shadow-md rounded-2xl p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <div className="card-body flex flex-col items-center text-center">
                                <div className="mb-3 text-[#4CCD99]/80">{item.icon}</div>
                                <h4 className="card-title text-xl font-bold text-[#FFC700]/70">{item.title}</h4>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
