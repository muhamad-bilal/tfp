const DynastySection: React.FC = () => {
  const dynastyData = [
    {
      title: "Talpur Dynasty",
      imageUrl: "",
      link: "#",
    },
    {
      title: "Talpur Dynasty",
      imageUrl: "",
      link: "#",
    },
  ];

  return (
    <div className="flex justify-center gap-8 p-8 overflow-x-auto scrollbar-hide bg-[rgb(204_149_103)]">
      {dynastyData.map((item, index) => (
        <div
          key={index}
          className="min-w-[300px] p-4 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:shadow-lg group"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium text-orange-500">{item.title}</h3>
              <svg
                className="w-6 h-6 text-orange-500 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded">
              <img
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynastySection;
