// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          {/* Address Section */}
          <div>
          <h3 className="text-xl font-semibold">Our Address</h3>
            <p className="text-lg mt-2">
              No.156, 27th Cross <br />
              350 meters from Jayanagar Metro Station <br />
              6th Block Jayanagar <br />
              Bangalore-560070
            </p>
          </div>

          {/* Contact Section */}
          <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="text-lg">
              Phone: <a href="tel:99013 07850" className="text-blue-400">+91-99013 07850</a>
            </p>
            <p className="text-lg">
              Email: <a href="mailto:instasquares@gmail.com" className="text-blue-400">instasquares@gmail.com</a>
            </p>
          </div>

          {/* Google Map Section */}
          <div>
            <h3 className="text-xl font-semibold">Find Us on Google Maps</h3>
            <a
              href="https://www.google.co.in/maps/place/InstaSquare/@12.931077,77.578815,15z/data=!4m6!3m5!1s0x3bae159a22df6a33:0x31eb07bafafd6199!8m2!3d12.931077!4d77.578815!16s%2Fg%2F1ptvrx6fw?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View on Map
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
            <p>&copy; 2024 InstaSquares. All Rights Reserved.</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;

  