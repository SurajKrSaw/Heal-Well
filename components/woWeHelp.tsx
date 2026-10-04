import Image from "next/image";

const WhoWeHelp = () => {
  return (
    <section className="py-20 mx-auto max-w-7xl px-6">
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold tracking-widest text-green-700">
          WHO WE HELP
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Care for life&apos;s different needs
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Whether your loved one needs temporary support or ongoing care, Heal
          Well is here to help them feel comfortable at home.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/images/who-we-help.jpg"
            alt="Caregiver supporting an elderly person at home"
            width={700}
            height={550}
            className="h-[450px] w-full object-cover"
          />
        </div>

        {/* Situations */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Elderly Parents
            </h3>
            <p className="mt-2 text-slate-600">
              Supporting seniors with everyday needs, comfort, companionship,
              and personal care at home.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Post-Hospital Recovery
            </h3>
            <p className="mt-2 text-slate-600">
              Helping your loved one transition from hospital to home with
              appropriate care and support.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Bedridden Care
            </h3>
            <p className="mt-2 text-slate-600">
              Providing compassionate assistance and everyday support for
              individuals who need extended care at home.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Daily Assistance
            </h3>
            <p className="mt-2 text-slate-600">
              Helping with personal care, mobility, daily routines, and
              companionship when extra support is needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
