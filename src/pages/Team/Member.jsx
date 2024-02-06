import { useQuery } from "react-query";
import { BsLinkedin } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import MemberDetails from "./MemberDetails";
import { Link, useNavigate } from "react-router-dom";

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
            <div>
              <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src={profile.imgUrl}
                  alt="Person"
                />
              </div>
              <div className="flex flex-col sm:text-center">
                <p className="text-lg font-bold">{profile.displayName}</p>
                <p className="mb-5 text-xs text-gray-800">Research Member</p>
                <div className="flex items-center space-x-3 sm:justify-center">
                  <a
                    href={profile.linkedin}
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    target="blank"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href={"googleScholar"}
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    target="blank"
                  >
                    <SiGooglescholar />
                  </a>
                </div>
                <Link
                  to={`/team/memberdetails?email=${encodeURIComponent(
                    profile.email
                  )}&id=${encodeURIComponent(profile._id)}`}
                >
                  Go to Member Details Page
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
