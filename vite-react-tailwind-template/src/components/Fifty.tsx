/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpg";

export default function Example() {
  return (
    <div>
      <div className="rounded-md border bg-neutral-50 flex flex-wrap md:flex-nowrap items-center w-full justify-center mx-auto">
        <div className="left p-7 w-full md:basis-1/2">
          <h2 className="text-black font-bold text-4xl">
            Blooming Landscapes have developed a team of Melbourne Landscapers
            <span className="text-blue-700">
              &nbsp; specialised in Commercial Landscaping.
            </span>
          </h2>
          <p className="pt-4 text-lg">
            With over 20 expert full-time staff, the team have the knowledge and
            experience to supply and construct landscaping solution for
            builders, developers, landscape architects and designers. Delivered
            on time and on budget Blooming Landscapes will work with you to
            develop the best landscaping solution for your
          </p>
        </div>
        <div className="right w-full md:basis-1/2">
          <img className="" src={pic1} alt="" />
        </div>
      </div>
      <div className="rounded-md border bg-neutral-50 flex flex-wrap md:flex-nowrap items-center w-full justify-center mx-auto">
        <div className="left w-full md:basis-1/2 order-2 md:-order-1">
          <img className="" src={pic2} alt="" />
        </div>
        <div className="right p-7 w-full md:basis-1/2">
          <h2 className="text-black font-bold text-4xl">
            Blooming Landscapes maintain a team of
            <span className="text-blue-700">
              &nbsp; high quality professionals
            </span>
          </h2>
          <p className="pt-4 text-lg">
            and pride themselves on their Occupational Health & Safety
            practices. All projects are closely overseen by the Project Manager
            to ensure landscaping construction of the highest standard.
          </p>
        </div>
      </div>
    </div>
  );
}
