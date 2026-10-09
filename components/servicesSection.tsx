import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Services = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Heading */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-base font-bold tracking-widest text-teal-700">
          OUR SERVICES
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-teal-950 md:text-4xl">
          Care designed around your needs
        </h1>

        <p className="mx-auto mt-1 max-w-2xl text-xs leading-6 text-slate-600 md:text-sm">
          From professional nursing to everyday assistance, Heal Well provides
          compassionate care for your loved ones at home.
        </p>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Nursing Care */}
        <Card className="group flex h-full flex-col rounded-2xl border-teal-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-teal-50 hover:shadow-md">
          <CardHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-white">
              ✚
            </div>
            <CardTitle className="text-lg font-semibold text-teal-950">
              Nursing Care at Home
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 text-sm leading-6 text-slate-600">
            <p>
              Professional nursing support for your loved ones, delivered in the
              comfort of home.
            </p>
          </CardContent>

          <CardFooter className="rounded-b-2xl transition-colors group-hover:bg-teal-200">
            <Link
              href=""
              className="text-sm font-semibold text-teal-700 transition-colors group-hover:text-teal-900"
            >
              Book Now <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>

        {/* Attendant Care */}
        <Card className="group flex h-full flex-col rounded-2xl border-teal-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-teal-50 hover:shadow-md">
          <CardHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-white">
              ♡
            </div>
            <CardTitle className="text-lg font-semibold text-teal-950">
              Attendant Care
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 text-sm leading-6 text-slate-600">
            <p>
              Reliable assistance with daily activities, personal care,
              mobility, and companionship.
            </p>
          </CardContent>

          <CardFooter className="rounded-b-2xl transition-colors group-hover:bg-teal-200">
            <Link
              href=""
              className="text-sm font-semibold text-teal-700 transition-colors group-hover:text-teal-900"
            >
              Book Now <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>

        {/* Elder Care */}
        <Card className="group flex h-full flex-col rounded-2xl border-teal-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-teal-50 hover:shadow-md">
          <CardHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-white">
              ♧
            </div>
            <CardTitle className="text-lg font-semibold text-teal-950">
              Elder Care
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 text-sm leading-6 text-slate-600">
            <p>
              Compassionate support for elderly family members, helping them
              live safely and comfortably at home.
            </p>
          </CardContent>

          <CardFooter className="rounded-b-2xl transition-colors group-hover:bg-teal-200">
            <Link
              href=""
              className="text-sm font-semibold text-teal-700 transition-colors group-hover:text-teal-900"
            >
              Book Now <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>

        {/* Post-Hospital Care */}
        <Card className="group flex h-full flex-col rounded-2xl border-teal-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-teal-50 hover:shadow-md">
          <CardHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-white">
              +
            </div>
            <CardTitle className="text-lg font-semibold text-teal-950">
              Post-Hospital Care
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 text-sm leading-6 text-slate-600">
            <p>
              Dedicated support during recovery after hospitalization, surgery,
              or illness.
            </p>
          </CardContent>

          <CardFooter className="rounded-b-2xl transition-colors group-hover:bg-teal-200">
            <Link
              href=""
              className="text-sm font-semibold text-teal-700 transition-colors group-hover:text-teal-900"
            >
              Book Now <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>

        {/* Nursing Visits */}
        <Card className="group flex h-full flex-col rounded-2xl border-teal-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-teal-50 hover:shadow-md">
          <CardHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-white">
              ⏱
            </div>
            <CardTitle className="text-lg font-semibold text-teal-950">
              Nursing Visits
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 text-sm leading-6 text-slate-600">
            <p>
              A nurse visits the patient&apos;s home for specific nursing needs
              rather than staying for a full shift.
            </p>
          </CardContent>

          <CardFooter className="rounded-b-2xl transition-colors group-hover:bg-teal-200">
            <Link
              href=""
              className="text-sm font-semibold text-teal-700 transition-colors group-hover:text-teal-900"
            >
              Book Now <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>

        {/* Respite Care */}
        <Card className="group flex h-full flex-col rounded-2xl border-teal-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-teal-50 hover:shadow-md">
          <CardHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-white">
              ♡
            </div>
            <CardTitle className="text-lg font-semibold text-teal-950">
              Respite Care
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 text-sm leading-6 text-slate-600">
            <p>
              Temporary caregiver support that gives family members a break from
              continuous caregiving responsibilities.
            </p>
          </CardContent>

          <CardFooter className="rounded-b-2xl transition-colors group-hover:bg-teal-200">
            <Link
              href=""
              className="text-sm font-semibold text-teal-700 transition-colors group-hover:text-teal-900"
            >
              Book Now <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Services;
