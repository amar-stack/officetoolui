import React from 'react';
import Head from 'next/head';

export default function ReachUs() {
  return (
    <>
      <Head>
        <title>Reach Us - InstaSquares</title>
      </Head>
      <main className="min-h-screen py-12 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Reach Us</h1>
        <p className="mb-6">#156, 27th Cross, 6th Block Jayanagar, Bangalore-560070 <br/>
            <span className='font-bold'>less than 100 meters from Jayanagar Metro Station</span></p>
        <p className="mb-2">📞 <a href="tel:+919901307850" className="text-blue-600 underline">+91 99013 07850</a></p>
        <p className="mb-2">📧 <a href="mailto:mail@instasquares.in" className="text-blue-600 underline">hello@instasquares.in</a></p>
        <p className="mb-4">
          📍 <a href="https://maps.app.goo.gl/oT6HjkFbqNKGyWda8" target="_blank" rel="noreferrer" className="text-blue-600 underline">
            View on Google Maps
          </a>
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.545486142173!2d77.578815!3d12.931077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159a22df6a33%3A0x31eb07bafafd6199!2sInstaSquare!5e0!3m2!1sen!2sin!4v1751283051903!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
      </main>
    </>
  );
}