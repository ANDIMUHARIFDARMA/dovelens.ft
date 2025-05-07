import React from "react";

import satu from "../assets/images/mitra/1.png";
import dua from "../assets/images/mitra/2.png";
import tiga from "../assets/images/mitra/3.png";
import empat from "../assets/images/mitra/4.png";


const partners = [
  {name:"Telkom", logo:satu},
  {name:"Umkm", logo:dua},
  {name:"Kolab", logo:tiga},
  {name:"Sorgum", logo:empat},

];

const whatsappNumber = "081382670872";

const generateWhatsAppLink = () => {
  const message = `Haloo min aku tertarik nih untuk kolaborasi, sebelumnya aku perkenalkan diri!!\nnama :\nalamat :\nno handphone :\nIngin membicarakan mengenai ( paket yang di pilih contoh : Paket graduate)`;
  return `https://wa.me/62${whatsappNumber.slice(1)}?text=${encodeURIComponent(message)}`;
};

export default function PartnersSection() {
return (
    <div className="bg-white py-16 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Mitra yang telah berkerja sama dengan kamu</h2>
        <p className="text-gray-600 mb-10">
            Berkolaborasi untuk memberikan layanan terbaik
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mb-12">
            {partners.map((partner, index) => (
                <div
                    key={index}
                    className="w-full h-48 flex items-center justify-center  rounded-xl p-4 hover:shadow transition"
                >
                    <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-60 object-contain grayscale hover:grayscale-0 transition duration-300"
                    />
                </div>
            ))}
        </div>

        <div className="py-10 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tertarik untuk bermitra dengan kami?</h3>
            <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:text-white hover:bg-[#1f1e1c] text-[#1f1e1c] px-6 py-2 rounded-md transition"
            >
                Mulai Kolaborasi
            </a>
        </div>
    </div>
);
}