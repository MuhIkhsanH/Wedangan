// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-amber-100 text-red-800 py-6 mt-16 border-t border-red-300 shadow-inner text-center" data-aos="fade-up">
      <p className="text-lg font-semibold" data-aos="fade-up" data-aos-delay="100">☕ Wedangan Mas Ipung</p>
      <p className="text-sm" data-aos="fade-up" data-aos-delay="200">&copy; {new Date().getFullYear()} Semua hak dilestarikan 🍂</p>
      <p className="text-xs text-red-600" data-aos="fade-up" data-aos-delay="300">"Nongkrong hangat, rasa nikmat"</p>
    </footer>
  )
}
