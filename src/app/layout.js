import './globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOSWrapper from '../components/AOSWrapper';

export const metadata = {
  title: 'Wedangan Mas Ipung',
  description: 'Nongkrong hangat, rasa nikmat',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen">
        <AOSWrapper>
          <Navbar />
          <main className="flex-grow p-4">{children}</main>
          <Footer />
        </AOSWrapper>
      </body>
    </html>
  );
}
