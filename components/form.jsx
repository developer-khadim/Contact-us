import React from "react";
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import hero from "/src/assets/Service.svg";

const Form = () => {
  return (
    <section className="w-[100vw] flex justify-center  ">
      <div className=" w-[68vw] flex justify-between ">
        <div className=" w-[40%] ">
          <div className="flex gap-[73px] my-[17px] ">
            <button className=" flex gap-2 items-center hover:text-black hover:bg-transparent hover:border hover:border-black  text-white bg-black py-3 px-8  rounded-sm ">
              {" "}
              <MdOutlineMessage />
              VIA SUPPORT CHAT
            </button>
            <button className=" flex gap-2 items-center hover:text-black hover:bg-transparent hover:border hover:border-black  text-white bg-black py-3 px-10  rounded-sm ">
              {" "}
              <IoCall />
              VIA CALL
            </button>
          </div>
          <button className=" flex itmes-center gap-2 hover:text-white hover:bg-black  text-black  border border-black bg-transparent py-3 px-40  rounded-sm ">
            <MdOutlineMessage className="text-[20px]" /> VIA EMAIL FORM
          </button>
          <div className="w-[90%] mx-6  ">
            <form className="w-[90%] my-5  flex gap-5 flex-col ">
              <input
                className="py-2 px-5  bg-transparent border  border-black/70 rounded-sm "
                type="name"
                placeholder="Enter Name"
              />
              <input
                className="py-2 px-5  bg-transparent border  border-black/70 rounded-sm "
                type="email"
                placeholder="Enter Email"
              />
              <textarea
                className="py-10 px-5  bg-transparent border  border-black/70 rounded-sm "
                name="message"
                placeholder="Message"
              ></textarea>
            </form>
            <div className=" w-[90%] flex justify-end">
              <button className=" bg-black py-3 px-20 rounded text-white hover:bg-transparent hover:border hover:text-black hover:border-black/70 hover:duration-300 ">
                {" "}
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="relative bottom-10 ">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Form;
