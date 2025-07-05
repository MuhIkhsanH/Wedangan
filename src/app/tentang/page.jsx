// src/app/tentang/page.jsx
"use client"

export default function TentangPage() {
  return (
    <div className="max-w-3xl mx-auto mt-16 px-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-red-800" data-aos="fade-down">Tentang Wedangan Mas Ipung</h1>
      <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
        Wedangan Mas Ipung adalah tempat nongkrong santai dengan suasana khas Jawa,
        menyajikan aneka wedang tradisional seperti Teh, Teh anget, Kopi, Gorengan, dan beberapa nasi lainnya.
      </p>
      <p className="mt-4 text-base" data-aos="fade-up" data-aos-delay="200">
        Kami buka setiap hari dari pukul <strong>16.00 - 00.00</strong>.<br />
        Lokasi strategis, dan harga bersahabat.
      </p>
    </div>
  )
}
