import { Link } from "react-router-dom";
import "./header.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { AiOutlineMenu } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillHouseDoorFill, BsPower } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";
// import React from 'react';
import Images from "./Images";
import Images_order from "./Images_order";
import "./Images.css";
import { API } from "./Constant";

function User_detail() {
  const [profiledata, setProfiledata] = useState([]);

  const getuserprofiledata = () => {
    axios
      .get(`${API}/api/profile`, {
        weithCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        setProfiledata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        window.location.href = "/";
      });
  };
  useEffect(() => {
    getuserprofiledata();
  }, []);

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/users`).then((response) =>
      response.json().then((data) => {
        setUser(data);
      })
    );
  }, []);

  // code to logout and clear the cookies and redirect to login page
  const handleLogout = () => {
    axios
      .get(`${API}/api/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="w-full min-h-[100vh]">
        <div className="flex">
          <div className="w-[300px] grow-0 shrink-0 sidebar">
            <div className="h-[80px] w-full"></div>
            <div className="p-6">
              <p className="text-[#D7D7D7] text-[13px]">Main Menu</p>
              <ul>
                <li
                  className="my-3 cursor-pointer"
                  onMouseOver={() => {
                    document.getElementsByClassName(
                      "dashboard_div"
                    )[0].style.background = "#dceee6";
                    document.getElementsByClassName(
                      "dashboard_icon"
                    )[0].style.color = "#00a15d";
                    document.getElementsByClassName(
                      "dashboard_text"
                    )[0].style.color = "#00a15d";
                  }}
                  onMouseOut={() => {
                    document.getElementsByClassName(
                      "dashboard_div"
                    )[0].style.background = "#fff";
                    document.getElementsByClassName(
                      "dashboard_icon"
                    )[0].style.color = "#717579";
                    document.getElementsByClassName(
                      "dashboard_text"
                    )[0].style.color = "#717579";
                  }}
                >
                  <Link to="/dashboard">
                    <div className="flex items-center h-[40px] rounded-full bg-white px-3 dashboard_div">
                      <BsFillHouseDoorFill className="text-[20px] text-[#717579] mr-2 relative top-[-2px] dashboard_icon" />
                      <p className="text-[#717579] text-[14px] font-semibold dashboard_text">
                        Dashboard
                      </p>
                    </div>
                  </Link>
                </li>
                <li
                  className="my-3 cursor-pointer"
                  onMouseOver={() => {
                    document.getElementsByClassName(
                      "order_div"
                    )[0].style.background = "#dceee6";
                    document.getElementsByClassName(
                      "order_icon"
                    )[0].style.color = "#00a15d";
                    document.getElementsByClassName(
                      "order_text"
                    )[0].style.color = "#00a15d";
                  }}
                  onMouseOut={() => {
                    document.getElementsByClassName(
                      "order_div"
                    )[0].style.background = "#fff";
                    document.getElementsByClassName(
                      "order_icon"
                    )[0].style.color = "#717579";
                    document.getElementsByClassName(
                      "order_text"
                    )[0].style.color = "#717579";
                  }}
                >
                  <Link to="/order-detail">
                    <div className="flex items-center h-[40px] rounded-full bg-white text-[] px-3 order_div">
                      <BsFillLightningFill className="text-[20px] text-[#717579] mr-2 relative top-[-2px] order_icon" />
                      <p className="text-[#717579] text-[14px] font-semibold order_text">
                        Order
                      </p>
                    </div>
                  </Link>
                </li>
                <li className="my-3 cursor-pointer">
                  <Link to="/user-detail">
                    <div className="flex items-center h-[40px] rounded-full bg-[#DCEEE6] text-[] px-3 user_div">
                      <FaUserAlt className="text-[20px] text-[#00A15D] mr-2 relative top-[-2px]  user_icon" />
                      <p className="text-[#00A15D] text-[14px] font-semibold user_text">
                        User Detail
                      </p>
                    </div>
                  </Link>
                </li>
                <li className="my-3 cursor-pointer add h-[40px] overflow-hidden">
                  <div
                    className="flex items-center justify-between h-[40px] rounded-full bg-white text-[] px-3 add_div"
                    onMouseOver={() => {
                      document.getElementsByClassName(
                        "add_div"
                      )[0].style.background = "#dceee6";
                      document.getElementsByClassName(
                        "add_icon"
                      )[0].style.color = "#00a15d";
                      document.getElementsByClassName(
                        "add_text"
                      )[0].style.color = "#00a15d";
                    }}
                    onMouseOut={() => {
                      document.getElementsByClassName(
                        "add_div"
                      )[0].style.background = "#fff";
                      document.getElementsByClassName(
                        "add_icon"
                      )[0].style.color = "#717579";
                      document.getElementsByClassName(
                        "add_text"
                      )[0].style.color = "#717579";
                    }}
                    onClick={() => {
                      document.getElementsByClassName(
                        "add_div"
                      )[0].style.background = "#dceee6";
                      document.getElementsByClassName(
                        "add_icon"
                      )[0].style.color = "#00a15d";
                      document.getElementsByClassName(
                        "add_text"
                      )[0].style.color = "#00a15d";
                      document.getElementsByClassName("add")[0].style.height =
                        "100%";
                    }}
                  >
                    <div className="flex items-center">
                      <BsFillHouseDoorFill className="text-[20px] text-[#717579] mr-2 relative top-[-2px] add_icon" />
                      <p className="text-[#717579] text-[14px] font-semibold add_text">
                        Add
                      </p>
                    </div>
                    <AiOutlineDown className="text-[15px] text-[#717579]" />
                  </div>
                  <ul className="">
                    <li
                      className="text-[#717579] text-[14px] font-semibold ml-7 px-3 my-3 cursor-pointer hover:bg-[#dceee6] hover:text-[#00a15d] rounded-full h-[40px] leading-[40px] add_category_div"
                      onMouseOver={() => {
                        document.getElementsByClassName(
                          "add_category_div"
                        )[0].style.background = "#dceee6";
                        document.getElementsByClassName(
                          "add_category_div"
                        )[0].style.color = "#00a15d";
                      }}
                      onMouseOut={() => {
                        document.getElementsByClassName(
                          "add_category_div"
                        )[0].style.background = "#fff";
                        document.getElementsByClassName(
                          "add_category_div"
                        )[0].style.color = "#717579";
                      }}
                    >
                      <Link to="/category">Add Category</Link>
                    </li>
                    <li
                      className="text-[#717579] text-[14px] font-semibold ml-7 leading-[40px] px-3 cursor-pointer hover:bg-[#dceee6] hover:text-[#00a15d] rounded-full h-[40px] add_product_div"
                      onMouseOver={() => {
                        document.getElementsByClassName(
                          "add_product_div"
                        )[0].style.background = "#dceee6";
                        document.getElementsByClassName(
                          "add_product_div"
                        )[0].style.color = "#00a15d";
                      }}
                      onMouseOut={() => {
                        document.getElementsByClassName(
                          "add_product_div"
                        )[0].style.background = "#fff";
                        document.getElementsByClassName(
                          "add_product_div"
                        )[0].style.color = "#717579";
                      }}
                    >
                      <Link to="/product">Add Product</Link>
                    </li>
                  </ul>
                </li>
                <li className="hover:text-[#3DA56D]">
                  <div className="flex items-center hover:bg-[#DCEEE5] hover:text-[#3DA56D] cursor-pointer h-[40px] rounded-full bg-white   px-3">
                    <BsPower className="text-[20px] hover:text-[#3DA56D] text-[#717579] mr-2 relative top-[-2px]" />
                    <button
                      onClick={handleLogout}
                      className="text-[#717579] hover:text-[#3DA56D] text-[14buttonx] font-semibold"
                    >
                      Logout
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grow shrink">
            <div className="user_detail">
              <div className="h-[80px] flex items-center justify-between px-5">
                <div className="flex items-center">
                  <AiOutlineMenu
                    className="text-[24px] text-[#717579] mr-5 cursor-pointer"
                    onClick={() => {
                      if (
                        document.getElementsByClassName("sidebar")[0].style
                          .display == "none"
                      ) {
                        document.getElementsByClassName(
                          "sidebar"
                        )[0].style.display = "block";
                      } else {
                        document.getElementsByClassName(
                          "sidebar"
                        )[0].style.display = "none";
                      }
                    }}
                  />
                  <p className="text-[#171B1E] text-[24px] font-bold">
                    User Detail
                  </p>
                </div>
                <div className="flex items-center h-[32px] mr-5">
                  <div className="h-[32px] w-[32px] rounded-full bg-[#C4C4C4]"></div>
                  <div className="flex flex-col justify-center h-[32px] mx-1">
                    <p className="text-[#171B1E] text-[14px] font-semibold">
                      {profiledata.full_name}
                    </p>
                    <p className="text-[#171B1E] text-[12px]">
                      {profiledata.email}
                    </p>
                  </div>
                  <AiFillCaretDown className="text-[12px] text-[#00A15D] ml-3" />
                </div>
              </div>
              <div className="px-10 flex justify-between">
                <div className="flex h-[36px] rounded-full bg-[#eee] pl-4 pr-3 items-center lg:w-[400px]">
                  <input
                    type="text"
                    className="w-full outline-none bg-[#eee] placeholder:text-[13px] placeholder:font-medium"
                    placeholder="Search Here.."
                  />
                  <BiSearch className="text-[22px] text-[#717579]" />
                </div>
              </div>
              <div className="flex justify-end px-10">
                <div className="">
                  <p className="text-[#717579] text-[14px] font-semibold">
                    Download in to file
                  </p>
                  <div className="bg-[#00A15D] px-2 text-white/90 h-[36px] flex items-center rounded-md text-[14px]">
                    <p className="mx-1 cursor-pointer">COPY</p>
                    <div className="bg-white/50 h-[18px] w-[1px] mx-1 "></div>
                    <p className="mx-1 cursor-pointer">EXCEL</p>
                    <div className="bg-white/50 h-[18px] w-[1px] mx-1 "></div>
                    <p className="mx-1 cursor-pointer">PDF</p>
                    <div className="bg-white/50 h-[18px] w-[1px] mx-1 "></div>
                    <p className="mx-1 cursor-pointer">COLOM VISIBILITY</p>
                  </div>
                </div>
              </div>
              <div className="px-10 w-full">
                <Images data={user} />
              </div>
              {/* <div className="flex justify-between py-5">
                  <div className="flex items-center text-[#717579] text-[13px]">
                    <p>Showing&nbsp;</p>
                    <p>10</p>
                    <p>&nbsp;from&nbsp;</p>
                    <p>160</p>
                    <p>&nbsp;data</p>
                  </div>
                  <div className="flex items-center">
                    <button className="flex h-[30px] bg-[] text-[#00A15D] border-[#00A15D] border items-center rounded-full px-3">
                      <AiOutlineLeft className="text-[#00A15D] mr-2 text-[14px]" />
                      <p className="text-[#00a15d] text-[12px]">Previous</p>
                    </button>
                    <div className="mx-4 h-[30px] rounded-full bg-[#DCEEE6] flex items-center">
                      <button className="h-[30px] w-[30px] text-white text-[12px] rounded-full bg-[#00a15d]">
                        1</button>
                      <button className="h-[30px] w-[30px] text-[#00a15d] flex items-center justify-center text-[12px]">2</button>
                      <button className="h-[30px] w-[30px] text-[#00A15D] text-[12px]">3</button>
                      <button className="h-[30px] w-[30px] text-[#00A15D] text-[12px]">4</button>
                    </div>
                    <button className="flex h-[30px] bg-[] text-[#00A15D] border-[#00A15D] border items-center rounded-full px-3">
                      <p className="text-[#00a15d] text-[12px]">Next</p>
                      <AiOutlineRight className="text-[#00A15D] ml-2 text-[14px]" />
                    </button>
                  </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User_detail;
