"use client";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function MapView() {
    return (
        <Card className="p-4 sm:p-6">
            <div className="space-y-4">
                <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-rose-500 flex-shrink-0" />
                    <h4 className="font-semibold text-gray-900">Find Us</h4>
                </div>
                <div className="text-gray-600 text-sm sm:text-base mb-4">
                    <p>123 Wellness Drive</p>
                    <p>Suite 200</p>
                    <p>Healthville, ST 12345</p>
                </div>
                <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Dr. Sarah Mitchell Physical Therapy Location"
                    />
                </div>
            </div>
        </Card>
    );
}
