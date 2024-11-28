// app/components/ImageText.tsx
const ImageText = () => (
    <>
    <div className="flex items-center py-10 px-5">
      <div className="w-1/2 ">
        <h2 className="text-3xl font-semibold">GROUND FLOOR PLAN IMAGE</h2>
        <p className="mt-4 text-lg">
        Shared office space with combination of manager cabins & workstation cabins. Ideal for Managers.
        </p>
      </div>
      <div className="w-1/2 pl-10">
        <img src="/image1.jpeg" alt="Image" className="w-full h-auto object-cover" />
      </div>
      
      
    </div>
    <div className="flex items-center py-10 px-5">
         <div className="w-1/2">
    <img src="/image2.jpeg" alt="Image" className="w-full h-auto object-cover" />
  </div>
  <div className="w-1/2 pl-10">
  <h2 className="text-3xl font-semibold">GROUND FLOOR PLAN IMAGE</h2>
        <p className="mt-4 text-lg">
        Shared office space with combination of manager cabins & workstation cabins. Ideal for Managers.
        </p>
  </div>
    </div>
    </>
   
  )
  
  export default ImageText
  