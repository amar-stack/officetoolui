// app/components/NavBar.tsx
import Link from 'next/link'

const NavBar = () => (
  <nav className="flex justify-center space-x-8 py-4 text-black">
    <Link href="/" className="hover:text-gray-400">Home</Link>
    <Link href="/about" className="hover:text-gray-400">About</Link>
  </nav>
)

export default NavBar
