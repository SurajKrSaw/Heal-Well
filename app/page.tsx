import Image from "next/image";
import HighlightStrip from "@/components/highlightStrip";
import Services from "@/components/servicesSection";
import Ctfp from "@/components/ctfp";
import HowItWorks from "@/components/howItWorks";
import WhoWeHelp from "@/components/woWeHelp";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen px-6 py-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
          {/* Hero Description */}
          <div className="grid ">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Home Healthcare Services
            </p>

            <h1 className="text-5xl text-gray-800 font-bold tracking-tight md:text-7xl">
              Professional Care,
              <br />
              Right at Home.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-600">
              Compassionate nursing and personal care services for your loved
              ones, delivered at home.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-full px-6 py-3 font-medium bg-teal-300 hover:bg-teal-500">
                Book a Nurse
              </button>

              <button className="rounded-full border px-6 py-3 font-medium bg-teal-300 hover:bg-teal-500">
                Talk to Us
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="grid w-full">
            <Image
              className="h-auto w-full"
              src="/HealWellHero1.jpg"
              alt="Healthcare professional caring for a patient at home"
              width={600}
              height={500}
            />
          </div>
        </div>
      </section>
      <HighlightStrip />
      <Services />
      <Ctfp />
      <HowItWorks />
      <WhoWeHelp />
    </main>
  );
}
