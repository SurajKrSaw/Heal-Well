const HowItWorks = () => {
  return (
    <section className="bg-teal-50/70 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-teal-700">
            SIMPLE & STRESS-FREE
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-teal-950 md:text-4xl">
            How It Works
          </h2>

          <p className="mt-3 text-base text-slate-600 md:text-lg">
            Getting care for your loved ones is simple.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Step 1 */}
          <div className="group relative rounded-2xl border border-teal-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-md">
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold tracking-wide text-teal-700">
                STEP 1
              </span>

              <span className="text-3xl font-bold text-teal-100 transition-colors group-hover:text-teal-200">
                01
              </span>
            </div>

            <h3 className="text-lg font-semibold text-teal-950">
              Tell Us What You Need
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Share your care requirements and tell us how we can help your
              loved one.
            </p>

            <div className="mt-6 h-1 w-10 rounded-full bg-teal-500 transition-all duration-300 group-hover:w-16" />
          </div>

          {/* Step 2 */}
          <div className="group relative rounded-2xl border border-teal-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-md">
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold tracking-wide text-teal-700">
                STEP 2
              </span>

              <span className="text-3xl font-bold text-teal-100 transition-colors group-hover:text-teal-200">
                02
              </span>
            </div>

            <h3 className="text-lg font-semibold text-teal-950">
              We Understand Your Needs
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              We discuss the patient&apos;s needs, preferences, and the type of
              support required.
            </p>

            <div className="mt-6 h-1 w-10 rounded-full bg-teal-500 transition-all duration-300 group-hover:w-16" />
          </div>

          {/* Step 3 */}
          <div className="group relative rounded-2xl border border-teal-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-md">
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold tracking-wide text-teal-700">
                STEP 3
              </span>

              <span className="text-3xl font-bold text-teal-100 transition-colors group-hover:text-teal-200">
                03
              </span>
            </div>

            <h3 className="text-lg font-semibold text-teal-950">
              We Arrange the Right Care
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              We help arrange suitable care based on your loved one&apos;s
              requirements.
            </p>

            <div className="mt-6 h-1 w-10 rounded-full bg-teal-500 transition-all duration-300 group-hover:w-16" />
          </div>

          {/* Step 4 */}
          <div className="group relative rounded-2xl border border-teal-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-md">
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold tracking-wide text-teal-700">
                STEP 4
              </span>

              <span className="text-3xl font-bold text-teal-100 transition-colors group-hover:text-teal-200">
                04
              </span>
            </div>

            <h3 className="text-lg font-semibold text-teal-950">
              Care Begins at Home
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Your loved one receives the agreed care and support in familiar
              surroundings.
            </p>

            <div className="mt-6 h-1 w-10 rounded-full bg-teal-500 transition-all duration-300 group-hover:w-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
