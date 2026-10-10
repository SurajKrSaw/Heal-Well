"use client";

import {
  MessageCircle,
  ClipboardList,
  HeartHandshake,
  House,
} from "lucide-react";

const steps = [
  {
    number: "01",
    label: "STEP ONE",
    title: "Tell Us What You Need",
    description:
      "Every care journey begins with a conversation. Tell us about your loved one's needs, daily routine, and the support you're looking for.",
    icon: MessageCircle,
    points: [
      "Share your care requirements",
      "Tell us about the patient",
      "Let us know your preferences",
    ],
  },
  {
    number: "02",
    label: "STEP TWO",
    title: "We Understand Your Needs",
    description:
      "We take the time to understand your situation so we can discuss the type of care and support that may be suitable for your loved one.",
    icon: ClipboardList,
    points: [
      "Discuss care requirements",
      "Understand daily routines",
      "Clarify your expectations",
    ],
  },
  {
    number: "03",
    label: "STEP THREE",
    title: "We Arrange the Right Care",
    description:
      "Based on the information you share, we help coordinate suitable care arrangements for your loved one and discuss the next steps with you.",
    icon: HeartHandshake,
    points: [
      "Discuss suitable care options",
      "Confirm the care arrangement",
      "Coordinate the next steps",
    ],
  },
  {
    number: "04",
    label: "STEP FOUR",
    title: "Care Begins at Home",
    description:
      "Your loved one receives the agreed care in familiar surroundings, while you have a clear point of contact for questions and coordination.",
    icon: House,
    points: [
      "Begin the agreed care plan",
      "Keep communication clear",
      "Reach out when support is needed",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative bg-teal-50 px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-teal-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-teal-800">
            YOUR CARE JOURNEY
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-teal-950 md:text-6xl">
            Quality care,
            <span className="block text-teal-700">made simple.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Finding care for someone you love can feel overwhelming. At Heal
            Well, we aim to make the process clear, personal, and easier to
            navigate — one step at a time.
          </p>

          <a
            href="#care-steps"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-teal-800"
          >
            Explore the process
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* Timeline Introduction */}
      <section id="care-steps" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-teal-700">
            FOUR SIMPLE STEPS
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-teal-950 md:text-4xl">
            From your first conversation to care at home
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            We start by listening, understanding what matters, and helping you
            explore the next steps for your loved one.
          </p>
        </div>

        {/* Zigzag Timeline */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Central timeline line - desktop */}
          <div className="absolute bottom-24 left-1/2 top-24 hidden w-px -translate-x-1/2 bg-teal-200 md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative md:grid md:min-h-[340px] md:grid-cols-2 md:items-center md:gap-16 ${
                    index !== 0 ? "md:-mt-2" : ""
                  }`}
                >
                  {/* Step Card */}
                  <div
                    className={`relative ${
                      isLeft
                        ? "md:col-start-1 md:row-start-1"
                        : "md:col-start-2 md:row-start-1"
                    }`}
                  >
                    <div className="group relative rounded-3xl border border-teal-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,118,110,0.06)] transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_16px_40px_rgba(15,118,110,0.12)] md:p-8">
                      {/* Decorative number */}
                      <span className="pointer-events-none absolute right-5 top-3 text-7xl font-bold tracking-tighter text-teal-50 transition-colors group-hover:text-teal-100 md:text-8xl">
                        {step.number}
                      </span>

                      <div className="relative">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                            <Icon size={23} strokeWidth={1.8} />
                          </div>

                          <span className="text-xs font-bold tracking-[0.16em] text-teal-700">
                            {step.label}
                          </span>
                        </div>

                        <h3 className="mt-6 max-w-sm text-2xl font-bold leading-tight text-teal-950 md:text-3xl">
                          {step.title}
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600">
                          {step.description}
                        </p>

                        <ul className="mt-6 space-y-3">
                          {step.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 text-sm text-slate-600"
                            >
                              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                                <span className="text-xs">✓</span>
                              </span>
                              {point}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-7 h-1 w-12 rounded-full bg-teal-500 transition-all duration-300 group-hover:w-20" />
                      </div>
                    </div>
                  </div>

                  {/* Central numbered marker */}
                  <div className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-teal-700 text-sm font-bold text-white shadow-md md:flex">
                    {index + 1}
                  </div>

                  {/* Opposite-side decorative content */}
                  <div
                    className={`mt-6 hidden px-6 md:mt-0 md:block ${
                      isLeft
                        ? "md:col-start-2 md:row-start-1 md:pl-12"
                        : "md:col-start-1 md:row-start-1 md:pr-12"
                    }`}
                  >
                    <span className="text-7xl font-bold tracking-tighter text-teal-100">
                      {step.number}
                    </span>

                    <p className="mt-2 max-w-xs text-lg font-medium leading-8 text-teal-900">
                      {
                        [
                          "It starts with listening to you.",
                          "Every family has different needs.",
                          "The right support starts with a clear plan.",
                          "Comfort and support, in familiar surroundings.",
                        ][index]
                      }
                    </p>

                    <div className="mt-5 h-px w-24 bg-teal-200" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 pb-20 md:pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-teal-800 px-6 py-12 text-center md:px-16 md:py-16">
          <div className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full border-[30px] border-white/5" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full border-[35px] border-white/5" />

          <div className="relative">
            <p className="text-sm font-semibold tracking-[0.2em] text-teal-200">
              WE&spos;RE HERE TO HELP
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              Not sure what kind of care you need?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-teal-100">
              Tell us about your situation. Let&apos;s discuss the support that
              may be right for your loved one.
            </p>

            <a
              href="https://wa.me/919608511491"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-teal-800 transition hover:bg-teal-50"
            >
              Talk to Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
