"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { submitContactForm } from "../actions/contact";

export function ContactForm() {
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            const result = await submitContactForm(formData);

            if (result.success) {
                toast.success("Message Sent!", {
                    description: result.message,
                    duration: 5000,
                });
                // Reset form
                const form = document.getElementById(
                    "contact-form"
                ) as HTMLFormElement;
                form?.reset();
            } else {
                toast.error("Error", {
                    description: result.message,
                    duration: 5000,
                });
            }
        });
    };

    return (
        <Card className="p-4 sm:p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Raskite mus</h4>
            <form id="contact-form" action={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Vardas
                        </label>
                        <Input
                            name="firstName"
                            placeholder="Įrašykite savo vardą"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Pavardė
                        </label>
                        <Input
                            name="lastName"
                            placeholder="Įrašykite savo pavardę"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        El. paštas *
                    </label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="el.pastas@example.com"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefono numeris *
                    </label>
                    <Input
                        name="phone"
                        type="tel"
                        placeholder="(pvz., +370 600 12345)"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pageidaujama masažo data
                    </label>
                    <Input name="preferredDate" type="date" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Žinutė
                    </label>
                    <Textarea
                        name="message"
                        placeholder="Trumpai aprašykite, kuo galėčiau jums padėti arba kokio masažo ieškote..."
                        rows={4}
                    />
                </div>
                <Button
                    type="submit"
                    disabled={isPending}
                    className="cursor-pointer w-full bg-primary hover:bg-primary-dark text-white"
                >
                    {isPending ? "Siuntimas..." : "Siųsti"}
                </Button>
            </form>
        </Card>
    );
}
