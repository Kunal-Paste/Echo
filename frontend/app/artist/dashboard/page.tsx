import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-t from-[#000000] to-[#434343] flex flex-col gap-[2rem]">
      <div className="navbar h-[4rem] mt-[1rem] lg:mt-[.5rem] lg:h-[4rem] flex justify-between">
        <h1 className="text-[1.8rem] customretro font-bold tracking-[.6rem] ml-[.4rem] mt-[.5rem] lg:text-[2rem] lg:ml-[1.5rem] lg:mt-[.5rem]">
          Your Studio
        </h1>
        <div className="nav-right flex gap-[2rem] items-center">
          <div className="bg-white text-black h-[3rem] w-[3rem] rounded-full text-center">
            <img
              className="h-full w-full rounded-full"
              src="https://i.pinimg.com/1200x/90/74/a6/9074a68f86e0f006a9ec7183530e66c0.jpg"
              alt=""
            />
          </div>

          <button className="bg-white text-black mr-[1rem] p-[.6rem] rounded-3xl customnormal font-bold hover:bg-black hover:text-white">
            Logout
          </button>
        </div>
      </div>

      <div className="main-card h-full  p-[1rem]">
        <div className="bg-pink-600 h-[17rem] lg:h-[23rem] rounded-4xl p-[1.5rem] lg:pl-[5rem] flex flex-col gap-[.5rem]">
          <h1 className="text-[1.5rem] lg:text-[3rem] customretro">
            Your space, your music <br /> Welcome to ECHO STUDIO.
          </h1>

          <p className="text-[1.2rem] lg:text-[2rem] customnormal">
            We’re glad to have you here. Keep creating and uploading your music
            — every track you share helps shape this platform.
          </p>

          <div className="buttons flex gap-[1rem] ml-[.5rem]">
            <button className="mr-[1rem] rounded-[1rem] p-[.6rem]  customnormal font-bold hover:bg-white hover:text-black border-2 border-amber-50">
              Upload Music
            </button>
            <button className="bg-black mr-[1rem] rounded-[1rem] p-[.6rem]  customnormal font-bold hover:bg-white hover:text-black">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
