import bgImageTentang from '../assets/img/bg-login.jpg';

const About = () => {
    return (
        <section className="tentang-sitangkal mt-5 mb-5 px-5">
            <div className="container mx-auto my-5">
                <div className="judul-tentang grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5 py-5 mt-5 mb-5">
                    <div className="judul py-4">
                        <span className="badge badge-outline badge-neutral">Portal</span>
                        <h1 className="text-4xl font-bold py-5">Tentang Inclusive Distict GIS</h1>
                    </div>
                    <div className="gambar">
                        <img className="w-auto rounded-xl" src={bgImageTentang} alt="gambar" />
                    </div>
                    <div className="deskripsi lg:flex items-center">
                        <p className="">
                            Platform manajemen aset Ruang Terbuka Hijau dan Pepohonan (Tangkal - Bahasa Sunda) berbasis data geospasial di Kota
                            Cimahi, yang menggabungkan serangkaian alat untuk pengumpulan data, perhitungan layanan ekosistem, analisis kehutanan
                            perkotaan, dan keterlibatan komunitas.
                        </p>
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
                <div className='px-6'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-1">
                    <div className="card card-border border-neutral-300 bg-base-100 w-auto">
                        <div className="card-body">
                            <h4 className="card-title">Pencarian Pohon</h4>
                            <p>Berdasarkan spesies, lokasi, atau filter lanjutan seperti diameter, tanggal penanaman, atau karakteristik pohon.</p>
                        </div>
                    </div>
                    <div className="card card-border border-neutral-300 bg-base-100 w-auto">
                        <div className="card-body">
                            <h4 className="card-title">Penambahan Pohon</h4>
                            <p>Secara individu atau memuat dataset pohon ke dalam sistem.</p>
                        </div>
                    </div>

                    <div className="card card-border border-neutral-300 bg-base-100 w-auto">
                        <div className="card-body">
                            <h4 className="card-title">Pengeditan dan penambahan</h4>
                            <p>Informasi tentang catatan pohon yang ada, termasuk nama spesies, lokasi, tinggi, ukuran dan jenis plot.</p>
                        </div>
                    </div>
                    <div className="card card-border border-neutral-300 bg-base-100 w-auto">
                        <div className="card-body">
                            <h4 className="card-title">Unggah foto pohon</h4>
                            <p>Unggah gambar pohon yang dapat dilihat dan dipertahankan</p>
                        </div>
                    </div>
                    <div className="card card-border border-neutral-300 bg-base-100 w-auto">
                        <div className="card-body">
                            <h4 className="card-title">Inventaris</h4>
                            <p>Membuat inventaris Anda publik atau privat sesuai keinginan</p>
                        </div>
                    </div>
                    <div className="card card-border border-neutral-300 bg-base-100 w-auto">
                        <div className="card-body">
                            <h4 className="card-title">Kustomisasi</h4>
                            <p>Kustomisasi semua opsi pencarian geografis dan basis data, peta, aktivitas pengelolaan</p>
                        </div>
                    </div>
                    <div className="card card-border border-neutral-300 bg-base-100 w-auto">
                        <div className="card-body">
                            <h4 className="card-title">Ekspor</h4>
                            <p>Ekspor daftar pohon sebagai file KML atau CSV</p>
                        </div>
                    </div>
                    <div className="card card-border border-neutral-300 bg-base-100 w-auto">
                        <div className="card-body">
                            <h4 className="card-title">Perhitungan Otomatis</h4>
                            <p>Perhitungan otomatis layanan ekosistem berdasarkan spesies dan diameter pohon</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;
