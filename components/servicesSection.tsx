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
    <div className="grid grid-cols-2 sm:grid-cols-3  my-7">
      <h1 className="flex col-span-full justify-center font-bold text-4xl">
        Our Services
      </h1>
      <Card className="bg-orange-300 p-1 m-2 rounded-3xl">
        <p className="icon"></p>
        <CardHeader>
          <CardTitle className="text-lg font-bold">
            01 - Nursing Care at Home
          </CardTitle>
          {/* <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <hr />
        <CardContent>
          <p>
            Professional nursing support for your loved ones, delivered in the
            comfort of home.
          </p>
        </CardContent>
        <Link href="">
          <CardFooter className="hover:bg-orange-100">Book Now</CardFooter>
        </Link>
      </Card>
      <Card className="bg-orange-300 p-1 m-2 rounded-3xl">
        <p className="icon"></p>
        <CardHeader>
          <CardTitle className="text-lg font-bold">
            02 - Attendant Care
          </CardTitle>
          {/* <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <hr />
        <CardContent>
          <p>
            Reliable assistance with daily activities, personal care, mobility,
            and companionship.
          </p>
        </CardContent>
        <Link href="">
          <CardFooter className="hover:bg-orange-100">Book Now</CardFooter>
        </Link>
      </Card>
      <Card className="bg-orange-300 p-1 m-2 rounded-3xl">
        <p className="icon"></p>
        <CardHeader>
          <CardTitle className="text-lg font-bold">03 - Elder Care</CardTitle>
          {/* <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <hr />
        <CardContent>
          <p>
            Compassionate support for elderly family members, helping them live
            safely and comfortably at home.
          </p>
        </CardContent>
        <Link href="">
          <CardFooter className="hover:bg-orange-100">Book Now</CardFooter>
        </Link>
      </Card>
      <Card className="bg-orange-300 p-1 m-2 rounded-3xl">
        <p className="icon"></p>
        <CardHeader>
          <CardTitle className="text-lg font-bold">
            04 - Post-Hospital Care
          </CardTitle>
          {/* <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <hr />
        <CardContent>
          <p>
            Dedicated support during recovery after hospitalization, surgery, or
            illness.
          </p>
        </CardContent>
        <Link href="">
          <CardFooter className="hover:bg-orange-100">Book Now</CardFooter>
        </Link>
      </Card>
      <Card className="bg-orange-300 p-1 m-2 rounded-3xl">
        <p className="icon"></p>
        <CardHeader>
          <CardTitle className="text-lg font-bold">
            05 - Nursing Visits
          </CardTitle>
          {/* <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <hr />
        <CardContent>
          <p>
            A nurse visits the patient&apos;s home for specific nursing needs
            rather than staying for a full shift.
          </p>
        </CardContent>
        <Link href="">
          <CardFooter className="hover:bg-orange-100">Book Now</CardFooter>
        </Link>
      </Card>
      <Card className="bg-orange-300 p-1 m-2 rounded-3xl">
        <p className="icon"></p>
        <CardHeader>
          <CardTitle className="text-lg font-bold">06 - Respite Care</CardTitle>
          {/* <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <hr />
        <CardContent>
          <p>
            Temporary caregiver support that gives family members a break from
            continuous caregiving responsibilities.
          </p>
        </CardContent>
        <Link href="">
          <CardFooter className="hover:bg-orange-100">Book Now</CardFooter>
        </Link>
      </Card>
    </div>
  );
};

export default Services;
