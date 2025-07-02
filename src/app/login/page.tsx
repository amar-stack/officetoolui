'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Head from 'next/head';

const bannerImages = [
  '/floor-plan.png',
];
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
          <Image
            src={bannerImages[currentImage]}
            alt={`Banner ${currentImage + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-opacity duration-1000"
            priority
          />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className="relative z-10 text-center px-4 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Flexible Workspace in Bangalore</h1>
            <p className="text-lg md:text-xl mb-6">Book a private office, meeting room, or retail cubical</p>
            <Link href="/" className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
              Book a Visit
            </Link>
          </div>
        </section>

      {/* Workspace Options */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Workspaces</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <Image src="/isq-jnr.webp" alt="ISQ-JNR workspace" width={800} height={500} className="rounded-lg mb-4" />
            

            <h3 className="text-xl font-semibold mb-2">ISQ-JNR</h3>
            <p className="mb-4">Jayanagar location with private cabins and retail cubicles.</p>
            <Link href="/" className="text-blue-600 hover:underline">Explore ISQ-JNR</Link>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <Image src="/isq-pdm.jpeg" alt="ISQ-PDM workspace" width={800} height={500} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">ISQ-PDM</h3>
            <p className="mb-4">Padmanabhanagar workspace with modern amenities and flexible rooms.</p>
            <Link href="/workspace/isq-pdm" className="text-blue-600 hover:underline">Explore ISQ-PDM</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Visit Us Today</h2>
            <p className="mb-6">#156, 27th Cross, 350 meters from Jayanagar Metro Station, 6th Block Jayanagar, Bangalore-560070</p>
            <div className="space-y-2">
              <a href="tel:+919901307850" className="block text-black underline">Call: +91 99013 07850</a>
              <a href="mailto:hello@instasquares.in" className="block text-black underline">Email: hello@instasquares.in</a>
              <a
                href="https://www.google.com/maps/place/InstaSquares+Coworking+Space/@12.926007,77.5832102,18z/data=!4m6!3m5!1s0x3bae1592e7609c31:0xc0ef6885f183baf6!8m2!3d12.9260071!4d77.5832102!16s%2Fg%2F11r_8_zjkq?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 underline mt-4"
              >
                Get Directions on Google Maps
              </a>
            </div>
          </div>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.545486142173!2d77.578815!3d12.931077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159a22df6a33%3A0x31eb07bafafd6199!2sInstaSquare!5e0!3m2!1sen!2sin!4v1751283051903!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
          
          </div>
        </div>
      </section>
      {/* WhatsApp Floating Icon */}
      <a
          href="https://wa.me/919901307850"
          className="fixed bottom-6 right-6 z-50"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" id="whatsapp">
            <rect width="48" height="48" fill="#0DC143" rx="24"></rect>
            <path fill="#fff" d="M34.7507 13.2115C32.1777 10.5628 28.621 9.125 24.9885 9.125C17.2696 9.125 11.0642 15.4061 11.1399 23.0493C11.1399 25.4709 11.821 27.8169 12.9561 29.9358L10.9885 37.125L18.3291 35.2331C20.3723 36.3682 22.6426 36.898 24.9128 36.898C32.5561 36.898 38.7615 30.6169 38.7615 22.9736C38.7615 19.2655 37.3237 15.7845 34.7507 13.2115ZM24.9885 34.552C22.9453 34.552 20.902 34.0223 19.1615 32.9628L18.7074 32.7358L14.3183 33.8709L15.4534 29.5574L15.1507 29.1034C11.821 23.7304 13.4101 16.6169 18.8588 13.2872C24.3074 9.95743 31.3453 11.5466 34.675 16.9953C38.0047 22.4439 36.4156 29.4818 30.9669 32.8115C29.2264 33.9466 27.1074 34.552 24.9885 34.552ZM31.648 26.152L30.8156 25.7736C30.8156 25.7736 29.6047 25.2439 28.848 24.8655C28.7723 24.8655 28.6966 24.7899 28.621 24.7899C28.3939 24.7899 28.2426 24.8655 28.0912 24.9412C28.0912 24.9412 28.0156 25.0169 26.9561 26.2277C26.8804 26.3791 26.7291 26.4547 26.5777 26.4547H26.502C26.4264 26.4547 26.275 26.3791 26.1993 26.3034L25.821 26.152C24.9885 25.7736 24.2318 25.3196 23.6264 24.7142C23.475 24.5628 23.248 24.4115 23.0966 24.2601C22.5669 23.7304 22.0372 23.125 21.6588 22.4439L21.5831 22.2926C21.5074 22.2169 21.5074 22.1412 21.4318 21.9899C21.4318 21.8385 21.4318 21.6872 21.5074 21.6115C21.5074 21.6115 21.8101 21.2331 22.0372 21.0061C22.1885 20.8547 22.2642 20.6277 22.4156 20.4764C22.5669 20.2493 22.6426 19.9466 22.5669 19.7196C22.4912 19.3412 21.5831 17.298 21.3561 16.8439C21.2047 16.6169 21.0534 16.5412 20.8264 16.4655H20.5993C20.448 16.4655 20.221 16.4655 19.9939 16.4655C19.8426 16.4655 19.6912 16.5412 19.5399 16.5412L19.4642 16.6169C19.3128 16.6926 19.1615 16.8439 19.0101 16.9196C18.8588 17.0709 18.7831 17.2223 18.6318 17.3736C18.102 18.0547 17.7993 18.8872 17.7993 19.7196C17.7993 20.325 17.9507 20.9304 18.1777 21.4601L18.2534 21.6872C18.9345 23.125 19.8426 24.4115 21.0534 25.5466L21.3561 25.8493C21.5831 26.0764 21.8101 26.2277 21.9615 26.4547C23.5507 27.8169 25.3669 28.8007 27.4101 29.3304C27.6372 29.4061 27.9399 29.4061 28.1669 29.4818C28.3939 29.4818 28.6966 29.4818 28.9237 29.4818C29.302 29.4818 29.7561 29.3304 30.0588 29.1791C30.2858 29.0277 30.4372 29.0277 30.5885 28.8764L30.7399 28.725C30.8912 28.5736 31.0426 28.498 31.1939 28.3466C31.3453 28.1953 31.4966 28.0439 31.5723 27.8926C31.7237 27.5899 31.7993 27.2115 31.875 26.8331C31.875 26.6818 31.875 26.4547 31.875 26.3034C31.875 26.3034 31.7993 26.2277 31.648 26.152Z"></path>
          </svg>
        </a>
    </main>
  );
}
