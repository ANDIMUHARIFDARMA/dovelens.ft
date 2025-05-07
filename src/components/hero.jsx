import React, { useState, useEffect } from 'react';
import utamaImage from '../assets/images/hiro/utama.JPG';
import secondImage from '../assets/images/hiro/1.jpg';
import thirdImage from '../assets/images/hiro/2.JPG';

export default function Hero1() {
    const images = [utamaImage, secondImage, thirdImage];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Ganti gambar setiap 5 detik
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section
            className="relative bg-cover bg-center h-150"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
            {/* Overlay untuk meredupkan gambar */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6 md:px-12 lg:px-20">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    Setiap momen pasti <br/> Tersirat makna
                </h1>
                <p className="text-white text-lg md:text-xl lg:text-2xl mb-6">
                     Mengabadikan Momen, Menciptakan Cerita.
                </p>
                
            </div>
        </section>
    );
}
