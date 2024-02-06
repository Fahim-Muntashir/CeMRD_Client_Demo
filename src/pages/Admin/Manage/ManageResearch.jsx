import React from "react";
import { useQuery } from "react-query";

const ManageResearch = () => {
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

    const handleDelete = async (id) => {
        try {
            // Fetch the delete API with the provided id
            await fetch(
                `https://cemrd-online.vercel.app/api/research/deleteresearch/${id}`,
                {
                    method: "DELETE",
                }
            );

            // After deletion, refetch the data to update the UI
            refetch();
        } catch (error) {
            console.error("Error deleting research:", error);
        }
    };

    const handleMarkPublished = async (id) => {
        try {
            // Fetch the mark published API with the provided id
            await fetch(
                `https://cemrd-online.vercel.app/api/research/markpublished/${id}`,
                {
                    method: "PUT",
                }
            );

            // After marking as published, refetch the data to update the UI
            refetch();
        } catch (error) {
            console.error("Error marking research as published:", error);
        }
    };

    return (
        <div>
            {data?.map(
                (challenge, index) =>
                    // Check if the 'published' field is false
                    !challenge.published ? (
                        <div
                            key={index}
                            className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row my-10"
                        >
                            <img
                                src={challenge.researchImg}
                                alt=""
                                className="h-80 dark:bg-gray-500 aspect-video"
                            />
                            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                                <h3 className="text-3xl font-bold">
                                    {challenge.challangeTitle}
                                </h3>
                                <p className="my-6 dark:text-gray-400">
                                    {challenge.challangeDescription}
                                </p>
                                <h4 className="text-lg font-semibold">
                                    {challenge.responseTitle}
                                </h4>
                                <p>{challenge.responseDescription}</p>
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

export default ManageResearch;
