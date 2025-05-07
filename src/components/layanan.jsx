import React from 'react';
import image1 from '../assets/images/layanan/4.png';
import image2 from '../assets/images/layanan/5.png';
import image3 from '../assets/images/layanan/6.png';
import imagehero from "../assets/images/hiro/dove2.png";

const products = [
  {
    category: "Graduation photoshoot",
    title: "Abadikan momen wisuda Anda",
    description: "Paket pas banget yang mau wisuda",
    price: "Mulai dari Rp 350.000",
    image: image1,
    packageName: "Graduation fotoshoot",
  },
  {
    category: "Product photoshoot",
    title: "Abadikan produk Anda agar Lebih Profesional",
    description: "Paket pas banget yang mau mempromosikan produk",
    price: "Mulai dari Rp 150.000",
    image: image2,
    packageName: "Product fotoshoot",
  },
  {
    category: "Event photoshoot",
    title: "Abadikan momen penting di kegiatan Anda",
    description: "Paket pas banget yang mau mengabadikan momen penting",
    price: "Mulai dari Rp 500.000",
    image: image3,
    packageName: "Graduation fotoshoot",
  },
];

export default function Layanan() {
  const whatsappNumber = "081382670872";

  const generateWhatsAppLink = (productName) => {
    const message = `Halo dovers sebelum chat ke mimin perkenalkan dirikamu ya! \nnama :\nalamat :\nno handphone :\nIngin membicarakan mengenai ${productName}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/62${whatsappNumber.slice(1)}?text=${encodedMessage}`;
  };

  return (
    <section id="layanan" className="py-10 px-4 sm:px-6 lg:px-8" style={{
      backgroundImage: `url(${imagehero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here
        zIndex: 0,
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="text-3xl font-bold text-center text-white mb-10">Paket untuk Dovers</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500">{product.category}</p>
                <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="text-sm text-blue-700 font-medium mb-4">{product.price}</p>
                <a
                  href={generateWhatsAppLink(product.packageName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center  text-[#1f1e1c] py-2 rounded-md hover:text-white hover:bg-[#1f1e1c] transition"
                >
                  Chat admin
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
