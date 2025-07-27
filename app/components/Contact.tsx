import { Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MapView } from "./map-view";
import { ContactForm } from "./contact-form";

export default function Contact() {
    return (
        <section id="kontaktai" className="py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Susisiekite
                        </h3>
                        <p className="text-gray-600 text-lg">
                            Jei jaučiate, kad jūsų kūnui reikia poilsio –
                            susisiekite
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                        <div className="space-y-4 sm:space-y-6">
                            <Card className="p-4 sm:p-6 bg-secondary-light border-primary">
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">
                                            Skambinkite
                                        </h4>
                                        <p className="text-gray-600">
                                            +370 699 87387
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Tiesiogiai susisiekite ir susitarkite dėl
                                    jums patogaus masažo laiko
                                </p>
                            </Card>

                            <MapView />
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
