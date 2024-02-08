import { Link } from "react-router-dom";
import Member from "./Member";
import Adviser from "./Adviser";
import Nav from "../../components/Shared/Nav";
const Team = () => {
  const phoneNumber = "+8801762775529"; // Replace with the desired WhatsApp number

  return (
    <div>
      <Nav></Nav>
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {" "}
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              {" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-xl">222</p>{" "}
                <p className="text-gray-400">Reasearch Paper</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-xl">300</p>{" "}
                <p className="text-gray-400">Contribute</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-xl">200</p>{" "}
                <p className="text-gray-400">Accepted Successfully</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative">
              <img
                className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500 object-cover"
                src="https://i.ibb.co/QC44RFW/MSc-Defence-Propic.jpg"
                alt=""
              />
            </div>{" "}
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <Link
                to={"https://www.linkedin.com/in/mahmudul-hasan-moon/"}
                className="text-white py-6 px-4 uppercase rounded bg-blue-500 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                target="blank"
              >
                {" "}
                Connect
              </Link>{" "}
              <Link
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white py-6 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Message
              </Link>
            </div>{" "}
          </div>{" "}
          <div className="mt-20 text-center border-b pb-12">
            {" "}
            <h1 className="text-4xl font-medium text-gray-700">
              Mahmudul Hasan Moon,{" "}
              <span className="font-light text-gray-500">27</span>
            </h1>{" "}
            <p className="font-light text-gray-600 mt-3">Rangpur, Bangladesh</p>{" "}
            <p className="mt-8 text-gray-500">
              Founder & Chef Researcher Of CeMRD
            </p>{" "}
            <p className="mt-2 text-gray-500">
              {" "}
              PhD Researcher at Deakin University, Melbourne, Victoria,
              Australia{" "}
            </p>{" "}
          </div>{" "}
          <div className="mt-12 flex flex-col justify-center">
            {" "}
            <p className="text-gray-600 text-center font-light lg:px-16">
              Mahmudul Hasan founded the Center for Multidisciplinary Research
              and Development (CeMRD), which helps research enthusiastic people
              to complete their goals. More than 40 researchers are working in
              the Lab, and more than ten research articles have already been
              published there.
            </p>{" "}
            <Link
              to={"https://staywithmoon.com/"}
              className="text-indigo-500 py-2 px-4 text-center font-medium mt-4"
              target="blank"
            >
              {" "}
              Visit Website
            </Link>{" "}
          </div>
        </div>
      </div>
      <Adviser></Adviser>
      <Member></Member>
    </div>
  );
};

export default Team;
