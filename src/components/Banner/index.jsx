export default function Banner() {
  console.log("banner linked")
  return (
    <div className="relative">
      <h2 className="absolute bottom-0 text-white p-2 b-2">Sunrise over State College, PA</h2>
      <img className="something" src="../src/assets/Sunrise_Cropped.jpg" alt="sunrise photo over mountains" />
    </div>
  )
}