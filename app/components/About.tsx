import { Award, Users } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="py-30 sm:py-16 md:py-30 px-5 lg:px-20 md:px-10 bg-white"
        >
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                            About Irinos masažo terapija
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                            With over 12 years of experience in physical
                            therapy, I am passionate about helping patients
                            overcome pain and movement limitations. My approach
                            combines evidence-based treatment techniques with
                            compassionate care to create personalized recovery
                            plans.
                        </p>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            I specialize in orthopedic rehabilitation, sports
                            injuries, and chronic pain management. My goal is to
                            not just treat symptoms, but to address the root
                            cause of your condition and empower you with the
                            knowledge and tools for long-term wellness.
                        </p>
                    </div>
                    <div className="space-y-4 sm:space-y-6">
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
                                <li>• Orthopedic & Sports Rehabilitation</li>
                                <li>• Manual Therapy & Joint Mobilization</li>
                                <li>• Chronic Pain Management</li>
                                <li>• Post-Surgical Recovery</li>
                                <li>• Movement Analysis & Correction</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
