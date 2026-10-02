const HowItWorks = () => {
  return (
    <section className="py-4 bg-green-200">
      <h1 className="flex col-span-full justify-center font-bold text-2xl ">
        HOW IT WORKS
      </h1>
      <h4 className="flex col-span-full justify-center text-green-900 pb-3">
        Getting care is simple.
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col items-center border-1 border-black rounded-md m-1 p-3 bg-cyan-100">
          <p className="font-bold text-lg">1.</p>
          <p className="font-bold text-lg text-green-900">
            Tell us what you need
          </p>
          <p> Share your care requirement</p>
        </div>
        <div className="flex flex-col items-center border-1 border-black rounded-md m-1 p-3 bg-cyan-100">
          <p className="font-bold text-lg">2.</p>
          <p className="font-bold text-lg text-green-900">
            We understand your need
          </p>
          <p>We discuss the patient&apos;s need for you</p>
        </div>
        <div className="flex flex-col items-center border-1 border-black rounded-md m-1 p-3 bg-cyan-100">
          <p className="font-bold text-lg">3.</p>
          <p className="font-bold text-lg text-green-900">
            We arrang the right care
          </p>
          <p>We arrange suitable support.</p>
        </div>
        <div className="flex flex-col items-center border-1 border-black rounded-md m-1 p-3 bg-cyan-100">
          <p className="font-bold text-lg">4.</p>
          <p className="font-bold text-lg text-green-900">
            Care begins at home
          </p>
          <p>Your loved one recieves care at home.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
