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
            <h4 className="font-semibold text-gray-900 mb-4">
                Send us a Message
            </h4>
            <form id="contact-form" action={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                        </label>
                        <Input name="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                        </label>
                        <Input name="lastName" placeholder="Your last name" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                    </label>
                    <Input
                        name="email"
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
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Contact Date
                    </label>
                    <Input name="preferredDate" type="date" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                    </label>
                    <Textarea
                        name="message"
                        placeholder="Tell us about your condition or what you'd like to discuss..."
                        rows={4}
                    />
                </div>
                <Button
                    type="submit"
                    disabled={isPending}
                    className="cursor-pointer w-full bg-rose-500 hover:bg-rose-600 text-white"
                >
                    {isPending ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </Card>
    );
}
