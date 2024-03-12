import { useQuery } from "react-query";
import { BsLinkedin } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import MemberDetails from "./MemberDetails";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebookSquare,
  FaFlask,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
} from "react-icons/fa";

const Member = () => {
  const router = useNavigate();
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["profiles"],
    queryFn: async () => {
      const res = await fetch(
        "https://cemrd-online.vercel.app/api/member/allmemberprofile",
        {
          method: "GET",
        }
      );
      const responseData = await res.json();
      return responseData.data;
    },
  });
  const handleViewDetails = (email) => {
    router.push({
      pathname: "/team/[id]/page",
      query: { email: email },
    });
  };
  console.log(data);

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Discover Our Team
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Our exceptional team's unwavering support and dedication have
            brought us to this success.
          </p>
        </div>
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          {data?.map((profile) => (
            <div key={profile}>
              <div className="relative pb-56 mb-4 rounded  lg:pb-64 shadow-lg">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src={profile.imgUrl}
                  alt="Person"
                />
              </div>
              <div className="flex flex-col sm:text-center">
                <p className="text-xl font-bold">{profile.displayName}</p>
                <p className="mb-5 text-sm text-gray-800">{profile.position}</p>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                  <a href={profile.github}>
                    {" "}
                    <FaGithub className="text-black-600" />
                  </a>
                  <a href={profile.linkedin} target="blank">
                    {" "}
                    <FaLinkedin className="text-blue-800 ml-4" />
                  </a>
                  <a href={profile.googleScholar} target="blank">
                    {" "}
                    <FaGraduationCap className="text-green-600 ml-4" />
                  </a>
                  <a href={profile.researchGate} target="blank">
                    <FaFlask className="text-purple-600 ml-4" />
                  </a>{" "}
                </div>
                <Link
                  className="mt-3 border font-semibold text-gray-800 hover:text-gray-900 hover:border-gray-950 text-center transition-all"
                  to={`/team/memberdetails?email=${encodeURIComponent(
                    profile.email
                  )}&id=${encodeURIComponent(profile._id)}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Member;
