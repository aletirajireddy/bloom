/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
//bg-[url('https://picsum.photos/1024/768')]
export default function Example() {
  return (
    <div className="rounded-sm mb-8 relative w-full mx-auto overflow-hidden">
      <img
        className="absolute inset-0 w-full object-cover"
        src="https://picsum.photos/1024/768"
        alt=""
      />
      <div className="overlay bg-black opacity-50 absolute inset-0"></div>
      <div className="max-w-7xl mx-auto flex justify-end items-center">
        <img
          className="invisible"
          style={{ width: "1px" }}
          src="https://picsum.photos/1/420"
          alt=""
        />
        <div className="relative z-10 text-description px-12 py-8 text-white  text-2xl">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            ducimus voluptatum rerum omnis suscipit aspernatur eos, repellat
            culpa officiis hic, dolorem corrupti minima assumenda earum totam
            quis reiciendis accusamus blanditiis?
          </p>
        </div>
      </div>
    </div>
  );
}
