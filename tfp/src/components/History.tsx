export default function ContentSections() {
    return (
      <div className="container mx-auto px-4 py-16 space-y-24 mt-10">
        {/* History Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-300 aspect-[5/3] rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#A17E46]">History</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
            <p className="text-gray-600">
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
  
        {/* Historical Sites Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-300 aspect-[5/3] rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#A17E46]">Historical Sites</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
            <p className="text-gray-600">
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
  
        {/* Details and Registration Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-300 aspect-[5/3] rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#A17E46]">Details and Registration</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              </p>
              <p className="text-gray-600">
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
            <button className="bg-[#987B51] text-white px-8 py-3 rounded hover:bg-[#876A40] transition-colors">
              Call to Action
            </button>
          </div>
        </div>
      </div>
    )
}
