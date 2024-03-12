import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import Nav from "../../components/Shared/Nav";

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
            </div>{" "}
            <div class="mt-10 text-center border-b pb-12">
              {" "}
              <h1 class="text-4xl font-medium text-gray-700">
                {userData.displayName}
              </h1>{" "}
              <p class="font-light text-gray-600 mt-3"></p>{" "}
              <p class="mt-8 text-gray-500">{userData.position}</p>{" "}
              <p class="mt-2 text-gray-500">{userData.about}</p>{" "}
            </div>{" "}
            <div class="mt-12 flex flex-col justify-center">
              {" "}
              <p class="text-gray-600 text-center font-light lg:px-16">
                {userData.about}
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
