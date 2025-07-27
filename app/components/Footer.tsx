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
                                src="/logo.webp"
                                alt="Irinos masažo terapija Logo"
                                width={300}
                                height={300}
                            />
                            <div>
                                <h3 className="text-lg font-bold">
                                    Irinos masažo terapija
                                </h3>
                                {/* <p className="text-gray-300 text-sm">
                                    Physical Therapy
                                </p> */}
                            </div>
                        </div>
                        <p className="text-gray-300">
                            Padedu žmonėms jaustis geriau per individualiai
                            pritaikytus masažus – kūno lengvumui, ramybei ir
                            gerai savijautai
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Kontaktai </h4>
                        <div className="space-y-2 text-gray-300">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>+370 699 87387</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>irinaul@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>
                                    Jaunimo g. 7, Vainotiškių k., Kėdainių r.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Nuorodos</h4>
                        <div className="space-y-2">
                            <Link
                                href="#apie-mane"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Apie mane
                            </Link>
                            <Link
                                href="#kainos"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Kainos
                            </Link>
                            <Link
                                href="#kontaktai"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Kontaktai
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-11 text-center text-gray-300">
                    <p>
                        &copy; {new Date().getFullYear()} Irinos masažo
                        terapija. Visos teisės saugomos.
                    </p>
                </div>
            </div>
        </footer>
    );
}
