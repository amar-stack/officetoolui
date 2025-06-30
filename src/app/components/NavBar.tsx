'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setWorkspaceOpen(false);
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-black">
        <Link href="/"><Logo /></Link>
          
        </div>

        {/* Hamburger (mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)} className="focus:outline-none">
            <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8 text-black font-medium">
          <Link href="/">Home</Link>
          <div className="group relative">
            <span className="cursor-pointer">Workspace ▾</span>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2">
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">ISQ-JNR</Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">ISQ-PDM</Link>
            </div>
          </div>
          <div className="group relative">
            <span className="cursor-pointer">Solutions ▾</span>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2">
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Private Office</Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Private Cabin</Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Meeting Room</Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Retail Cubical</Link>
            </div>
          </div>
          <Link href="/login">Login</Link>
          <Link href="/reachus">Reach Us</Link>
          <Link href="/bookavisit">Book A Visit</Link>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 w-72 bg-white shadow-lg h-full z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        ref={menuRef}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <div className="text-xl font-semibold">Menu</div>
          <button onClick={() => setMenuOpen(false)} className="text-3xl font-bold">×</button>
        </div>

        <div className="px-4 pt-6 flex flex-col text-black space-y-3 text-base font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="py-2">Home</Link>

          {/* Workspace Dropdown */}
<div>
  <button
    className="w-full text-left flex justify-between items-center py-2"
    onClick={() => {
      setWorkspaceOpen(!workspaceOpen);
      setSolutionsOpen(false);
    }}
  >
    <span>Workspace</span>
    <span>{workspaceOpen ? '▾' : '▸'}</span>
  </button>
  {workspaceOpen && (
    <div className="ml-4 mt-2 flex flex-col space-y-1">
      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
      >
        ISQ-JNR
      </Link>
      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
      >
        ISQ-PDM
      </Link>
    </div>
  )}
</div>

{/* Solutions Dropdown */}
<div className="mt-2">
  <button
    className="w-full text-left flex justify-between items-center py-2"
    onClick={() => {
      setSolutionsOpen(!solutionsOpen);
      setWorkspaceOpen(false);
    }}
  >
    <span>Solutions</span>
    <span>{solutionsOpen ? '▾' : '▸'}</span>
  </button>
  {solutionsOpen && (
    <div className="ml-4 mt-2 flex flex-col space-y-1">
      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
      >
        Private Office
      </Link>
      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
      >
        Private Cabin
      </Link>
      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
      >
        Meeting Room
      </Link>
      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
      >
        Retail Cubical
      </Link>
    </div>
  )}
</div>


          <Link href="/login" onClick={() => setMenuOpen(false)} className="py-2">Login</Link>
          <Link href="/reachus" onClick={() => setMenuOpen(false)} className="py-2">Reach Us</Link>
          <Link href="/bookavisit" onClick={() => setMenuOpen(false)} className="py-2">Book A Visit</Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
