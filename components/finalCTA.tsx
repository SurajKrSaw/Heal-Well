import { Button } from "@base-ui/react";

const FinalCTA = () => {
  return (
    <section className="flex flex-col items-center py-6 mx-auto max-w-7xl">
      <h4 className="my-2 font-bold text-green-800">
        NEED CARE FOR YOUR LOVED ONE?
      </h4>
      <h2 className="text-xl sm:text-2xl md:text-3xl">
        We&apos;re here to help you find the right support at home.{" "}
      </h2>
      <div className="py-8">
        <Button className="mx-1 py-3 px-4 bg-teal-300 rounded-4xl hover:bg-teal-400">
          Request Care
        </Button>
        <Button className="mx-1 py-3 px-4 bg-teal-300 rounded-4xl hover:bg-teal-400">
          Talk to us
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
