import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqGroups = [
  {
    title: "Our Services",
    description: "Learn more about the care we provide.",
    questions: [
      {
        question: "What services does Heal Well provide?",
        answer:
          "Heal Well helps families explore at-home care options, including nursing care, attendant care, elder care, post-hospital recovery support, nursing visits, and long-term care. Contact us to confirm which services are available for your needs.",
      },
      {
        question: "Can I arrange care for an elderly family member?",
        answer:
          "Yes, you can contact us to discuss your family member's daily routine, personal care needs, and the type of assistance required. We'll help you understand the available options.",
      },
      {
        question: "Do you provide care for bedridden patients?",
        answer:
          "We can discuss care arrangements for bedridden individuals and people who need ongoing support at home. The suitable arrangement depends on the person's needs and service availability.",
      },
      {
        question: "Is nursing care different from attendant care?",
        answer:
          "Nursing care involves clinical support provided by appropriately qualified nursing professionals. Attendant care generally focuses on daily activities and personal assistance. The appropriate option depends on the person's requirements.",
      },
    ],
  },
  {
    title: "Booking & Availability",
    description: "Understand how to get started.",
    questions: [
      {
        question: "How do I book a service?",
        answer:
          "Contact our team by phone or WhatsApp. Explain the care required, your location, and your preferred schedule. We'll discuss the next steps and confirm availability.",
      },
      {
        question: "Can I arrange care for a short or long period?",
        answer:
          "You can tell us whether you need occasional visits, daily assistance, or longer-term care. Available arrangements depend on your requirements and staffing.",
      },
      {
        question: "How soon can care begin?",
        answer:
          "The start date depends on your location, the type of service, and staff availability. Contact us with your preferred date so we can discuss the options.",
      },
      {
        question: "Can I discuss my requirements before booking?",
        answer:
          "Absolutely. We encourage families to explain their needs and ask questions before deciding on a care arrangement.",
      },
    ],
  },
  {
    title: "Care & Safety",
    description: "Questions about choosing care for your loved ones.",
    questions: [
      {
        question: "Can my family be involved in the care process?",
        answer:
          "Yes. Family members can communicate important routines, preferences, and care instructions. Clear communication helps everyone understand the agreed care arrangements.",
      },
      {
        question: "How do I know which type of care is suitable?",
        answer:
          "Consider the person's mobility, daily assistance needs, recovery requirements, and whether clinical support is needed. Contact us to discuss these factors and the services available.",
      },
      {
        question: "Is home care a replacement for emergency medical treatment?",
        answer:
          "No. Home care is not a substitute for emergency services. If someone experiences severe breathing difficulty, chest pain, loss of consciousness, or another medical emergency, seek emergency medical help immediately.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-teal-50 via-white to-teal-100/70 px-5 py-20 sm:py-28">
        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-800">
            <ShieldCheck className="h-4 w-4" />
            HERE TO HELP
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Frequently asked
            <span className="block text-teal-700">questions.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Finding the right care for someone you love can bring up a lot of
            questions. We&apos;re here to make the process clearer.
          </p>

          <Link
            href="#faq-list"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 font-semibold text-white transition hover:bg-teal-800"
          >
            Explore FAQs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Questions */}
      <section id="faq-list" className="scroll-mt-24 px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              YOUR QUESTIONS, ANSWERED
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to know
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Browse the topics below to learn about our services, booking
              process, and care arrangements.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Left information panel */}
            <aside className="h-fit rounded-3xl bg-teal-50 p-7 sm:p-9 lg:sticky lg:top-28">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                <MessageCircle className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Need a little more help?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Every family&apos;s situation is different. Talk to us about
                your requirements, and we&apos;ll help you understand the
                available options.
              </p>

              <div className="mt-7 space-y-3">
                <a
                  href="https://wa.me/919608511491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3 font-semibold text-white transition hover:bg-teal-800"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+919608511491"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-teal-200 bg-white px-5 py-3 font-semibold text-teal-800 transition hover:bg-teal-100"
                >
                  <Phone className="h-4 w-4" />
                  Call our team
                </a>
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-500">
                Please confirm service availability and arrangements with our
                team before booking.
              </p>
            </aside>

            {/* Accordion groups */}
            <div className="space-y-12">
              {faqGroups.map((group, groupIndex) => (
                <div key={group.title}>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {group.description}
                    </p>
                  </div>

                  <Accordion className="w-full">
                    {group.questions.map((faq, index) => (
                      <AccordionItem
                        key={faq.question}
                        value={`${groupIndex}-${index}`}
                        className="border-b border-slate-200"
                      >
                        <AccordionTrigger className="gap-5 py-5 text-left text-base font-semibold text-slate-800 hover:text-teal-700 hover:no-underline sm:text-[17px]">
                          {faq.question}
                        </AccordionTrigger>

                        <AccordionContent className="pb-5 text-sm leading-7 text-slate-600 sm:text-base">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-teal-800 px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
            WE&apos;RE HERE FOR YOU
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s find the right care for your family.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-teal-50/90">
            Have a question that isn&apos;t covered here? Get in touch with our
            team to discuss your care needs.
          </p>

          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-teal-800 transition hover:bg-teal-50"
          >
            Explore our services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
