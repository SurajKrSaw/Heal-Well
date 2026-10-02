// Care That Feels Personal
import Image from "next/image";
const Ctfp = () => {
  return (
    <div className="grid sm:grid-cols-2 px-4 my-8">
      <Image
        className="px-2"
        alt="Homecare"
        src="/Ctfp.jpg"
        width={500}
        height={400}
      ></Image>

      <div className="px-2">
        <h3 className="text-xl font-bold">CARE THAT FEELS PERSONAL</h3>
        <h4 className="text-teal-900">
          Because good care is more than just assistance.
        </h4>
        <ul className="list-disc list-inside marker:text-teal-600 text-teal-800">
          <li>Compassion</li>
          <li>Personal Attention</li>
          <li>Comfort at Home </li>
        </ul>
      </div>
    </div>
  );
};

export default Ctfp;
