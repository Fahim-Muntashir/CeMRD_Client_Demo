import { useState } from "react";
import Swal from "sweetalert2";

const AddResearch = () => {
  const [researchImg, setResearchImg] = useState("");
  const [challangeTitle, setChallangeTitle] = useState("");
  const [challangeDescription, setChallangeDescription] = useState("");
  const [responseTitle, setResponseTitle] = useState("");
  const [responseDescription, setResponseDescription] = useState("");

  const handleResearchSubmit = (event) => {
    event.preventDefault();

    fetch("https://cemrd-online.vercel.app/api/research/addresearch/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        researchImg,
        challangeTitle,
        challangeDescription,
        responseTitle,
        responseDescription,
      }),
    })
      .then(() => {
        Swal.fire({
          title: "Research Submitted Successfully!",
          text: "You Submitted The Research!",
          icon: "success",
        });
        // Reset form fields to empty values
        setResearchImg("");
        setChallangeTitle("");
        setChallangeDescription("");
        setResponseTitle("");
        setResponseDescription("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Add Research
                </h6>
                <button
                  className="bg-primary text-white bg-blue-400 active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none cursor-pointer mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Save Research
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleResearchSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Research Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="researchImg"
                      >
                        Research Image
                      </label>
                      <input
                        type="text"
                        value={researchImg}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="researchImg"
                        required
                        onChange={(e) => setResearchImg(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="challangeTitle"
                      >
                        Challenge Title
                      </label>
                      <input
                        type="text"
                        value={challangeTitle}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="challangeTitle"
                        required
                        onChange={(e) => setChallangeTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="challangeDescription"
                      >
                        Challenge Description
                      </label>
                      <textarea
                        value={challangeDescription}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="challangeDescription"
                        required
                        onChange={(e) =>
                          setChallangeDescription(e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="responseTitle"
                      >
                        Response Title
                      </label>
                      <input
                        type="text"
                        value={responseTitle}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="responseTitle"
                        required
                        onChange={(e) => setResponseTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="responseDescription"
                      >
                        Response Description
                      </label>
                      <textarea
                        value={responseDescription}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="responseDescription"
                        required
                        onChange={(e) => setResponseDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* Add similar blocks for other input fields */}
                </div>
                <input
                  className="bg-primary text-white bg-blue-500 active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none cursor-pointer mr-1 ease-linear transition-all duration-150"
                  type="submit"
                  value="Add Research"
                />
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddResearch;
