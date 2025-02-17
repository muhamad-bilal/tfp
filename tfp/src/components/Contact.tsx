export default function Testimonial() {
    return (
        <div className="flex flex-col md:flex-row max-w-3xl mx-auto gap-8 items-center mb-8 pb-8 px-4 sm:px-6 lg:px-8">
            <div
                style={{ backgroundColor: "#B39B77" }}
                className="relative w-full md:w-2/3 p-6 sm:p-8 min-h-[200px] flex items-center"
            >
                <span className="absolute top-4 right-4 text-white text-4xl sm:text-6xl font-serif" style={{ lineHeight: 1 }}>
                    "&nbsp;&nbsp;"
                </span>
                <p className="text-white text-base sm:text-lg z-10 relative text-center md:text-left">
                    "This is a fantastic service! It has greatly improved my workflow and efficiency. Highly recommended!"
                </p>
            </div>

            <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-200 overflow-hidden">
                    <img
                        src="/placeholder.svg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 style={{ color: "#B39B77" }} className="font-medium text-lg sm:text-xl">
                    Mustafa Talpur
                </h3>
                <p style={{ color: "#B39B77" }} className="text-xs sm:text-sm">
                    CEO
                </p>
            </div>
        </div>
    )
}
