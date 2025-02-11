import bgImage from '../assets/img/bg-2.jpg';
const Hero = () => {
    return (
        <div
            className="hero bg-base-200 min-h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            {/* <div class="hero-overlay"></div> */}
            <div className="hero-content text-center w-screen">
                <div className="max-w-screen">
                    <h1 className="text-6xl font-bold text-white">Inclusive  Distict GIS</h1>
                    <p className="py-4 text-xl md:text-2xl text-white">
                        Sistem Informasi Geospasial Sumur Bandung untuk Pengelolaan Data dan Perencanaan
                    </p>
                    <button className="btn btn-neutral px-6 py-2 rounded-lg transition duration-300 hover:bg-blue-800 ">Telusuri</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
