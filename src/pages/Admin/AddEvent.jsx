// Import necessary modules and libraries
import { useState } from "react";
import Swal from "sweetalert2";

// Create the AddEvent component
const AddEvent = () => {
  // State variables for form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");

  // Handle form submission
  const handleEventSubmit = (event) => {
    event.preventDefault();

    // Fetch request to add event
    fetch("https://cemrd-online.vercel.app/api/event/addevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        date,
        link,
      }),
    })
      .then(() => {
        // Display success message using Swal (SweetAlert)
        Swal.fire({
          title: "Event Submitted Successfully!",
          text: "You Submitted The Event!",
          icon: "success",
        });

        // Reset form fields to empty values
        setTitle("");
        setDescription("");
        setDate("");
        setLink("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // JSX structure for the AddEvent component
  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full  px-4 auto mt-6">
        <div className="relative mx-auto flex flex-col break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-2 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Add Event</h6>
              <button
                className="bg-primary text-white bg-blue-400 active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none cursor-pointer mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Save Event
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 py-10 pt-0">
            <form onSubmit={handleEventSubmit}>
              {/* Title */}
              <div className="w-full px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="title"
                  >
                    Event Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="w-full px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="description"
                  >
                    Event Description
                  </label>
                  <textarea
                    value={description}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="description"
                    required
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              {/* Date */}
              <div className="w-full  px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="date"
                  >
                    Event Date
                  </label>
                  <input
                    type="text"
                    value={date}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="date"
                    required
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Link */}
              <div className="w-full  px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="link"
                  >
                    Event Link
                  </label>
                  <input
                    type="text"
                    value={link}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="link"
                    required
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
              </div>

              {/* Submit button */}
              <input
                className="bg-primary text-white bg-blue-400  active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none cursor-pointer mr-1 ease-linear transition-all duration-150"
                type="submit"
                value="Add Event"
              />
              {/* Horizontal line */}
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AddEvent;
