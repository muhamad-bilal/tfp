export default function ContactMembership() {

    return (

        <section className="relative min-h-[600px] bg-[#A17E46]/50 w-full">
            {/* Curved white header */}
            <div
                className="absolute top-0 left-0 right-0 h-32 bg-white"
                style={{
                    borderRadius: "0 0 100% 100%",
                    transform: "scaleX(1.1)",
                }}
            />
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto pt-40 px-4 text-center">
                <h2 className="text-4xl font-light text-[#8B7355] mb-8">Contact & Membership</h2>
                <p className="mb-12 text-[#8B7355]">contact details</p>
                <button className="px-6 py-3 bg-[#69532F] text-white rounded hover:bg-[#3C2A21] transition-colors duration-300">
                    Apply for membership
                </button>
            </div>
        </section>
    )
}