export default function HighlightStrip() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 my-2 gap-1 mx-1">
      <div className="flex flex-col border-l-3 border-r-1  border-teal-500 border-black px-2 rounded-lg py-4 items-center text-center">
        <p className="">🏠</p>
        <h6 className="font-bold text-lg text-teal-600">Care at Home</h6>
        <p className=" mt-2">Comfort in familiar surroundings</p>
      </div>
      <div className="flex flex-col border-l-1 border-r-3 sm:border-r-1 border-teal-500 border-black px-2 rounded-lg py-4 items-center text-center">
        <p>❤️</p>
        <h6 className="font-bold text-lg text-teal-600">Personal Care</h6>
        <p className=" mt-2">Care tailored to individual needs</p>
      </div>
      <div className="flex flex-col border-l-3 border-r-1 sm:border-l-1 border-teal-500 border-black px-2 rounded-lg py-4 items-center text-center">
        <p>🤝</p>
        <h6 className="font-bold text-lg text-teal-600">Family Focused</h6>
        <p>Putting your loved ones first</p>
      </div>
      <div className="flex flex-col border-l-1 border-r-3 border-teal-500 border-black px-2 rounded-lg py-4 items-center text-center">
        <p>👩‍⚕️</p>
        <h6 className="font-bold text-lg text-teal-600">Professional Care</h6>
        <p className=" mt-2">Compassionate care you can rely on</p>
      </div>
    </section>
  );
}
