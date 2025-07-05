// src/app/lokasi/page.jsx
"use client"

export default function LokasiPage() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg" data-aos="fade-up">
      <h1 className="text-2xl font-bold text-red-800 mb-4" data-aos="fade-down">📍 Lokasi Kami</h1>
      <p className="text-lg text-gray-700 mb-2" data-aos="fade-up" data-aos-delay="100">
        Wedangan Mas Ipung berlokasi di:
      </p>
      <p className="text-lg text-gray-900 font-semibold" data-aos="fade-up" data-aos-delay="200">
        Jl. Lempuyang No. 37, Laweyan, Kota Solo, Jawa Tengah
      </p>
      <p className="mt-4 text-gray-600" data-aos="fade-up" data-aos-delay="300">
        Buka setiap hari dari jam <span className="font-medium">16.00</span> sampai <span className="font-medium">00.00 WIB</span>.
      </p>
      <div className="mt-6" data-aos="fade-up" data-aos-delay="400">
        <iframe
          className="w-full h-64 rounded-md shadow"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.446678504881!2d110.82690101530924!3d-7.547956775708887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a169ffdd5ce91%3A0xfcd918b86e0a26a7!2sWedangan%20Mas%20Ipung!5e0!3m2!1sid!2sid!4v1720165200000!5m2!1sid!2sid"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  )
}
