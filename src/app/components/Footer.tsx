// app/components/Footer.tsx

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white text-center py-8 px-5">
        <div className="max-w-7xl mx-auto space-y-6 flex">
          {/* Address Section */}
          <div className="w-1/3">
            <h3 className="text-xl font-semibold">Our Address</h3>
            <p className="text-lg mt-2">
              No.156, 27th Cross <br />
              6th Block Jayanagar <br />
              Bangalore-560070
            </p>
          </div>

          <div className="mt-6 space-y-2 w-1/3">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="text-lg">
              Phone: <a href="tel:99013 07850" className="text-blue-400">99013 07850</a>
            </p>
            <p className="text-lg">
              Email: <a href="mailto:instasquares@gmail.com" className="text-blue-400">instasquares@gmail.com</a>
            </p>
          </div>
  
          {/* Google Maps Location */}
          <div className="mt-6 w-1/3">
            <h3 className="text-xl font-semibold">Find Us On Google Maps</h3>
            <a
              href="www.google.co.in/maps/place/InstaSquare/@12.931077,77.578815,15z/data=!4m6!3m5!1s0x3bae159a22df6a33:0x31eb07bafafd6199!8m2!3d12.931077!4d77.578815!16s%2Fg%2F1ptvrx6fw?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
              className="w-full h-60 mt-2 border-none"
            >Google maps link : https://g.co/kgs/LGGFRfG</a>
          </div>
          
        </div>
        <div className="mt-8">
            <p>&copy; 2024 InstaSquares. All Rights Reserved.</p>
          </div>
      </footer>
    )
  }
  
  export default Footer
  