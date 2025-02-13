interface RulerProfile {
  name: string
  description: string
  imageUrl: string
}

const rulers: RulerProfile[] = [
  {
    name: "Ruler Name 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "",
  },
  {
    name: "Ruler Name 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "",
  },
  {
    name: "Ruler Name 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "",
  },
]

export default function ContentSections() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#A17E46] mb-8">Ruler Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rulers.map((ruler, index) => (
            <div key={index} className="flex flex-col">
              <div className="aspect-square w-full mb-4 bg-gray-200 overflow-hidden">
                <img
                  src={ruler.imageUrl || "/placeholder.svg"}
                  alt={ruler.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-[#A17E46] mb-2">{ruler.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{ruler.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#A17E46] mb-8">Map</h2>
        <div className="w-full aspect-[16/9] bg-gray-200 overflow-hidden">
          <img
            src=""
            alt="Map"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  )
}
