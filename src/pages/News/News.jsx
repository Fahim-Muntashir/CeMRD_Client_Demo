import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Shared/Nav";

const News = () => {
  const router = useNavigate();

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["researches"],
    queryFn: async () => {
      const res = await fetch(
        "https://cemrd-online.vercel.app/api/news/allnews",
        {
          method: "GET",
        }
      );
      const responseData = await res.json();
      return responseData.data;
    },
  });

  console.log(data);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const handleViewDetails = (id) => {
    console.log(id);

    router(`/news/${id}`);
  };

  return (
    <div>
      <Nav></Nav>
      <div className="max-w-screen-xl p-5 my-20 mx-auto  text-gray-100">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
          {data?.map((news) => (
            <a
              onClick={() => handleViewDetails(news._id)}
              key={news}
              rel="noopener noreferrer"
              href="#"
              className=""
            >
              <div
                className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
                style={{
                  backgroundImage: `url("${news.img1Link}")`, // Use backticks for string interpolation
                }}
              >
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined"
                  >
                    Politics
                  </a>
                  <div className="flex flex-col justify-start text-center dark:text-gray-100">
                    {formatDate(news.date)}

                    {/* <span className="text-3xl font-semibold leadi tracki">
                    04
                  </span>
                  <span className="leadi uppercase">Aug</span> */}
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-medium text-md hover:underline dark:text-gray-100"
                  >
                    {news.title}
                  </a>
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
