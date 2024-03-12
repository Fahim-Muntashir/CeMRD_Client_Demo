import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../../components/Shared/Nav";
import Footer from "../../components/Shared/Footer";
import Container from "../../components/Shared/Container";

const Blog = () => {
  const router = useNavigate();

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["researches"],
    queryFn: async () => {
      const res = await fetch(
        "https://cemrd-online.vercel.app/api/blog/allblog",
        {
          method: "GET",
        }
      );
      const responseData = await res.json();
      return responseData.data;
    },
  });

  console.log(data);

  const handleViewDetails = (id) => {
    console.log(id);

    router(`/blog/${id}`);
  };

  return (
    <div>
      <Nav></Nav>
      <Container>
        <section className="my-16">
          <div className="container max-w-6xl mx-auto space-y-6 sm:space-y-12">
            <a
              rel="noopener noreferrer"
              href="#"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
            >
              <img
                src="https://source.unsplash.com/random/480x360"
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                  Noster tincidunt reprimique ad pro
                </h3>
                <span className="text-xs text-gray-400">February 19, 2021</span>
                <p>
                  Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                  in graece fuisset, eos affert putent doctus id.
                </p>
              </div>
            </a>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data?.map((blog) => (
                <a
                  onClick={() => handleViewDetails(blog._id)}
                  key={blog}
                  rel="noopener noreferrer"
                  href="#"
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline  hidden sm:block"
                >
                  <img
                    role="presentation"
                    className="object-cover w-full rounded h-44 bg-gray-500"
                    src={blog.img1Link}
                  />
                  <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      {blog.title}
                    </h3>
                    <span className="text-xs text-gray-400">
                      January 26, 2021
                    </span>
                    <p>{blog.description1.slice(0, 140)}....</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-md hover:underline bg-blue-900 font-bold text-white"
              >
                Load more posts...
              </button>
            </div>
          </div>
        </section>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
