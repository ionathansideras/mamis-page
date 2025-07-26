export default function Pricing() {
    const services = [
        {
            title: "Initial Evaluation",
            price: "$150",
            description: "Comprehensive assessment",
            duration: "60-minute session",
        },
        {
            title: "Manual Therapy",
            price: "$120",
            description: "Pain relief techniques",
            duration: "45-minute session",
        },
        {
            title: "Sports Rehabilitation",
            price: "$130",
            description: "Performance optimization",
            duration: "50-minute session",
        },
        {
            title: "Therapeutic Exercise",
            price: "$100",
            description: "Balance & coordination",
            duration: "45-minute session",
        },
        {
            title: "Post-Surgical Recovery",
            price: "$140",
            description: "Gradual mobility restoration",
            duration: "50-minute session",
        },
        {
            title: "Chronic Pain Management",
            price: "$125",
            description: "Long-term management",
            duration: "45-minute session",
        },
    ];

    return (
        <section
            id="pricing"
            className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b bg-secondary-light to-white"
        >
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-8 sm:mb-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Our Services & Pricing
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Comprehensive physical therapy services tailored to your
                        specific needs. All sessions include personalized
                        treatment plans and ongoing support.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <ul className="divide-y divide-gray-200">
                        {services.map((service, index) => {
                            return (
                                <li
                                    key={index}
                                    className="hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div className="p-4 sm:p-6 flex justify-between items-center">
                                        {/* Left Container: Title, Description, and Duration */}
                                        <div className="flex-1">
                                            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                                                {service.title}
                                            </h4>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                                <p className="text-sm sm:text-base text-gray-600">
                                                    {service.description}
                                                </p>
                                                <span className="hidden sm:inline text-gray-400">
                                                    •
                                                </span>
                                                <p className="text-sm text-gray-500">
                                                    {service.duration}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Right Container: Price */}
                                        <div className="ml-4">
                                            <span className="text-2xl sm:text-3xl font-bold text-primary">
                                                {service.price}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
