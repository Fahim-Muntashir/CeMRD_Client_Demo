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
        "https://cemrd-demo-two.vercel.app/api/research/allresearch",
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

    navigate(`/publications/${id}`);
  };

  return (
    <div>
      <Nav></Nav>
      <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div class="container mx-auto">
          <div class="-mx-4 flex flex-wrap">
            {data?.map((research) => (
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-2 overflow-hidden rounded">
                    <a
                      onClick={() => handleViewDetails(research._id)}
                      class="text-dark hover:text-primary inline-block text-lg cursor-pointer font-semibold"
                      target="blank"
                    >
                      {" "}
                      <img
                        src={research.img}
                        alt="image"
                        class="w-full h-52 object-cover"
                      />{" "}
                    </a>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span class="mb-2 inline-block rounded text-center text-normal leading-loose ">
                        {research.date}
                      </span>
                      <span className="me-16">in {research.vanue}</span>
                    </div>
                    <h3>
                      <a
                        href={research.link}
                        class="text-dark hover:text-primary mb-2 inline-block text-lg font-semibold"
                        target="blank"
                      >
                        {research.title}
                      </a>
                    </h3>
                    <p class="text-body-color text-base">
                      By {research.authorName}
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
            ))}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Research;
