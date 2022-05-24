/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
  GlobeIcon,
  AcademicCapIcon,
  StatusOnlineIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "MISSION",
    description:
      "Blooming Landscapes aims to be a responsible provider of total landscape solutions; committed to providing high quality, sustainable landscaping within a safe and harmonies working environment.",
    icon: GlobeAltIcon,
  },
  {
    name: "VISION",
    description:
      "PEOPLE Provide a safe and aspirational environment for all our team members.",
    icon: ScaleIcon,
  },
  {
    name: "VALUES",
    description:
      "At Blooming Landscapes, our values have been developed over the last few years of operation. Leadership, Passion, Integrity, Accountability, Collaboration, Sustainability, Quality, Safety, Creativity, Client Satisfaction, Innovation, Development of Team, Respect.",
    icon: LightningBoltIcon,
  },
  {
    name: "COMMUNITY",
    description: 'Cooperative team approach "one vision one team".',
    icon: AnnotationIcon,
  },
  {
    name: "ENVIRONMENT",
    description: "Produce sustainable landscape solutions.",
    icon: GlobeIcon,
  },
  {
    name: "PRIDE",
    description: "Operate with dignity and respect.",
    icon: AcademicCapIcon,
  },
  {
    name: "PRODUCTION",
    description: "Always improve efficiencies and methodology.",
    icon: StatusOnlineIcon,
  },
];

export default function Example() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            APPROACH
          </h2>
          <p className="mt-2 text-xl md:text-2xl font-extrabold tracking-tight text-gray-900">
            MISSION, VISION + VALUES
          </p>
          <div className="mt-4 text-gray-500 mx-auto md:w-4/5">
            Blooming Landscapes are committed to constructing quality landscape
            solutions with over 30 years of experience delivering award winning
            projects. The team of experienced professional staff at blooming
            Landscapes have the management systems in place and understand the
            construction processes required for the successful completion of
            commercial landscaping projects.
          </div>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
