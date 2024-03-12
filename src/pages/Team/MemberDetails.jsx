import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import Nav from "../../components/Shared/Nav";
import {
  FaFacebookSquare,
  FaFlask,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
} from "react-icons/fa";

function Page() {
  const [researchData, setResearchData] = useState([]);
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const [userData, setUserData] = useState({
    imgUrl: "",
    displayName: "",
    about: "",
  });

  const [linkedin, setLinkedin] = useState("");
  const [googleScholar, setGoogleScholar] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");

  console.log(researchData);

  useEffect(() => {
    const getMemberProfileData = async () => {
      try {
        const response = await fetch(
          `https://cemrd-online.vercel.app/api/member/findmemberbyemail?email=${email}`
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data.data);
          setUserData(data.data);
          setLinkedin(data.data.linkedin || "");
          setGoogleScholar(data.data.googleScholar || "");
          setAddress(data.data.address || "");
          setAbout(data.data.about || "");
          console.log("Profile data fetched successfully");
        } else {
          console.error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error("Error fetching profile data", error);
      }
    };

    const getMemberResearch = async () => {
      try {
        const response = await fetch(
          `https://cemrd-online.vercel.app/api/memberresearch/getresearch/${email}`
        );

        if (response.ok) {
          const data = await response.json();
          setResearchData(data.data);
        } else {
          console.error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error("Error fetching profile data", error);
      }
    };

    if (email) {
      getMemberProfileData();
      getMemberResearch();
    }
  }, [email]);

  const handleTitleClick = (link) => {
    if (typeof window !== "undefined") {
      window.open(link, "_blank");
    }
  };

  return (
    <>
      <Nav></Nav>
      <Container>
        <div className="">
          <div class="p-8 bg-white shadow">
            {" "}
            <div class="">
              {" "}
              <div class="text-center order-last md:order-first md:mt-0">
                {" "}
                <img
                  className="mx-auto object-cover w-[200px] h-[200px] rounded-full"
                  src={userData.imgUrl}
                  alt="Person"
                />
              </div>{" "}
              <div className="flex justify-center mt-4 pt-2 space-x-4 align-center">
                <a href={userData.github}>
                  {" "}
                  <FaGithub className="text-black-600" />
                </a>
                <a href={userData.linkedin} target="blank">
                  {" "}
                  <FaLinkedin className="text-blue-800 ml-4" />
                </a>
                <a href={userData.googleScholar} target="blank">
                  {" "}
                  <FaGraduationCap className="text-green-600 ml-4" />
                </a>
                <a href={userData.researchGate} target="blank">
                  <FaFlask className="text-purple-600 ml-4" />
                </a>{" "}
              </div>
            </div>{" "}
            <div class="mt-3 text-center border-b pb-12">
              {" "}
              <h1 class="text-4xl font-medium text-gray-700">
                {userData.displayName}
              </h1>{" "}
              <p class="font-light text-gray-600 "></p>{" "}
              <p class="mt-8 text-gray-500">{userData.position}</p>{" "}
              <p class="mt-2 text-gray-500">{userData.about}</p>{" "}
            </div>{" "}
          </div>
        </div>

        <div className="mt-32">
          <h1 className="text-xl font-bold text-center">Researches</h1>
          {researchData.map((item, index) => (
            <div key={item._id} className="mb-4">
              <h3
                onClick={() => handleTitleClick(item.link)}
                style={{ cursor: "pointer", color: "black" }}
                className="font-semibold text-xl"
              >
                {`${index + 1}. ${item.title}`}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
export default Page;
