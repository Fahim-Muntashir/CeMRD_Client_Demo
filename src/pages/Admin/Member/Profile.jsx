import { useState } from "react";

import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
const Profile = () => {
  const { user, loading } = useAuth();

  const img_hoisting_url = `https://api.imgbb.com/1/upload?key=1c0532f27dc3041aae47d6fd9d658c7f`;
  // Move the useState hooks outside of the conditional block

  const [imgUpload, setImgUpload] = useState(null);
  const [userData, setUserData] = useState({});
  const [displayName, setDisplayName] = useState("");
  const [position, setPosition] = useState("");
  const [personalProfile, setPersonalProfile] = useState("");
  const [researchGate, setResearchGate] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [googleScholar, setGoogleScholar] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [isEditMode, setEditMode] = useState(false);

  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-700 mx-auto mt-40"></div>
    );
  }

  const { uid, displayName: initialDisplayName, email } = user || {};

  // ... rest of your code

  const getMemberProfileData = async () => {
    try {
      const response = await fetch(
        `https://cemrd-online.vercel.app/api/member/findmemberbyemail?email=${email}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setUserData(data.data);
        setPosition(data.position);
        setPersonalProfile(data.personalProfile);
        setResearchGate(data.researchGate);
        setGithub(data.github);
        setLinkedin(data.data.linkedin); // Set the linkedin state here
        setGoogleScholar(data.data.googleScholar); // Set the linkedin state here
        setAddress(data.data.address); // Set the linkedin state here
        setAbout(data.data.about); // Set the linkedin state here
        console.log("Profile data fetched successfully");
      } else {
        console.error("Failed to fetch profile data");
      }
    } catch (error) {
      console.error("Error fetching profile data", error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      // Step 3: Include the image upload logic
      const imgFormData = new FormData();
      if (imgUpload) {
        imgFormData.append("image", imgUpload); // Ensure the field name is "image"
        const imgUploadResponse = await fetch(img_hoisting_url, {
          method: "POST",
          body: imgFormData,
        });

        if (imgUploadResponse.ok) {
          const imgUploadData = await imgUploadResponse.json();
          const imgUrl = imgUploadData.data.url;

          // Fetch the existing profile data first
          await getMemberProfileData();

          // Include the imgUrl in the body of the profile update request
          const response = await fetch(
            `http://localhost:5000/api/member/updatememberprofile/${email}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                displayName,
                position,
                personalProfile,
                researchGate,
                github,
                linkedin,
                googleScholar,
                address,
                about,
                imgUrl, // Include imgUrl in the body
              }),
            }
          );

          if (response.ok) {
            console.log("Profile updated successfully");
            toast.success("Profile Update With Successfully");
          } else {
            console.error("Failed to update profile");
          }
        } else {
          console.error("Image upload failed:", imgUploadData.error.message);
        }
      }
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  const editAccount = () => {
    getMemberProfileData();
    toast.success("Now Update your profile with new data");
    setEditMode(true);
  };

  return (
    <div>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  My account
                </h6>
                <button
                  className={`bg-blue-600 text-white 
                   active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150`}
                  type="button"
                  onClick={() => editAccount()}
                >
                  Edit Account
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="username"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        readOnly={!isEditMode}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={email}
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="imgUpload"
                      >
                        Profile Image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={(e) => setImgUpload(e.target.files[0])} // Ensure setImgUpload is accessible here
                        readOnly={!isEditMode}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="position"
                      >
                        Position
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={position}
                        readOnly={!isEditMode}
                        onChange={(e) => setPosition(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="linkedin"
                      >
                        Personal Profile Link
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={personalProfile}
                        readOnly={!isEditMode}
                        onChange={(e) => setPersonalProfile(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="linkedin"
                      >
                        Research Gate
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={researchGate}
                        readOnly={!isEditMode}
                        onChange={(e) => setResearchGate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="linkedin"
                      >
                        Github
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={github}
                        readOnly={!isEditMode}
                        onChange={(e) => setGithub(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="linkedin"
                      >
                        LinkedIn
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={linkedin}
                        readOnly={!isEditMode}
                        onChange={(e) => setLinkedin(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="googleScholar"
                      >
                        Google Scholar
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={googleScholar}
                        onChange={(e) => setGoogleScholar(e.target.value)}
                        readOnly={!isEditMode}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="address"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={address}
                        readOnly={!isEditMode}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  About Me
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="aboutMe"
                      >
                        About me
                      </label>
                      <textarea
                        onChange={(e) => setAbout(e.target.value)}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="aboutMe"
                        id="aboutMe"
                        cols="30"
                        rows="10"
                        readOnly={!isEditMode}
                        maxLength="400"
                        value={about}
                        // Add value and onChange props if you want to track changes
                      >
                        Default text goes here...
                      </textarea>
                    </div>
                  </div>
                </div>
              </form>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  className="bg-blue-600 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleUpdateProfile}
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
