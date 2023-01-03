import { Link } from "react-router-dom";
import "./header.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { AiOutlineDownload } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API } from "./Constant";
function Add_category() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    axios
      .post(`${API}/api/categories`, formData)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="w-[100vw] bg-[#ececec] min-h-[100vh] flex justify-center items-center py-12">
        <form
          method="post"
          onSubmit={(e) => handleSubmit(e)}
          encType="multipart/form-data"
        >
          <div className="p-12 bg-[white] border md:w-[500px]">
            <p className="text-[20px] font-bold text-[#171B1E]">Add category</p>

            <div className="mt-5">
              <label className="block text-[16px] font-medium text-[#171B1E]">
                Name
              </label>
              <input
                type="text"
                name={name}
                onChange={(e) => setName(e.target.value)}
                className="border w-full h-[45px] outline-none px-3 placeholder:text-[16px] text-[#717579] rounded-md"
                placeholder="Enter Category"
              />
            </div>
            <div className="mt-5">
              <label className="block text-[16px] font-medium text-[#171B1E]">
                Description
              </label>
              <input
                type="text"
                name={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border w-full h-[45px] outline-none px-3 placeholder:text-[16px] text-[#717579] rounded-md"
                placeholder="Enter Category description"
              />
            </div>
            <div className="mt-5">
              <input
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="border w-full h-[45px] outline-none p-[6px] placeholder:text-[16px] text-[#717579] rounded-md  "
              />
            </div>
            <div className="mt-5 w-full flex items-center justify-end">
              <button
                className="w-[100px] text-center h-[40px] bg-[#00A15D] text-[16px] text-white rounded-full cursor-pointer"
                onClick={(e) => handleSubmit(e)}
              >
                Add
              </button>
              <Link to="/category">
                <button className="w-[100px] text-center h-[40px] hover:bg-[#00A15D] hover:text-white text-[#171B1E] text-[16px]  rounded-full border ml-2 cursor-pointer">
                  Close
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Add_category;
