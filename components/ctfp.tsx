// Care That Feels Personal
import Image from "next/image";
const Ctfp = () => {
  return (
    <div className="mx-auto my-16 grid max-w-7xl items-center gap-8 px-6 md:grid-cols-2 md:gap-12">
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          alt="Compassionate home healthcare"
          src="/Ctfp.jpg"
          width={700}
          height={500}
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="py-2">
        <p className="mb-3 text-sm font-bold tracking-widest text-teal-700">
          CARE THAT FEELS PERSONAL
        </p>

        <h2 className="text-3xl font-bold leading-tight tracking-tight text-teal-950 md:text-4xl">
          Because good care is more than just assistance.
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 md:text-base">
          Every person deserves care that feels safe, respectful, and personal.
          We bring compassionate support into the comfort of your home.
        </p>

        <ul className="mt-6 space-y-4">
          <li className="flex items-center gap-3 text-slate-700">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">
              ✓
            </span>
            <span className="font-medium">Compassion in every interaction</span>
          </li>

          <li className="flex items-center gap-3 text-slate-700">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">
              ✓
            </span>
            <span className="font-medium">
              Care tailored to individual needs
            </span>
          </li>

          <li className="flex items-center gap-3 text-slate-700">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">
              ✓
            </span>
            <span className="font-medium">Comfort and dignity at home</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Ctfp;
