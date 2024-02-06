import React from "react";

const Statistic = () => {
  return (
    <div className="bg-gray-100">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              15+
            </h6>
            <p className="mb-2 font-bold text-md">Total Research</p>
            <p className="text-gray-700">
              CeMRD has conducted over 15 research projects, aiming to drive
              innovation and knowledge advancement.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              2805+
            </h6>
            <p className="mb-2 font-bold text-md">Youtube</p>
            <p className="text-gray-700">
              CeMRD has a strong online presence with over 2805 subscribers on
              YouTube, where valuable insights and research findings are shared.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              40+
            </h6>
            <p className="mb-2 font-bold text-md">Members</p>
            <p className="text-gray-700">
              CeMRD has a dedicated team of over 40 members contributing their
              expertise to various research endeavors.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              6+
            </h6>
            <p className="mb-2 font-bold text-md">Running Projects</p>
            <p className="text-gray-700">
              CeMRD is actively managing 6+ ongoing projects, each contributing
              to advancements in various fields of study.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
