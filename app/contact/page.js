import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const ContactPage = () => {
  return (
    <main className="bg-gradient-to-br from-purple-600 to-pink-500 min-h-screen flex items-center justify-center text-white px-4">
      <div className="bg-gray-900 bg-opacity-80 rounded-lg shadow-xl p-6 md:p-8 w-full max-w-lg space-y-4 max-sm:-mt-20">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-pink-300">Get in Touch</h2>
        <p className="text-gray-300 text-center text-sm">
          We&apos;re here to help! Fill out the form below or reach us on social media.
        </p>
        
        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Message</label>
            <textarea
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="3"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bold transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Quick Contact Option */}
        <div className="text-center space-y-4">
          <p className="text-gray-300 text-sm">You can also reach us by phone:</p>
          <a href="tel:+1234567890" className="text-pink-400 text-lg font-semibold hover:text-pink-500">
            +1 (234) 567-890
          </a>
          <p className="text-gray-300 text-sm">Or visit us on the map:</p>
          <a
            href="https://goo.gl/maps/xyz123"
            target="_blank"
            className="text-pink-400 text-lg font-semibold hover:text-pink-500"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook" className="text-gray-400 hover:text-pink-400 mb-4">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter" className="text-gray-400 hover:text-pink-400 mb-4">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="text-gray-400 hover:text-pink-400 mb-4">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com" target="_blank" aria-label="Github" className="text-gray-400 hover:text-pink-400 mb-4">
            <FaGithub size={24} />
          </a>
        </div>
        
        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-6">
          © {new Date().getFullYear()} BitLinks. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default ContactPage;
