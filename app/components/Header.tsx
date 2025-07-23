import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header
            role="banner"
            className="bg-white/80 backdrop-blur-sm border-b border-secondary sticky top-0 z-50"
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Image
                            className="h-16 w-16 rounded-2xl"
                            src="/logo.jpg"
                            alt="Irinos masažo terapija Logo"
                            width={52}
                            height={52}
                            priority
                        />
                        <div>
                            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                                Irinos masažo terapija
                            </h1>
                            <p className="text-xs sm:text-sm text-gray-600">
                                Physical Therapy
                            </p>
                        </div>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <Link
                            href="#about"
                            className="text-gray-700 hover:text-primary-dark transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-gray-700 hover:text-primary-dark transition-colors"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#contact"
                            className="text-gray-700 hover:text-primary-dark transition-colors"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
