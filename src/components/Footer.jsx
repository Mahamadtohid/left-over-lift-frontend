import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-500 text-white pt-12 pb-8 px-6 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h1 className="text-3xl font-extrabold mb-2">
            Lift<span className="text-orange-300">Over</span>Left
          </h1>
          <p className="text-sm text-white/90">
            Rescuing food. Feeding hope. Join the movement to reduce food waste across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-orange-200 transition">Home</a></li>
            <li><a href="/about" className="hover:text-orange-200 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-orange-200 transition">Contact</a></li>
            <li><a href="/faq" className="hover:text-orange-200 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Connect with Us</h2>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a href="#" className="hover:text-orange-300 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-300 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-orange-300 transition"><FaTwitter /></a>
            <a href="mailto:info@liftoverleft.com" className="hover:text-orange-300 transition"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
        © {new Date().getFullYear()} LiftOverLeft. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
