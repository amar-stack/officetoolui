import Image from "next/image"

// app/components/Logo.tsx
const Logo = () => (
    <div className="flex items-center space-x-2 pl-1">
      <Image src="/logo.png" alt="Logo" className="h-18 w-18" width={125} height={60} />
      {/* <span className="text-xl font-bold">InstaSquares</span> */}
    </div>
  )
  
  export default Logo
  