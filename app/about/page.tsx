import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, House } from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Compassion first",
    description:
      "We believe every person deserves patience, kindness, dignity, and respect.",
  },
  {
    icon: House,
    title: "Care at home",
    description:
      "We help families explore care options in the comfort of their own homes.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & transparency",
    description:
      "We value honest communication so families can make informed care decisions.",
  },
];

export default function AboutSection() {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: Visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-tl-[3rem] border-l-2 border-t-2 border-teal-300 sm:-left-7 sm:-top-7" />

            <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 p-8 sm:min-h-[470px] sm:p-12">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-5 -top-5 h-44 w-44 rounded-full border border-white/10" />
              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-teal-50">
                  Meet the person behind Heal Well
                </span>

                <div className="mt-12 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-3xl font-bold text-white ring-1 ring-white/20 sm:h-24 sm:w-24 sm:text-4xl">
                  SK
                </div>

                <h3 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                  Sanjay Kumar
                </h3>

                <p className="mt-2 text-lg text-teal-100">Founder, Heal Well</p>
              </div>

              <div className="relative mt-12 border-t border-white/20 pt-6">
                <p className="max-w-sm text-lg leading-8 text-white/90">
                  Building a more caring experience for families seeking support
                  at home.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 -z-0 h-24 w-24 rounded-br-[2rem] border-b-2 border-r-2 border-teal-300 sm:-bottom-7 sm:-right-5" />
          </div>

          {/* Right: About content */}
          <div>
            <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
              ABOUT HEAL WELL
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Care that feels closer to{" "}
              <span className="text-teal-700">home.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Heal Well was created with a simple purpose: to help families find
              compassionate care and support for their loved ones at home.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Led by Sanjay Kumar, Heal Well aims to make the process of finding
              care more personal, approachable, and easier to understand. We
              believe families deserve clear communication and care arrangements
              that respect each person&apos;s needs and dignity.
            </p>

            <div className="mt-9 space-y-6">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div key={value.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 font-semibold text-white transition hover:bg-teal-800"
            >
              More about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
