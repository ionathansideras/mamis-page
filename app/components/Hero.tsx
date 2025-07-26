import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative py-12 sm:py-16 md:py-20 px-4 h-[88svh] flex items-center justify-center bg-secondary-light overflow-hidden">
            {/* Floating Images */}
            {/* Top Left - Always Smaller */}
            <div className="absolute top-1 sm:top-1 left-4 sm:left-1 animate-float-slow">
                <Image
                    src="/top-left.webp"
                    alt="Physical therapy equipment"
                    width={120}
                    height={120}
                    className="w-20 h-20 sm:w-28 sm:h-28"
                    priority
                />
            </div>

            {/* Top Right - Always Larger */}
            <div className="absolute top-8 sm:top-1 right-4 sm:right-1 animate-float-medium">
                <Image
                    src="/top-right.webp"
                    alt="Rehabilitation exercise"
                    width={180}
                    height={180}
                    className="w-32 h-32 sm:w-44 sm:h-44"
                    priority
                />
            </div>

            {/* Bottom Left - Always Larger */}
            <div className="absolute bottom-8 sm:bottom-0 left-4 sm:left-1 animate-float-medium rotate-280">
                <Image
                    src="/bottom-left.webp"
                    alt="Therapy session"
                    width={180}
                    height={180}
                    className="w-32 h-32 sm:w-44 sm:h-44"
                    priority
                />
            </div>

            {/* Bottom Right - Always Smaller */}
            <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-1 animate-float-slow">
                <Image
                    src="/bottom-right.webp"
                    alt="Wellness and recovery"
                    width={120}
                    height={120}
                    className="w-20 h-20 sm:w-28 sm:h-28"
                    priority
                />
            </div>

            <div className="container mx-auto text-center relative z-10">
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
                                className="cursor-pointer bg-secondary-light border-primary text-primary hover:border-primary-dark hover:text-primary-dark hover:bg-secondary px-6 sm:px-8 py-3 w-full sm:w-auto"
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
