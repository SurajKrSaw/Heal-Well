import Link from "next/link";
import {
  Stethoscope,
  HeartHandshake,
  UsersRound,
  Hospital,
  Clock,
  House,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Nursing Care at Home",
    description:
      "Nursing support for people who need assistance with healthcare needs while recovering or managing their condition at home.",
    icon: Stethoscope,
    features: [
      "Nursing support based on individual needs",
      "Assistance with prescribed care",
      "Support during recovery at home",
    ],
  },
  {
    number: "02",
    title: "Attendant Care",
    description:
      "Practical, day-to-day assistance for people who need extra help with personal care and everyday activities.",
    icon: HeartHandshake,
    features: [
      "Help with daily routines",
      "Mobility and personal care assistance",
      "Companionship and everyday support",
    ],
  },
  {
    number: "03",
    title: "Elder Care",
    description:
      "Thoughtful support for older adults who need assistance with daily activities, comfort, and their routine at home.",
    icon: UsersRound,
    features: [
      "Support with everyday activities",
      "Assistance with mobility",
      "Respectful, person-centred care",
    ],
  },
  {
    number: "04",
    title: "Post-Hospital Recovery",
    description:
      "Support for people transitioning from hospital to home who may need extra help during their recovery.",
    icon: Hospital,
    features: [
      "Assistance during recovery",
      "Help with daily activities",
      "Support according to care requirements",
    ],
  },
  {
    number: "05",
    title: "Nursing Visits",
    description:
      "Visit-based nursing support for people who need specific assistance without requiring a full-time care arrangement.",
    icon: Clock,
    features: [
      "Care based on identified needs",
      "Support with prescribed nursing tasks",
      "Visit requirements discussed in advance",
    ],
  },
  {
    number: "06",
    title: "Long-Term & Bedridden Care",
    description:
      "Ongoing assistance for people with limited mobility or those who need regular support over an extended period.",
    icon: House,
    features: [
      "Assistance with daily routines",
      "Support for limited mobility",
      "Care arrangements tailored to individual needs",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative bg-teal-50 px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-teal-800">
            HOW WE CAN HELP
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-teal-950 md:text-6xl">
            Care that puts
            <span className="block text-teal-700">your loved ones first.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Every person has different care needs. Explore our home healthcare
            services and find the kind of support that may be right for your
            loved one.
          </p>

          <Link
            href="#our-services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Explore Our Services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section id="our-services" className="scroll-mt-24 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-teal-700">
              OUR SERVICES
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-teal-950 md:text-4xl">
              The right support, closer to home.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              From everyday assistance to nursing support, explore the different
              types of care you may need at home.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex h-full flex-col rounded-2xl border border-teal-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-900/5 md:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-semibold tracking-widest text-teal-200">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-teal-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <Link
                      href="#get-started"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-950"
                    >
                      Discuss your needs
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personalised care section */}
      <section className="bg-teal-50 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-teal-700">
              CARE IS PERSONAL
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-teal-950 md:text-4xl">
              Every family has a different story.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Choosing care for someone you love can feel overwhelming. Start by
              telling us about their needs, daily routine, and the support you
              are looking for. We can then discuss suitable care options with
              you.
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Care needs discussed individually",
                "Support options explained clearly",
                "Care arrangements based on your requirements",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl border border-teal-200" />
            <div className="relative rounded-2xl bg-white p-8 shadow-sm md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                <HeartHandshake className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-teal-950">
                Not sure which service you need?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Tell us a little about your situation. We can discuss your
                requirements and help you understand which type of support may
                be suitable.
              </p>

              <Link
                href="#get-started"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-teal-950"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="scroll-mt-24 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-teal-800 px-6 py-12 text-center md:px-12 md:py-16">
          <p className="text-sm font-semibold tracking-[0.2em] text-teal-200">
            WE&apos;RE HERE TO HELP
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            Let&apos;s find the right care for your loved one.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-teal-100">
            Get in touch to discuss your care requirements and the available
            options.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/919608511491"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-teal-900 transition hover:bg-teal-50"
            >
              Talk to Us on WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="tel:9608511491"
              className="inline-flex items-center justify-center rounded-full border border-teal-300 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
