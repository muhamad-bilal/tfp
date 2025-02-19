const Hero = () => {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-[rgb(204_149_103)] flex items-center px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl text-center sm:text-left">
          <h1 className="space-y-2 text-white font-bold">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Talpur Historical Sites
            </div>
          </h1>
          <p className="mt-4 sm:mt-6 text-white text-base sm:text-lg leading-relaxed">
            Brief description
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
