/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
//bg-[url('https://picsum.photos/1024/768')]
import bg from "../assets/images/bg.jpg";

export default function Example() {
  return (
    <div className="rounded-sm mb-8 relative w-full mx-auto overflow-hidden">
      <img
        className="absolute inset-0 w-full object-cover"
        style={{ minHeight: "420px" }}
        src={bg}
        alt=""
      />
      <div className="overlay bg-black opacity-50 absolute inset-0"></div>
      <div
        className="max-w-7xl mx-auto flex justify-center items-center"
        style={{ minHeight: "420px" }}
      >
        <div className="relative z-10 text-description px-12 py-8 text-white  text-3xl">
          <h1 className="text-center">
            Professional commercial landscape and fencing services
          </h1>
        </div>
      </div>
    </div>
  );
}
