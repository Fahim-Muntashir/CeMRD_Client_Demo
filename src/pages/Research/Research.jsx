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
      <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div class="container mx-auto">
          <div class="-mx-4 flex flex-wrap">
            {data?.map((research) => (
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
                      alt="image"
                      class="w-full"
                    />
                  </div>
                  <div>
                    <span class="mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose">
                      Mar 15, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        How to earn more money as a wellness coach
                      </a>
                    </h3>
                    <p class="text-body-color text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
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
