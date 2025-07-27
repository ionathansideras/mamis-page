"use client";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function MapView() {
    return (
        <Card className="p-4 sm:p-6">
            <div className="space-y-4">
                <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <h4 className="font-semibold text-gray-900">Adresas</h4>
                </div>
                <div className="text-gray-600 text-sm sm:text-base mb-4">
                    <p>Jaunimo g. 7</p>
                    <p>Vainotiškių k.</p>
                    <p>Kėdainių r.</p>
                    <p>Lietuva</p>
                </div>
                <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                        src="https://maps.google.com/maps?q=Jaunimo%20g.%207,%20Vainoti%C5%A1ki%C5%B3%20k.,%20K%C4%97daini%C5%B3%20r.,%20Lietuva&hl=lt&z=15&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Irinos masažo terapija – Jaunimo g. 7, Vainotiškių k., Kėdainių r."
                    />
                </div>
            </div>
        </Card>
    );
}
