export default function Home() {
  return (
    <main>
      <section className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
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
              <button className="rounded-full px-6 py-3 font-medium">
                Book a Nurse
              </button>

              <button className="rounded-full border px-6 py-3 font-medium">
                Talk to Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
