import { Toaster } from "sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function PhysicalTherapistWebsite() {
    return (
        <div className="min-h-screen ">
            <main>
                <Header />

                <Hero />

                <About />

                <Pricing />

                <Contact />
            </main>

            <Footer />

            <Toaster position="top-right" richColors />
        </div>
    );
}
