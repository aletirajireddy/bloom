/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";

export default function Example() {
  return (
    <div>
      <div className="rounded-md border bg-neutral-50 flex flex-wrap md:flex-nowrap items-center w-full justify-center mx-auto">
        <div className="left p-7 w-full md:basis-1/2">
          <h2 className="text-black font-bold text-4xl">
            Lorem ipsum dolor sit amet.{" "}
            <span className="text-blue-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </h2>
          <p className="pt-3 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
            unde amet? Culpa blanditiis aperiam a.
          </p>
          <button className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Get started
          </button>
        </div>
        <div className="right w-full md:basis-1/2 bg-pic1 bg-cover">
          <img
            className="invisible"
            src="https://picsum.photos/300/500"
            alt=""
          />
        </div>
      </div>
      <div className="rounded-md border bg-neutral-50 flex flex-wrap md:flex-nowrap items-center w-full justify-center mx-auto">
        <div className="left w-full md:basis-1/2 bg-pic2 bg-cover">
          <img
            className="invisible"
            src="https://picsum.photos/300/500"
            alt=""
          />
        </div>
        <div className="right p-7 w-full md:basis-1/2">
          <h2 className="text-black font-bold text-4xl">
            Lorem ipsum dolor sit amet.{" "}
            <span className="text-blue-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </h2>
          <p className="pt-3 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
            unde amet? Culpa blanditiis aperiam a.
          </p>
          <button className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
