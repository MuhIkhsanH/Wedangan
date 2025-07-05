// src/app/page.js
import wedangan1 from '../assets/wedangan.PNG'
import wedangan2 from '../assets/wedangan2.PNG'
import wedangan3 from '../assets/wedangan3.PNG'

export default function HomePage() {
  return (
    <div className="text-center mt-10 text-red-800">
      <div className="text-4xl sm:text-5xl font-bold mb-12" data-aos="fade-down">
        Selamat Datang di Wedangan Mas Ipung ☕
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
          <img src={wedangan1.src} alt="Tampilan Menu" className="rounded-2xl shadow-2xl" />
          <div className="text-lg font-semibold">📋 Tampilan Menu</div>
        </div>
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          <img src={wedangan2.src} alt="Tampilan Malam" className="rounded-2xl shadow-2xl" />
          <div className="text-lg font-semibold">🌙 Suasana Malam</div>
        </div>
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
          <img src={wedangan3.src} alt="Tampilan Pagi" className="rounded-2xl shadow-2xl" />
          <div className="text-lg font-semibold">🌤️ Suasana Pagi</div>
        </div>
      </div>
    </div>
  )
}
