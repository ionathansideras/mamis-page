import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 h-[88svh] flex items-center justify-center bg-secondary-light">
            <div className="container mx-auto text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Restore Your Movement,{" "}
                        <span className="text-primary">Reclaim Your Life</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                        Expert physical therapy care with a personalized
                        approach to help you achieve your wellness goals and
                        return to the activities you love.
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
    );
}
