export default function Pricing() {
    const services = [
        {
            title: "Klasikinis nugaros masažas",
            price: "15 €",
            duration: "30 minučių",
        },
        {
            title: "Kaklo ir pečių masažas",
            price: "15 €",
            duration: "30 minučių",
        },
        {
            title: "Klasikinis viso kūno masažas",
            price: "30 €",
            duration: "90 minučių",
        },
        {
            title: "Atpalaiduojantis viso kūno masažas",
            price: "30 €",
            duration: "90 minučių",
        },
        {
            title: "Anticeliulitinis masažas",
            price: "20 €",
            duration: "30 minučių",
        },
        {
            title: "Kojų masažas",
            price: "20 €",
            duration: "40 minučių",
        },
    ];

    return (
        <section
            id="kainos"
            className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b bg-secondary-light to-white"
        >
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-8 sm:mb-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Paslaugos ir kainos
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Visos paslaugos pritaikomos individualiai – siekiant
                        maksimalaus atsipalaidavimo ir geros savijautos
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
