import type React from "react";

interface HistoricalSite {
  name: string;
  description: string;
  imageUrl: string;
}

const HistoricalSites: React.FC = () => {
  const sites: HistoricalSite[] = [
    {
      name: "Site Name",
      description: "Brief Description",
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Site Name",
      description: "Brief Description",
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Site Name",
      description: "Brief Description",
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Site Name",
      description: "Brief Description",
      imageUrl: "/placeholder.svg",
    },
  ];

  return (
    <div className="w-screen p-6 bg-[rgb(204_149_103)]">
      <h2 className="text-2xl font-semibold text-white mb-8 text-center">
        Historical Sites
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {sites.map((site, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Image container */}
            <div className="aspect-square overflow-hidden bg-gray-200">
              <img
                src={site.imageUrl || "/placeholder.svg"}
                alt={site.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <h3 className="text-lg font-medium text-orange-400">{site.name}</h3>
              <p className="text-gray-600 text-sm">{site.description}</p>
              <button
                className="px-4 py-2 bg-[#A17B45] text-white text-sm rounded 
                          hover:bg-[#8B6937] transition-colors duration-300 w-full"
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoricalSites;
