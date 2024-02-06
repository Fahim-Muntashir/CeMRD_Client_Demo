import { Link } from "react-router-dom";
import CommonHeading from "../../components/Shared/CommonHeading";

const Challange = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <CommonHeading
        title={"The Best Research by Us"}
        description={
          "Join us on a concise journey through innovation and excellence in Here are the Best Challenging Research That We Have Successfully Done."
        }
      ></CommonHeading>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <Link to={"/research/658fa1a818a2ede1b63a8387"}>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                13 Jul 2020
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  Climate Change Mitigation
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                Propose innovative methods to reduce carbon emissions and combat
                climate change.
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/research/658fa1ac18a2ede1b63a8389"}>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                4 Nov 2020
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  Space Exploration
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                Explore new frontiers in space and propose advancements in space
                travel technology.
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/research/65abcb984cf355b5c2329141"}>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D"
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                28 Dec 2020
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  Cybersecurity in the Age of Artificial Intelligenc{" "}
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                Investigating the evolving landscape of cybersecurity threats
                and the role of AI in enhancing digital defense strategies
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Challange;
