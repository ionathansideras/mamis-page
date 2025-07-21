import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Award, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
                            <Heart className="h-8 w-8 text-rose-500" />
                            <div>
                                <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                                    Dr. Sarah Mitchell
                                </h1>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    Physical Therapy
                                </p>
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            <Link
                                href="#about"
                                className="text-gray-700 hover:text-rose-600 transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="#pricing"
                                className="text-gray-700 hover:text-rose-600 transition-colors"
                            >
                                Pricing
                            </Link>
                            <Link
                                href="#appointment"
                                className="text-gray-700 hover:text-rose-600 transition-colors"
                            >
                                Book Appointment
                            </Link>
                        </nav>
                        <Button className="cursor-pointer bg-rose-500 hover:bg-rose-600 text-white text-sm px-3 py-2 sm:px-4 sm:py-2">
                            <Phone className="h-4 w-4 mr-1 sm:mr-2" />
                            <span className="hidden sm:inline">Call Now</span>
                            <span className="sm:hidden">Call</span>
                        </Button>
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="py-12 sm:py-16 md:py-20 px-4">
                    <div className="container mx-auto text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Restore Your Movement,{" "}
                                <span className="text-rose-500">
                                    Reclaim Your Life
                                </span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                                Expert physical therapy care with a personalized
                                approach to help you achieve your wellness goals
                                and return to the activities you love.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                                <Button
                                    className="cursor-pointer bg-rose-500 hover:bg-rose-600 text-white px-6 sm:px-8 py-3 w-full sm:w-auto"
                                    size="lg"
                                >
                                    Schedule Consultation
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="cursor-pointer border-rose-300 text-rose-600 hover:bg-rose-50 px-6 sm:px-8 py-3 bg-transparent w-full sm:w-auto"
                                >
                                    Learn More
                                </Button>
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
                                    src="/placeholder.svg?height=400&width=500"
                                    alt="Dr. Sarah Mitchell, Licensed Physical Therapist"
                                    width={500}
                                    height={400}
                                    className="rounded-2xl shadow-lg w-full max-w-md mx-auto lg:max-w-none"
                                />
                            </div>
                            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        About Dr. Sarah Mitchell
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
                                        <Award className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
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
                                        <Users className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
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

                                <div className="bg-rose-50 p-4 sm:p-6 rounded-xl">
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
                    className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-rose-50 to-white"
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
                            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-rose-200">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Users className="h-8 w-8 text-rose-500" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            Initial Evaluation
                                        </h4>
                                        <p className="text-3xl font-bold text-rose-500 mt-2">
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

                            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-rose-200">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Heart className="h-8 w-8 text-rose-500" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            Manual Therapy
                                        </h4>
                                        <p className="text-3xl font-bold text-rose-500 mt-2">
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

                            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-rose-200">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Award className="h-8 w-8 text-rose-500" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            Sports Rehabilitation
                                        </h4>
                                        <p className="text-3xl font-bold text-rose-500 mt-2">
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

                            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-rose-200">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Clock className="h-8 w-8 text-rose-500" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            Therapeutic Exercise
                                        </h4>
                                        <p className="text-3xl font-bold text-rose-500 mt-2">
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

                            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-rose-200">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <MapPin className="h-8 w-8 text-rose-500" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            Post-Surgical Recovery
                                        </h4>
                                        <p className="text-3xl font-bold text-rose-500 mt-2">
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

                            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-rose-200">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Phone className="h-8 w-8 text-rose-500" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            Chronic Pain Management
                                        </h4>
                                        <p className="text-3xl font-bold text-rose-500 mt-2">
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

                        <div className="mt-8 sm:mt-12 text-center px-4">
                            <Card className="max-w-2xl mx-auto bg-rose-50 border-rose-200">
                                <CardContent className="p-4 sm:p-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        Insurance & Payment Options
                                    </h4>
                                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                                        We accept most major insurance plans.
                                        Payment plans and package deals
                                        available for multiple sessions.
                                    </p>
                                    <Button className="cursor-pointer bg-rose-500 hover:bg-rose-600 text-white w-full sm:w-auto">
                                        Check Insurance Coverage
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Book Appointment Section */}
                <section id="appointment" className="py-20 px-4 bg-white">
                    <div className="container mx-auto">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    Book Your Appointment
                                </h3>
                                <p className="text-gray-600 text-lg">
                                    Ready to start your journey to better
                                    health? Schedule your consultation today.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                                <div className="space-y-4 sm:space-y-6">
                                    <Card className="p-4 sm:p-6 bg-rose-50 border-rose-200">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <Phone className="h-6 w-6 text-rose-500 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">
                                                    Call Us
                                                </h4>
                                                <p className="text-gray-600">
                                                    (555) 123-4567
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            Speak directly with our team to
                                            schedule your appointment and
                                            discuss your needs.
                                        </p>
                                    </Card>

                                    <Card className="p-4 sm:p-6">
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-3">
                                                <Clock className="h-5 w-5 text-rose-500 flex-shrink-0" />
                                                <h4 className="font-semibold text-gray-900">
                                                    Office Hours
                                                </h4>
                                            </div>
                                            <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                                                <div className="flex justify-between">
                                                    <span>Monday - Friday</span>
                                                    <span>
                                                        8:00 AM - 6:00 PM
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Saturday</span>
                                                    <span>
                                                        9:00 AM - 2:00 PM
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Sunday</span>
                                                    <span>Closed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="p-4 sm:p-6">
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-3">
                                                <MapPin className="h-5 w-5 text-rose-500 flex-shrink-0" />
                                                <h4 className="font-semibold text-gray-900">
                                                    Location
                                                </h4>
                                            </div>
                                            <div className="text-gray-600 text-sm sm:text-base">
                                                <p>123 Wellness Drive</p>
                                                <p>Suite 200</p>
                                                <p>Healthville, ST 12345</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>

                                <Card className="p-4 sm:p-6">
                                    <h4 className="font-semibold text-gray-900 mb-4">
                                        Request Appointment
                                    </h4>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    First Name
                                                </label>
                                                <Input placeholder="Your first name" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Last Name
                                                </label>
                                                <Input placeholder="Your last name" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Email *
                                            </label>
                                            <Input
                                                type="email"
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Phone *
                                            </label>
                                            <Input
                                                type="tel"
                                                placeholder="(555) 123-4567"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Preferred Date
                                            </label>
                                            <Input type="date" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Message
                                            </label>
                                            <Textarea
                                                placeholder="Tell us about your condition or what you'd like to discuss during your appointment..."
                                                rows={4}
                                            />
                                        </div>
                                        <Button className="cursor-pointer w-full bg-rose-500 hover:bg-rose-600 text-white">
                                            Request Appointment
                                        </Button>
                                    </form>
                                </Card>
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
                                <Heart className="h-6 w-6 text-rose-500" />
                                <div>
                                    <h3 className="text-lg font-bold">
                                        Dr. Sarah Mitchell
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Physical Therapy
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-400">
                                Dedicated to helping you achieve optimal health
                                and wellness through personalized physical
                                therapy care.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Contact Info</h4>
                            <div className="space-y-2 text-gray-400">
                                <div className="flex items-center space-x-2">
                                    <Phone className="h-4 w-4" />
                                    <span>(555) 123-4567</span>
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
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    About
                                </Link>
                                <Link
                                    href="#pricing"
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="#appointment"
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    Book Appointment
                                </Link>
                                <Link
                                    href="#"
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    Insurance
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>
                            &copy; {new Date().getFullYear()} Dr. Sarah Mitchell
                            Physical Therapy. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
