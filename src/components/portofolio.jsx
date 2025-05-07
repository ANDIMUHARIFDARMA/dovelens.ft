import React, { useState } from 'react';
import img1 from '../assets/images/album/1.png';
import img2 from '../assets/images/album/2.png';
import img3 from '../assets/images/album/3.png';
import img4 from '../assets/images/album/4.png';
import img5 from '../assets/images/album/5.png';
import img6 from '../assets/images/album/6.png';
import img7 from '../assets/images/album/7.png';
import img8 from '../assets/images/album/8.png';
import img9 from '../assets/images/album/9.jpeg';
import img10 from '../assets/images/album/10.jpeg';
import img11 from '../assets/images/album/11.jpg';
import img12 from '../assets/images/album/12.jpg';

const photos = [
    { title: 'Melintasi Jembatan Merah', date: '26 Februari 2025', image: img1, description: 'Seorang fotografer wanita berjalan di atas jembatan merah klasik yang dikelilingi oleh dedaunan hijau. Dengan kamera di tangan dan ransel di punggung, ia tampak menikmati eksplorasi alam sekitar, menciptakan suasana petualangan dan ketenangan.' },
    { title: 'Mata-mata di Balik Tirai', date: '27 Februari 2025', image: img2, description: 'Foto hitam putih yang dramatis menampilkan seorang pria mengintip melalui celah tirai. Cahaya yang masuk menciptakan siluet halus di wajahnya, memberikan kesan misterius dan penuh cerita.' },
    { title: 'Menelusuri Gerbang Torii', date: '28 Februari 2025', image: img3, description: 'Seorang pria berdiri di jalur yang dikelilingi oleh barisan gerbang torii merah, ikon budaya Jepang. Perspektif lorong yang dalam menciptakan suasana ketenangan dan refleksi diri.' },
    { title: 'Kelezatan Klasik: Kue Bunga Mawar', date: '4 Maret 2025', image: img4, description: 'Kue kering berbentuk bunga mawar yang renyah dan menggoda. Lapisan adonan yang mengembang indah menunjukkan keahlian pembuatnya, menghadirkan camilan tradisional yang kaya rasa.' },
    { title: 'Pempek Komplit: Paduan Gurih dan Segar', date: '5 Maret 2025', image: img5, description: 'Hidangan khas Indonesia yang terdiri dari gorengan, kerupuk, potongan ketimun, dan saus cuko. Kombinasi rasa gurih dan segar menciptakan pengalaman makan yang memuaskan.' },
    { title: 'Panggung Tradisi dan Gaya', date: '6 Maret 2025', image: img6, description: 'Seorang penyanyi pria dengan jubah motif cerah dan topi putih tampil di atas panggung, diiringi oleh penyanyi wanita berpakaian tradisional. Atmosfer panggung menyatu antara modern dan budaya lokal, menciptakan suasana meriah yang memikat penonton.' },
    { title: 'Energi Panggung dan Sorak Sorai', date: '18 Maret 2025', image: img7, description: 'Dalam sebuah acara yang penuh semangat, dua penyanyi memimpin penonton yang antusias. Tangan-tangan diangkat, sorak sorai terdengar, dan kamera beraksi menangkap momen. Sebuah perpaduan harmoni antara seni pertunjukan dan energi audiens.' },
    { title: 'Pasangan di Galeri Jalanan', date: '19 Maret 2025', image: img8, description: 'Sepasang muda-mudi sedang menikmati deretan lukisan yang dipajang di dinding jalan. Sentuhan nuansa lokal dan ketertarikan pada seni terlihat dari cara mereka berdiskusi, menciptakan adegan yang penuh kehangatan dan rasa ingin tahu.' },
    { title: 'Cantiknya Anyaman Dekoratif', date: '20 Maret 2025', image: img9, description: 'Dua tas anyaman dengan lukisan tangan satu dihiasi bunga mawar dan kupu-kupu, yang lainnya bergambar burung tropis terpajang di bawah sinar matahari. Karya seni tangan ini mencerminkan keindahan kerajinan tradisional yang tetap relevan dan estetik.' },
    { title: 'Pantai Cianjur', date: '1 April 2025', image: img10, description: 'Pantai indah di Cianjur dengan pasir putih dan ombak yang tenang. Tempat yang sempurna untuk bersantai dan menikmati keindahan alam.' },
    { title: 'BMW JL.ABC', date: '2 April 2025', image: img11, description: 'Pemandangan jalan ABC dengan sebuah mobil BMW yang elegan. Kombinasi arsitektur urban dan kendaraan modern menciptakan suasana yang dinamis.' },
    { title: 'Gunung Puntang', date: '3 April 2025', image: img12, description: 'Keindahan alam Gunung Puntang yang memukau dengan udara segar dan pemandangan hijau. Tempat ini cocok untuk pecinta alam dan pendaki.' },
];

export default function PhotoGallery() {
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleCount, setVisibleCount] = useState(4);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const uniqueDates = [...new Set(photos.map(photo => photo.date))];

    const filteredPhotos = photos.filter(photo => {
        const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDate = selectedDate ? photo.date === selectedDate : true;
        return matchesSearch && matchesDate;
    });

    const handleLoadMore = () => {
        setVisibleCount(filteredPhotos.length);
    };

    const handleShowLess = () => {
        setVisibleCount(4);
    };

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
    };

    const closeModal = () => {
        setSelectedPhoto(null);
    };

    return (
        <section id="portofolio" className="px-4 py-16 max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900">Portofolio</h2>
            <p className="mt-2 text-gray-600">Berikut koleksi portofolio kami</p>

            <div className="mt-6 flex flex-wrap gap-4 items-center">
                <input
                    type="text"
                    placeholder="Cari foto..."
                    className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <select
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                >
                    <option value="">Semua Tanggal</option>
                    {uniqueDates.map((date, index) => (
                        <option key={index} value={date}>
                            {date}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredPhotos.slice(0, visibleCount).map((photo, index) => (
                    <div
                        key={index}
                        className="rounded-lg overflow-hidden shadow bg-white cursor-pointer"
                        onClick={() => handlePhotoClick(photo)}
                    >
                        <img src={photo.image} alt={photo.title} className="w-full h-56 object-cover" />
                        <div className="p-4">
                            <h3 className="text-gray-900 font-medium">{photo.title}</h3>
                            <p className="text-sm text-gray-500">{photo.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 text-center">
                {visibleCount < filteredPhotos.length ? (
                    <button
                        onClick={handleLoadMore}
                        className="px-6 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200"
                    >
                        Muat Lebih Banyak
                    </button>
                ) : (
                    <button
                        onClick={handleShowLess}
                        className="px-6 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200"
                    >
                        Tampilkan Lebih Sedikit
                    </button>
                )}
            </div>

            {selectedPhoto && (
                <div className="fixed inset-0 bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <img src={selectedPhoto.image} alt={selectedPhoto.title} className="w-full h-64 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-900">{selectedPhoto.title}</h3>
                            <p className="text-sm text-gray-500">{selectedPhoto.date}</p>
                            <p className="mt-2 text-gray-700">{selectedPhoto.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
