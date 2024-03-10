import Container from "../../components/Shared/Container";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGoogle,
  FaGraduationCap,
  FaFlask,
} from "react-icons/fa";

const Moon = () => {
  return (
    <Container>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col lg:w-[60%] justify-center p-6 text-center text-justify rounded-sm  lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-6xl">
              Mahmudul Hasan
            </h1>
            <p className="mt-6 mb-5 text-lg sm:text-center lg:text-left sm:mb-5">
              Mahmudul Hasan (Moon), a Ph.D. student at Deakin University,
              Australia, is a multifaceted academic and researcher specializing
              in IT. He's also a prolific instructor, writer, and photographer,
              known for his work in various domains including Python, Data
              Science, and Cybersecurity. Hasan founded CeMRD, a research hub,
              and is recognized for his contributions to academia and society.
            </p>
            <div className="flex mb-5 sm:justify-center text-2xl lg:justify-start space-x-2 my-5">
              <a href="">
                {" "}
                <FaFacebookSquare className="text-blue-600" />
              </a>
              <a href="">
                {" "}
                <FaLinkedin className="text-blue-800 ml-4" />
              </a>
              <a href="">
                {" "}
                <FaGoogle className="text-red-600 ml-4" />
              </a>
              <a href="">
                {" "}
                <FaGraduationCap className="text-green-600 ml-4" />
              </a>
              <a href="">
                <FaFlask className="text-purple-600 ml-4" />
              </a>{" "}
            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded bg-blue-900 text-white"
              >
                Download CV
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                See More
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://i.ibb.co/QC44RFW/MSc-Defence-Propic.jpg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Moon;
