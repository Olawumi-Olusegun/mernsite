import React, { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import CreateProductStageOne from "../../components/CreateProductStageOne";
import CreateProductStageTwo from "../../components/CreateProductStageTwo";

import { CATEGORY_DATA } from "../../constants/data";
import toast from "react-hot-toast";
import { config } from "../../../config";
import fetchWithTokenRefresh from "../../hooks/fetchWithTokenRefresh";

export default function CreateProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    storeAddress: "",
    type: "",
    categories: "",
    regularPrice: "",
    discountPrice: "",
    discount: false,
    imageUrls: [],
    mobile: "",
    unit: "",
  });

  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [steps, setSteps] = useState(1);

  const previousStep = () => {
    setSteps((prevState) => prevState - 1);
  };

  const nextStep = () => {
    setSteps((prevState) => prevState + 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCategoryChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      categories: value,
    }));
  };

  const handleSubCategoryChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      subCategories: value,
    }));
  };

  const handleImageSubmit = async () => {
    if (files.length > 0) {
      setUploading(true);
      const storage = getStorage(app);
      const promises = Array.from(files).map((file) => {
        const fileName = `${new Date().getTime()}_${file.name}`;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        return new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload is ${progress}% done`);
            },
            (error) => reject(error),
            () =>
              getDownloadURL(uploadTask.snapshot.ref)
                .then(resolve)
                .catch(reject)
          );
        });
      });

      try {
        const urls = await Promise.all(promises);

        setFormData((prev) => ({
          ...prev,
          imageUrls: [...prev.imageUrls, ...urls],
        }));
      } catch (error) {
        console.error("Failed to upload images", error);
        setError("Image upload failed (2mb per image limit)");
      } finally {
        setUploading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const { categories: categoryName } = formData;
    const subCategories = CATEGORY_DATA[formData.categories];

    const submissionData = {
      ...formData,
      subCategories,
      categoryName,
      userRef: currentUser._id,
    };

    try {
      const token = localStorage.getItem("access_token");
      const response = await fetchWithTokenRefresh(
        `${config.baseUrl}/api/product/create-product`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(submissionData),
        }
      );

      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Failed to create product");
      navigate(`/product/${data._id}`);
    } catch (error) {
      toast.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const showMultipleStepForm = () => {
    switch (steps) {
      case 1:
        return (
          <CreateProductStageOne
            nextStep={nextStep}
            formData={formData}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <CreateProductStageTwo
            handleCategoryChange={handleCategoryChange}
            onhandleSubCategoryChange={handleSubCategoryChange}
            handleSubmit={handleSubmit}
            previousStep={previousStep}
            formData={formData}
            setFiles={setFiles}
            handleChange={handleChange}
            isLoading={loading}
            error={error}
            handleImageSubmit={handleImageSubmit}
            uploading={uploading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <form className="w-full flex flex-col gap-y-3">
        {showMultipleStepForm()}
      </form>
    </>

    // <main className="w-full mx-auto pt-10 px-5 ">
    //   <div className="flex gap-6 shadow rounded-lg ">
    //     {/* <ProfileSideBar
    //       activeView={activeView}
    //       changeActiveView={changeActiveView}
    //       handleSignOut={handleSignOut}
    //       handleDeleteUser={handleDeleteUser}
    //       handleShowShopDetails={handleShowShopDetails}
    //     /> */}

    //     {/* <div className="flex-1 bg-white p-4">
    //       <h1 className="text-3xl font-semibold text-center py-5">
    //         Create a Product
    //       </h1>
    //       <form
    //         className="grid grid-cols-1 lg:grid-cols-2 gap-4"
    //         onSubmit={handleSubmit}
    //       >

    //         <div className="flex flex-col gap-4 w-full p-2">
    //           <input
    //             type="text"
    //             placeholder="Product Name"
    //             className="rounded-lg bg-white border p-3"
    //             name="name"
    //             maxLength="62"
    //             minLength="10"
    //             required
    //             value={formData.name}
    //             onChange={handleChange}
    //           />
    //           <textarea
    //             type="text"
    //             placeholder="About Product"
    //             className="rounded-lg bg-white p-3 border"
    //             name="description"
    //             required
    //             value={formData.description}
    //             onChange={handleChange}
    //           />
    //           <input
    //             type="tel"
    //             placeholder="Mobile Number"
    //             className="rounded-lg bg-white p-3 border"
    //             name="mobile"
    //             required
    //             value={formData.mobile}
    //             onChange={handleChange}
    //           />

    //           <div className="flex flex-wrap gap-3 w-full">
    //               <input
    //                 type="text"
    //                 placeholder="Seller Address"
    //                 className="rounded-lg bg-white p-3 border flex-1"
    //                 name="storeAddress"
    //                 required
    //                 value={formData.storeAddress}
    //                 onChange={handleChange}
    //               />
    //             <select
    //               name="location"
    //               value={formData.location}
    //               className="rounded-lg p-3 border  flex-1"
    //               onChange={handleChange}
    //             >
    //               <option className="text-gray-400">-select a State-</option>
    //               {NIGERIAN_STATES.map((state) => (
    //                 <option key={state} value={state}>
    //                   {state}
    //                 </option>
    //               ))}
    //             </select>
    //           </div>

    //           <div className="flex gap-3 flex-row items-center">
    //             <label htmlFor="unit-select" className="font-semibold flex-1">
    //               Choose Unit:
    //             </label>
    //             <select
    //               name="unit"
    //               value={formData.unit}
    //               className="p-3 rounded-lg flex-1 border"
    //               onChange={handleChange}
    //             >
    //               <option>--Please choose an option--</option>
    //               {units.map((unit) => (
    //                 <option key={unit} value={unit}>
    //                   {unit}
    //                 </option>
    //               ))}
    //             </select>
    //           </div>
    //           <div className="flex gap-3 flex-row items-center">
    //             <label htmlFor="type-select" className="font-semibold  flex-1">
    //               Choose Product Type:
    //             </label>
    //             <select
    //               name="type"
    //               value={formData.type}
    //               className="p-3 rounded-lg border  flex-1"
    //               onChange={handleChange}
    //             >
    //               <option>--Please choose an option--</option>
    //               {types.map((type) => (
    //                 <option key={type} value={type}>
    //                   {type}
    //                 </option>
    //               ))}
    //             </select>
    //           </div>
    //           <div className="flex gap-3 flex-row items-center">
    //             <label htmlFor="category-select" className="font-semibold  flex-1">
    //               Choose a category:
    //             </label>
    //             <select
    //               name="categories"
    //               id="category-select"
    //               value={formData.categories}
    //               className="p-3 rounded-lg  flex-1 border"
    //               onChange={handleCategoryChange}
    //             >
    //               <option value="">--Please choose an option--</option>
    //               {Object.keys(predefinedSubCategories).map((category) => (
    //                 <option key={category} value={category}>
    //                   {category}
    //                 </option>
    //               ))}
    //             </select>
    //           </div>
    //           <div className="flex gap-3 sm:flex-row w-full flex-col self-start items-center">
    //             <div className="flex-1">
    //               <input
    //                 type="checkbox"
    //                 name="discount"
    //                 className="w-5"
    //                 checked={formData.discount}
    //                 onChange={handleChange}
    //               />
    //               <span>Discount Offer</span>
    //             </div>
    //             <div className="flex gap-2 self-start items-center flex-1">
    //               <input
    //                 type="number"
    //                 name="regularPrice"
    //                 min="10"
    //                 max="100000000"
    //                 required
    //                 value={formData.regularPrice}
    //                 className="p-2 border border-gray-200 rounded w-[100px]"
    //                 onChange={handleChange}
    //               />
    //               <span className="font-semibold text-xl">Price</span>
    //               {formData.discount && (
    //                 <div className="flex gap-2  items-center">
    //                   <input
    //                     type="number"
    //                     name="discountPrice"
    //                     min="0"
    //                     max="100000000"
    //                     required
    //                     className="p-2 border border-gray-200 rounded w-[100px]"
    //                     value={formData.discountPrice}
    //                     onChange={handleChange}
    //                   />
    //                   <span className="font-semibold text-xl">
    //                     Discount Price
    //                   </span>
    //                 </div>
    //               )}
    //             </div>
    //           </div>

    //         </div>

    //         <div className="flex flex-col flex-1 gap-4px-2">
    //           <div className="flex items-center">
    //             <p className="font-semibold">Images:</p>
    //             <span className="font-normal ml-2 my-4">
    //               The first image will be the cover (max 6)
    //             </span>
    //           </div>
    //           <div className="flex flex-col gap-4">
    //             <input
    //               type="file"
    //               name="images"
    //               accept="image/*"
    //               multiple
    //               onChange={(e) => setFiles(e.target.files)}
    //               className="p-3 border border-gray-300 rounded w-full"
    //             />
    //             <button
    //               type="button"
    //               disabled={uploading}
    //               className="p-3 text-blue-600 border rounded uppercase font-semibold border-blue-300 hover:shadow-lg disabled:opacity-80"
    //               onClick={handleImageSubmit}
    //             >
    //               {uploading ? "Uploading" : "Upload"}
    //             </button>
    //             {formData.imageUrls.length > 0 && (
    //               <>
    //                 {formData.imageUrls.map((url, index) => (
    //                   <div
    //                     key={index}
    //                     className="flex justify-between p-3 border items-center"
    //                   >
    //                     <img
    //                       src={url}
    //                       alt="Item Image"
    //                       className="w-20 h-20 object-contain rounded-lg"
    //                     />
    //                   </div>
    //                 ))}
    //               </>
    //             )}
    //           </div>
    //           <button
    //             type="submit"
    //             disabled={loading || uploading}
    //             className="p-3 mt-5 bg-blue-900 text-white font-semibold rounded-lg uppercase hover:opacity-80 disabled:opacity-40"
    //           >
    //             {loading ? "Creating..." : "Create Product"}
    //           </button>
    //           {error && <p className="text-red-900 text-sm">{error}</p>}
    //         </div>

    //       </form>
    //     </div> */}

    //     <form className='w-full flex flex-col gap-y-3'>
    //       {showMultipleStepForm()}
    //     </form>
    //   </div>
    // </main>
  );
}
