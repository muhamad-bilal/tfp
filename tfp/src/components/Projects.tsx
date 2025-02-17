interface ProjTitle {
    name: string;
    description: string;
    imageUrl: string;
}

const proj: ProjTitle[] = [
    {
        name: "Project Title 1",
        description: "Description of project 1.",
        imageUrl: "",
    },
    {
        name: "Project Title 2",
        description: "Description of project 2.",
        imageUrl: "",
    },
    {
        name: "Project Title 3",
        description: "Description of project 3.",
        imageUrl: "",
    },
];

export default function Projects() {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-[#A17E46] mb-8">Ongoing Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {proj.map((project, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-full max-w-sm aspect-[4/3] bg-gray-200 overflow-hidden">
                                <img
                                    src={project.imageUrl || "/placeholder.svg"}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-medium text-[#A17E46] mt-4">{project.name}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed px-4">{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}