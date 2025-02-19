import type React from "react";

interface SectionData {
    title: string;
    description?: string;
    isReversed?: boolean;
}

const HeritageSections: React.FC = () => {
    const sections: SectionData[] = [
        {
            title: "History",
            isReversed: false,
        },
        {
            title: "Culture Significance",
            isReversed: true,
        },
        {
            title: "Heritage",
            description: "Background information.",
            isReversed: false,
        },
    ];

    return (
        <div className="w-full space-y-4 p-4 bg-[rgb(204_149_103)]">
            {sections.map((section, index) => (
                <div
                    key={index}
                    className="relative w-full h-[200px] rounded-lg overflow-hidden group cursor-pointer bg-white"
                >
                    {/* Split background container */}
                    <div className="absolute inset-0 flex">
                        <div
                            className={`w-1/2 transition-all duration-300 ease-in-out
                ${section.isReversed ? "bg-[#F5F5F5]" : "bg-[#FFF5F1]"}
                ${section.isReversed ? "group-hover:w-[55%]" : "group-hover:w-[45%]"}`}
                        ></div>
                        <div
                            className={`w-1/2 transition-all duration-300 ease-in-out
                ${section.isReversed ? "bg-[#FFF5F1]" : "bg-[#F5F5F5]"}
                ${section.isReversed ? "group-hover:w-[45%]" : "group-hover:w-[55%]"}`}
                        ></div>
                    </div>

                    {/* Content container */}
                    <div
                        className={`relative h-full p-6 flex flex-col justify-between
            ${section.isReversed ? "items-end text-right" : "items-start text-left"}`}
                    >
                        <h2
                            className={`text-2xl font-medium text-orange-500 transition-transform duration-300
              ${section.isReversed ? "group-hover:-translate-x-2" : "group-hover:translate-x-2"}`}
                        >
                            {section.title}
                        </h2>

                        {section.description && (
                            <p className="text-gray-600 max-w-[80%] text-sm mt-2">{section.description}</p>
                        )}
                    </div>

                    {/* Hover overlay gradient */}
                    <div
                        className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100
            ${section.isReversed
                                ? "bg-gradient-to-l from-transparent via-transparent to-black/5"
                                : "bg-gradient-to-r from-transparent via-transparent to-black/5"
                            }`}
                    ></div>
                </div>
            ))}
        </div>
    );
};

export default HeritageSections;
