/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";

const links = [
  {
    name: "facebook",
    href: "#",
    target: "_blank",
    icon: (
      <svg
        className="w-7 h-7 text-blue-600 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "twitter",
    href: "#",
    target: "_blank",
    icon: (
      <svg
        className="w-7 h-7 text-blue-300 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    name: "linkedin",
    href: "#",
    target: "_blank",
    icon: (
      <svg
        className="w-7 h-7 text-blue-500 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
      </svg>
    ),
  },
  {
    name: "pintrest",
    href: "#",
    target: "_blank",
    icon: (
      <svg
        className="w-7 h-7 text-pink-600 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
      </svg>
    ),
  },
];

export default function Example() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="mt-8 relative py-8 border-t border-gray-600 border-neutral4">
      {/* Svg logo */}
      <div className="absolute top-2 md:top-5 lg:top-15 right-2 md:right-18 z-10 text-primary-base">
        <button onClick={goToTop}>
          <svg
            className="w-10 md:w-12 h-10 md:h-12"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="24.1088"
              cy="24"
              rx="23.9363"
              ry="24"
              fill="currentColor"
            />
            <path
              d="M17.1273 23L24.1088 16L31.0902 23M17.1273 31L24.1088 24L31.0902 31"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto flex flex-wrap md:justify-between">
        <nav
          className={`flex w-full mb-5 md:mb-0 md:w-auto text-center justify-evenly`}
          aria-label="Footer"
        >
          {links?.map((item) => (
            <div key={item?.name} className="flex mr-4">
              <a href={item?.href} target={item?.target} className="text-text">
                {item?.icon}
              </a>
            </div>
          ))}
        </nav>

        {/* copyright text */}
        <div className="text-center w-full md:w-auto m-0 text-black text-sm font-normal leading-6">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
