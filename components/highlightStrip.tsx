export default function HighlightStrip() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 my-2 mx-auto">
      <div className="flex flex-col bg-emerald-400  rounded-2xl py-6 items-center">
        <p className="">🏠</p>
        <h6>Care at Home</h6>
        <p>Comfort in familiar surroundings</p>
      </div>
      <div className="flex flex-col bg-emerald-400  rounded-2xl  py-6 items-center">
        <p>❤️</p>
        <h6>Personal Care</h6>
        <p>Care tailored to individual needs</p>
      </div>
      <div className="flex flex-col bg-emerald-400  rounded-2xl  py-6 items-center">
        <p>🤝</p>
        <h6>Family Focused</h6>
        <p>Putting your loved ones first</p>
      </div>
      <div className="flex flex-col bg-emerald-400  rounded-2xl  py-6 items-center">
        <p>👩‍⚕️</p>
        <h6>Professional Care</h6>
        <p>Compassionate care you can rely on</p>
      </div>
    </section>
  );
}
