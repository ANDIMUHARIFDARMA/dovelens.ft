import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import companyLogo from "../assets/images/hiro/LOGO4.png"; // Sesuaikan path dengan logo kamu

export default function Footer2() {
  return (
    <><section id="contact" className="bg-[#0F172A] text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Deskripsi */}
        <div>
          <img src={companyLogo} alt="Company Logo" className="h-10 mb-4" />
          <p className="text-sm">Mengabadikan Momen, Menciptakan Cerita.</p>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-white font-semibold mb-3">Kontak</h4>
          <ul className="text-sm space-y-1">
            <li>Email: <a href="mailto:info@company.com" className="hover:text-white underline">dovelens.ft@gmail.com</a></li>
            <li>Telepon: <a href="tel:+622112345678" className="hover:text-white">081382670872</a></li>
          </ul>
        </div>
        {/* Tautan Penting */}
        <div>
          <h4 className="text-white font-semibold mb-3">Tautan Penting</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#about" className="hover:text-white underline">Tentang Kami</a></li>
            <li><a href="#layanan" className="hover:text-white underline">Layanan</a></li>
            <li><a href="#portofolio" className="hover:text-white underline">Portofolio</a></li>
            <li><a href="#team" className="hover:text-white underline">Tim Kami</a></li>
          </ul>
        </div>

        {/* Ikuti Kami */}
        <div>
          <h4 className="text-white font-semibold mb-3">Ikuti Kami</h4>
        <div className="flex gap-4 text-xl text-gray-400">
          <a href="https://www.instagram.com/dovelens.ft?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" rel="noopener noreferrer">
            <FaInstagram className="hover:text-white" />
          </a>
        </div>
      </div>
    </div>
    <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
        © 2025 dovelens.ft Hak Cipta Dilindungi.
    </div>
    </section>
    </>
  );
}