import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Shared/Nav";
import Footer from "../../components/Shared/Footer";

const Research = () => {
  const navigate = useNavigate();

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["researches"],
    queryFn: async () => {
      const res = await fetch(
        "https://cemrd-online.vercel.app/api/research/allresearch",
        {
          method: "GET",
        }
      );
      const responseData = await res.json();
      return responseData.data;
    },
  });

  const handleViewDetails = (id) => {
    console.log(id);

    navigate(`/research/${id}`);
  };

  return (
    <div>
      <Nav></Nav>
      <div className="my-20">
        {data?.map((research) => (
          <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto space-y-12">
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img
                  src={research.img}
                  alt=""
                  className="h-80 dark:bg-gray-500 aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                  {/* date */}
                  <span className="text-xs uppercase dark:text-gray-400"></span>
                  <a href={research.link} target="blank">
                    <h3 className="text-3xl font-bold">{research.title}</h3>
                  </a>
                  <p className="my-6 dark:text-gray-400">
                    {research.authorName}
                  </p>
                  <button
                    type="button"
                    className="font-semibold self-start text-blue-800"
                    onClick={() => handleViewDetails(research._id)}
                  >
                    See More....
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Research;
