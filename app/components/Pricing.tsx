import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Award, Heart, Users } from "lucide-react";

export default function Pricing() {
    return (
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
                        Comprehensive physical therapy services tailored to your
                        specific needs. All sessions include personalized
                        treatment plans and ongoing support.
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
    );
}
