import bgImageTentang from '../assets/img/bg-about.png';
import { FaSearch, FaPlus, FaEdit, FaUpload, FaArchive, FaCog, FaFileExport, FaCalculator } from "react-icons/fa";


const About = () => {
    return (
        <section className="tentang-sitangkal mt-5 mb-5 px-5">
            <div className="container mx-auto my-5">
            <div className="container mx-auto my-10 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <span className="px-4 py-1 text-sm font-semibold border rounded-full text-gray-700 border-gray-400">
                            Portal
                        </span>
                        <h1 className="text-4xl font-extrabold text-gray-800 leading-snug">
                            Tentang Inclusive District GIS
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Inclusive District GIS adalah platform manajemen aksesibilitas berbasis data geospasial.
                            Platform ini menggabungkan alat untuk pengumpulan data spasial, analisis aksesibilitas wilayah, 
                            perencanaan kota ramah Disabilitas dan Lansia, serta keterlibatan komunitas dalam menciptakan 
                            lingkungan yang inklusif dan berkelanjutan.
                        </p>
                    </div>

                    {/* Bagian Gambar */}
                    <div className="flex justify-center lg:justify-end">
                        <img className="w-full max-w-lg rounded-2xl " src={bgImageTentang} alt="Tentang Inclusive District GIS" />
                    </div>
                </div>
            </div>

            <div className="fitur flex flex-col justify-center items-center mt-5 mb-5 ">
                    <span className="badge badge-outline badge-neutral my-3 mb-3">Fitur Utama</span>
                    <h1 className="font-bold text-4xl">Fitur Canggih untuk Meningkatkan Alur Kerja</h1>
                    <p className="py-2 w-9/12 text-center text-">
                        Jelajahi fitur canggih yang membantu membuat keputusan lebih cerdas, melacak kemajuan, dan mengelola dengan mudah. Tetap
                        terorganisir dan terkendali dengan fitur yang dirancang untuk meningkatkan produktivitas
                    </p>
            </div>
            <div className="px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-1">
                    {[
                        { title: "Pencarian Dilans", desc: "Berdasarkan spesies, lokasi, atau filter lanjutan seperti diameter, tanggal penanaman, atau karakteristik Dilans.", icon: <FaSearch size={40} /> },
                        { title: "Penambahan Dilans", desc: "Secara individu atau memuat dataset Dilans ke dalam sistem.", icon: <FaPlus size={40} /> },
                        { title: "Pengeditan dan penambahan", desc: "Informasi tentang catatan Dilans yang ada, termasuk nama spesies, lokasi, tinggi, ukuran dan jenis plot.", icon: <FaEdit size={40} /> },
                        { title: "Unggah foto Dilans", desc: "Unggah gambar Dilans yang dapat dilihat dan dipertahankan", icon: <FaUpload size={40} /> },
                        { title: "Inventaris", desc: "Membuat inventaris Anda publik atau privat sesuai keinginan", icon: <FaArchive size={40} /> },
                        { title: "Kustomisasi", desc: "Kustomisasi semua opsi pencarian geografis dan basis data, peta, aktivitas pengelolaan", icon: <FaCog size={40} /> },
                        { title: "Ekspor", desc: "Ekspor daftar Dilans sebagai file KML atau CSV", icon: <FaFileExport size={40} /> },
                        { title: "Perhitungan Otomatis", desc: "Perhitungan otomatis layanan ekosistem berdasarkan spesies dan diameter Dilans", icon: <FaCalculator size={40} /> },
                    ].map((item, index) => (
                        <div key={index} className="card card-border border-neutral-300 bg-base-100 w-auto p-4 shadow-md rounded-xl">
                            <div className="card-body flex flex-col items-center text-center">
                                <div className="mb-2 text-blue-600">{item.icon}</div>
                                <h4 className="card-title text-lg font-semibold">{item.title}</h4>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
};

export default About;
