import { useQuery } from "react-query";

const ManageBlog = () => {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["researches"],
    queryFn: async () => {
      const res = await fetch(
        "https://cemrd-demo-two.vercel.app/api/blog/allblog",
        {
          method: "GET",
        }
      );
      const responseData = await res.json();
      return responseData.data;
    },
  });

  const handleDelete = async (id) => {
    try {
      // Fetch the delete API with the provided id
      await fetch(
        `https://cemrd-demo-two.vercel.app/api/blog/deleteblog/${id}`,
        {
          method: "DELETE",
        }
      );

      // After deletion, refetch the data to update the UI
      refetch();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleMarkPublished = async (id) => {
    try {
      // Fetch the mark published API with the provided id
      await fetch(
        `https://cemrd-demo-two.vercel.app/api/blog/markpublished/${id}`,
        {
          method: "PUT",
        }
      );

      // After marking as published, refetch the data to update the UI
      refetch();
    } catch (error) {
      console.error("Error marking blog as published:", error);
    }
  };

  console.log(data);

  return (
    <div>
      {data?.map(
        (challenge, index) =>
          !challenge.published ? (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-md shadow-sm my-10"
            >
              <img
                src={challenge.img1Link}
                alt=""
                className="w-full h-auto dark:bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center p-6 dark:bg-gray-900">
                <h3 className="text-3xl font-bold">{challenge.title}</h3>
                <p className="text-lg font-semibold">{challenge.subtitle}</p>
                <p className="my-6 dark:text-gray-400">
                  {challenge.description1}
                </p>
                <p className="my-6 dark:text-gray-400">
                  {challenge.description2}
                </p>
                <button
                  type="button"
                  className="self-start bg-red-500 py-1 px-5 rounded-lg mr-2"
                  onClick={() => handleDelete(challenge._id)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="self-start bg-blue-400 py-1 px-3 rounded-lg mt-4"
                  onClick={() => handleMarkPublished(challenge._id)}
                >
                  Mark Published
                </button>
              </div>
            </div>
          ) : null // Render nothing if 'published' is true
      )}
    </div>
  );
};

export default ManageBlog;
