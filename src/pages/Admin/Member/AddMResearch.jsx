import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AddMResearch = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const { user } = useAuth();

  const { email } = user || {};
  const handleResearchSubmit = (event) => {
    event.preventDefault();

    // Assuming the same fetch logic for submitting research
    // Adjust the URL and payload accordingly

    // Example URL:
    const apiUrl =
      "https://cemrd-demo-two.vercel.app/api/memberresearch/postresearch";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        title,
        link,
      }),
    })
      .then(() => {
        Swal.fire({
          title: "Research Submitted Successfully!",
          text: "You Submitted The Research!",
          icon: "success",
        });
        // Reset form fields to empty values
        setTitle("");
        setLink("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full px-4 mx-auto mt-6">
          <div className="relative flex min-w-0 break-words w-full mb-6 shadow-lg mx-auto rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="ms-5 flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Add Research
                </h6>{" "}
                <form onSubmit={handleResearchSubmit} className="w-full">
                  <div className="mb-3 w-full">
                    <label
                      className="block w-full text-sm font-bold text-gray-700"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-4 py-2 mt-2 border rounded-md"
                      placeholder="Enter title"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      className="block text-sm font-bold text-gray-700"
                      htmlFor="link"
                    >
                      Link
                    </label>
                    <input
                      type="text"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      className="w-full px-4 py-2 mt-2 border rounded-md"
                      placeholder="Enter link"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-pink-600"
                  >
                    Add Research
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMResearch;
