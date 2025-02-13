const Hero = () => {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-gray-50 flex items-center px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl text-center sm:text-left">
          <h1 className="space-y-2 text-[#987B51] font-bold">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              The Talpur Dynasty:
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Legacy of Sindh
            </div>
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            Historical Narrative: A detailed timeline of the Talpur rule, describing origins, key milestones, and
            contributions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
