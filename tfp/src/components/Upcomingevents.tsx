import { Calendar } from "lucide-react"

export default function UpcomingEvents() {
  return (
    <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#A17E46]">Upcoming Events</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <p className="text-gray-600">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-[#A17E46]/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#A17E46]" />
            </div>
            <h3 className="text-xl font-medium text-[#A17E46]">Talpur Melo</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 bg-[#A17E46]/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#A17E46]" />
            </div>
            <h3 className="text-xl font-medium text-[#A17E46]">Title Goes Here</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg min-h-[400px]">{/* Placeholder for map or image */}</div>
    </div>
  )
}

