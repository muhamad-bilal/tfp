
const teamMembers = [
  {
    name: "Name",
    role: "Designation/ Role",
    bio: ["Bio in bullet points"],
    imageUrl: "/placeholder.svg", // Update with actual images
  },
  {
    name: "Name",
    role: "Designation/ Role",
    bio: ["Bio in bullet points"],
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Name",
    role: "Designation/ Role",
    bio: ["Bio in bullet points"],
    imageUrl: "/placeholder.svg",
  },
];

export default function TeamProfiles() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#B08D57] mb-4">Team Profiles</h2>
        <p className="text-gray-600">Brief description of about 2-3 lines</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="border border-gray-200 rounded-lg shadow-lg p-6 bg-white">
            <div className="relative mb-6 flex flex-col items-center">
              {/* Circular image container */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#B08D57]">
                <img
                  src={member.imageUrl || "/placeholder.svg"}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-[#B08D57] mb-2">{member.name}</h3>
              <h4 className="text-lg text-[#B08D57] mb-4">{member.role}</h4>
              <ul className="text-gray-600 text-left list-disc pl-6">
                {member.bio.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
