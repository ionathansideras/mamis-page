import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            role="contentinfo"
            className="bg-gray-900 text-white py-12 px-4"
        >
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Image
                                className="h-12 w-12 rounded-full"
                                src="/logo.jpg"
                                alt="Irinos masažo terapija Logo"
                                width={48}
                                height={48}
                            />
                            <div>
                                <h3 className="text-lg font-bold">
                                    Irinos masažo terapija
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    Physical Therapy
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-300">
                            Dedicated to helping you achieve optimal health and
                            wellness through personalized physical therapy care.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-2 text-gray-300">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>+37069987387</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>info@sarahmitchellpt.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>123 Wellness Drive, Suite 200</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            <Link
                                href="#about"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="#pricing"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Pricing
                            </Link>
                            <Link
                                href="#contact"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-11 text-center text-gray-300">
                    <p>
                        &copy; {new Date().getFullYear()} Irinos masažo terapija
                        Physical Therapy. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
