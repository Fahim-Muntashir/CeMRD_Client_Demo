import { useState } from "react";
import Swal from "sweetalert2";

const AddAdviser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [googleScholar, setGoogleScholar] = useState("");

  const handleAdviserSubmit = (event) => {
    event.preventDefault();

    fetch("https://cemrd-online.vercel.app/api/adviser/addadviser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        position,
        imgLink,
        linkedin,
        googleScholar,
      }),
    })
      .then(() => {
        Swal.fire({
          title: "Adviser Added Successfully!",
          text: "You Added a New Adviser!",
          icon: "success",
        });
        // Reset form fields to empty values
        setId("");
        setName("");
        setPosition("");
        setImgLink("");
        setLinkedin("");
        setGoogleScholar("");
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
                  Add Adviser
                </h6>
                <button
                  className="bg-primary text-white bg-blue-500 active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none cursor-pointer mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Save Adviser
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleAdviserSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Adviser Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="id"
                      >
                        Adviser ID
                      </label>
                      <input
                        type="text"
                        value={id}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="id"
                        required
                        onChange={(e) => setId(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="name"
                      >
                        Adviser Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="name"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="position"
                      >
                        Adviser Position
                      </label>
                      <input
                        type="text"
                        value={position}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="position"
                        required
                        onChange={(e) => setPosition(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="imgLink"
                      >
                        Adviser Image Link
                      </label>
                      <input
                        type="text"
                        value={imgLink}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="imgLink"
                        required
                        onChange={(e) => setImgLink(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="linkedin"
                      >
                        LinkedIn Link
                      </label>
                      <input
                        type="text"
                        value={linkedin}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="linkedin"
                        required
                        onChange={(e) => setLinkedin(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="googleScholar"
                      >
                        Google Scholar Link
                      </label>
                      <input
                        type="text"
                        value={googleScholar}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="googleScholar"
                        required
                        onChange={(e) => setGoogleScholar(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <input
                  className="bg-primary text-white bg-blue-500  active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none cursor-pointer mr-1 ease-linear transition-all duration-150"
                  type="submit"
                  value="Add Adviser"
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

export default AddAdviser;
