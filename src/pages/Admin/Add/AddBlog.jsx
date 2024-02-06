"use client";
import { useState } from "react";
import Swal from "sweetalert2";

const AddBlog = () => {
  const [title, setBlogTitle] = useState("");
  const [subtitle, setBlogSubTitle] = useState("");
  const [img1Link, setImg1Link] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");

  const handleBlogSubmit = (event) => {
    event.preventDefault();
    // Send user information to your Express server for Blog submission
    fetch("https://cemrd-online.vercel.app/api/blog/addblog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        subtitle,
        img1Link,
        description1,
        description2,
      }),
    })
      .then(() => {
        Swal.fire({
          title: "Good Blog Submitted Successfully!",
          text: "You Submitted The Blog!",
          icon: "success",
        });
        // Reset form fields to empty values
        setBlogTitle("");
        setBlogSubTitle("");
        setImg1Link("");
        setDescription1("");
        setDescription2("");
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
                  Add Blog
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleBlogSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Blog Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="title"
                      >
                        Blog Title
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="title"
                        value={title}
                        required
                        onChange={(e) => setBlogTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="subtitle"
                      >
                        Blog Subtitle
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="subtitle"
                        value={subtitle}
                        required
                        onChange={(e) => setBlogSubTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="img1Link"
                      >
                        Image 1 Link
                      </label>
                      <input
                        type="text"
                        value={img1Link}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="img1Link"
                        required
                        onChange={(e) => setImg1Link(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="description1"
                      >
                        Description 1
                      </label>
                      <textarea
                        value={description1}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="description1"
                        required
                        onChange={(e) => setDescription1(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="description2"
                      >
                        Description 2
                      </label>
                      <textarea
                        value={description2}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="description2"
                        required
                        onChange={(e) => setDescription2(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <input
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none cursor-pointer mr-1 ease-linear transition-all duration-150"
                  type="submit"
                  value="Add Blog"
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

export default AddBlog;
