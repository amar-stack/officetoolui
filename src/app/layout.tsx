// app/layout.tsx
import './globals.css'
import Logo from './components/Logo'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-gray-200 shadow-md py-2 px-10 flex justify-between items-center">
          <Logo />
          <NavBar />
        </header>
        
        <main className="flex-grow">{children}</main>
        
        <Footer />
      </body>
    </html>
  )
}
