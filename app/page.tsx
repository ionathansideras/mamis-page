import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Award, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./components/contact-form";
import { MapView } from "./components/map-view";
import { Toaster } from "sonner";

export default function PhysicalTherapistWebsite() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
            {/* Header */}
            <header
                role="banner"
                className="bg-white/80 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-50"
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

            <main>
                {/* Hero Section */}
                <section className="py-12 sm:py-16 md:py-20 px-4 h-[88svh] flex items-center justify-center bg-secondary-light">
                    <div className="container mx-auto text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Restore Your Movement,{" "}
                                <span className="text-primary">
                                    Reclaim Your Life
                                </span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                                Expert physical therapy care with a personalized
                                approach to help you achieve your wellness goals
                                and return to the activities you love.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                                <Link href="#contact" passHref>
                                    <Button
                                        className="cursor-pointer bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3 w-full sm:w-auto"
                                        size="lg"
                                    >
                                        Contact Us
                                    </Button>
                                </Link>

                                <Link href="#about" passHref>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="cursor-pointer border-primary text-primary hover:border-primary-dark hover:text-primary-dark hover:bg-secondary px-6 sm:px-8 py-3 bg-transparent w-full sm:w-auto"
                                    >
                                        Learn More
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section
                    id="about"
                    className="py-12 sm:py-16 md:py-20 px-4 bg-white"
                >
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <Image
                                    src="/avatar.png"
                                    alt="Irinos masažo terapija"
                                    width={500}
                                    height={400}
                                    className="rounded-2xl shadow-lg w-full max-w-md mx-auto lg:max-w-none"
                                />
                            </div>
                            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        About Irinos masažo terapija
                                    </h3>
                                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                                        With over 12 years of experience in
                                        physical therapy, I am passionate about
                                        helping patients overcome pain and
                                        movement limitations. My approach
                                        combines evidence-based treatment
                                        techniques with compassionate care to
                                        create personalized recovery plans.
                                    </p>
                                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                        I specialize in orthopedic
                                        rehabilitation, sports injuries, and
                                        chronic pain management. My goal is to
                                        not just treat symptoms, but to address
                                        the root cause of your condition and
                                        empower you with the knowledge and tools
                                        for long-term wellness.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="flex items-start space-x-3">
                                        <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">
                                                Licensed DPT
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                Doctor of Physical Therapy
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">
                                                1000+ Patients
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                Successfully treated
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-secondary-light p-4 sm:p-6 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-3">
                                        Specializations
                                    </h4>
                                    <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                                        <li>
                                            • Orthopedic & Sports Rehabilitation
                                        </li>
                                        <li>
                                            • Manual Therapy & Joint
                                            Mobilization
                                        </li>
                                        <li>• Chronic Pain Management</li>
                                        <li>• Post-Surgical Recovery</li>
                                        <li>
                                            • Movement Analysis & Correction
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section
                    id="pricing"
                    className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b bg-secondary-light to-white"
                >
                    <div className="container mx-auto">
                        <div className="text-center mb-8 sm:mb-12">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Our Services & Pricing
                            </h3>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                                Comprehensive physical therapy services tailored
                                to your specific needs. All sessions include
                                personalized treatment plans and ongoing
                                support.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Users className="h-8 w-8 text-primary" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            Initial Evaluation
                                        </h4>
                                        <p className="text-3xl font-bold text-primary mt-2">
                                            $150
                                        </p>
                                    </div>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li>• Comprehensive assessment</li>
                                        <li>• Movement analysis</li>
                                        <li>• Personalized treatment plan</li>
                                        <li>• 60-minute session</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Heart className="h-8 w-8 text-primary" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            Manual Therapy
                                        </h4>
                                        <p className="text-3xl font-bold text-primary mt-2">
                                            $120
                                        </p>
                                    </div>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li>• Joint mobilization</li>
                                        <li>• Soft tissue massage</li>
                                        <li>• Pain relief techniques</li>
                                        <li>• 45-minute session</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Award className="h-8 w-8 text-primary" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            Sports Rehabilitation
                                        </h4>
                                        <p className="text-3xl font-bold text-primary mt-2">
                                            $130
                                        </p>
                                    </div>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li>• Sport-specific training</li>
                                        <li>• Injury prevention</li>
                                        <li>• Performance optimization</li>
                                        <li>• 50-minute session</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Clock className="h-8 w-8 text-primary" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            Therapeutic Exercise
                                        </h4>
                                        <p className="text-3xl font-bold text-primary mt-2">
                                            $100
                                        </p>
                                    </div>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li>• Strength training</li>
                                        <li>• Flexibility improvement</li>
                                        <li>• Balance & coordination</li>
                                        <li>• 45-minute session</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                            <MapPin className="h-8 w-8 text-primary" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            Post-Surgical Recovery
                                        </h4>
                                        <p className="text-3xl font-bold text-primary mt-2">
                                            $140
                                        </p>
                                    </div>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li>• Post-op rehabilitation</li>
                                        <li>• Scar tissue management</li>
                                        <li>• Gradual mobility restoration</li>
                                        <li>• 50-minute session</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Phone className="h-8 w-8 text-primary" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            Chronic Pain Management
                                        </h4>
                                        <p className="text-3xl font-bold text-primary mt-2">
                                            $125
                                        </p>
                                    </div>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li>• Pain reduction strategies</li>
                                        <li>• Lifestyle modifications</li>
                                        <li>• Long-term management</li>
                                        <li>• 45-minute session</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Book Appointment Section */}
                <section id="contact" className="py-20 px-4 bg-white">
                    <div className="container mx-auto">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    Contact Us
                                </h3>
                                <p className="text-gray-600 text-lg">
                                    Ready to start your journey to better
                                    health? Get in touch with us today.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                                <div className="space-y-4 sm:space-y-6">
                                    <Card className="p-4 sm:p-6 bg-secondary-light border-primary">
                                        <div className="flex items-center space-x-3">
                                            <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">
                                                    Call Us
                                                </h4>
                                                <p className="text-gray-600">
                                                    +37069987387
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            Speak directly with our team to
                                            schedule your appointment and
                                            discuss your needs.
                                        </p>
                                    </Card>

                                    <MapView />
                                </div>

                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
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
                                Dedicated to helping you achieve optimal health
                                and wellness through personalized physical
                                therapy care.
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
                            &copy; {new Date().getFullYear()} Irinos masažo
                            terapija Physical Therapy. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
            <Toaster position="top-right" richColors />
        </div>
    );
}
