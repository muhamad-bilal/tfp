interface RulerProfile {
  name: string
  description: string
  imageUrl: string
}

const rulers: RulerProfile[] = [
  {
    name: "Mission",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "",
  },
  {
    name: "Vision",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "",
  }
]

export default function ContentSections() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#A17E46] mb-8">Our Mission and Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          {rulers.map((ruler, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-200 overflow-hidden mx-auto w-full md:w-[517.19px] h-[200px] md:h-[410px]">
                <img
                  src={ruler.imageUrl || "/placeholder.svg"}
                  alt={ruler.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-[#A17E46] mt-4">{ruler.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">{ruler.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}