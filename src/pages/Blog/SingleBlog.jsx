import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import Nav from "../../components/Shared/Nav";
import Footer from "../../components/Shared/Footer";

const SingleBlog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log(id);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cemrd-demo-two.vercel.app/api/blog/singleblog/${id}`
        );
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="">
      <Nav></Nav>
      <Container>
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img
              src={data.img1Link}
              alt=""
              className="w-full h-60 sm:h-96 dark:bg-gray-500"
            />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
              <div className="space-y-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block text-2xl font-semibold sm:text-3xl text-white bg-gray-900 p-2"
                >
                  {data.title}
                </a>
                <p className="text-xs dark:text-gray-400">
                  By
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline"
                  >
                    CeMRD
                  </a>
                </p>
              </div>
              <div className="dark:text-gray-100">
                <p>{data.subtile}</p>
              </div>
              <div className="space-y-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block text-2xl font-semibold sm:text-lg"
                >
                  {data.description1}
                </a>
              </div>
              <div className="dark:text-gray-100">
                <p>{data.description2}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default SingleBlog;
