import React from "react";

const page = () => {
  return (
    <div className=" w-full bg-gradient-to-t from-[#000000] to-[#434343] flex flex-col gap-[2rem]">
      {/* NavBar */}
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

      {/* intro card */}
      <div className="main-card p-[1rem] flex flex-col gap-[3rem] lg:gap-[2rem]">
        <div className="intro bg-pink-600 h-[17rem] lg:h-[23rem] rounded-4xl p-[1.5rem] lg:pl-[5rem] flex flex-col gap-[.5rem]">
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

        {/* top-songs */}
        <div className="top-song h-[26rem] lg:h-[20rem] p-8 rounded-2xl">
          <h2 className="text-white text-xl font-semibold mb-6 customretro tracking-[.2rem]">
            Your Trending Songs
          </h2>

          <div className="grid grid-cols-2 gap-4 lg:flex lg:gap-[7rem]">
            {/* Song Card */}
            <div className="relative h-32 lg:h-40 lg:w-40 rounded-xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/55/1e/94/551e94ae8845df9d455f221c07421dcd.jpg"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                <p className="text-white text-sm font-medium customnormal">
                  Midnight Echo
                </p>
              </div>
            </div>

            <div className="relative h-32 lg:h-40 lg:w-40 rounded-xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/55/1e/94/551e94ae8845df9d455f221c07421dcd.jpg"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                <p className="text-white text-sm font-medium customnormal">
                  Lost Frequencies
                </p>
              </div>
            </div>

            <div className="relative h-32 lg:h-40 lg:w-40 rounded-xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/55/1e/94/551e94ae8845df9d455f221c07421dcd.jpg"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                <p className="text-white text-sm font-medium customnormal">
                  Neon Dreams
                </p>
              </div>
            </div>

            <div className="relative h-32 lg:h-40 lg:w-40 rounded-xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/55/1e/94/551e94ae8845df9d455f221c07421dcd.jpg"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                <p className="text-white text-sm font-medium customnormal">
                  After Hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* music player */}
        <div className="music-player bg-blue-500 h-[26rem] lg:w-[70rem] rounded-2xl p-5 text-white flex flex-col justify-between">
          <h2 className="text-white text-xl font-semibold  customretro tracking-[.2rem]">
            Currently Playing
          </h2>

          
          {/* Song Info */}
          <div className="flex flex-col items-center gap-3">
            {/* Cover */}
            <div className="w-[12rem] h-[7rem] lg:w-[15rem] h-[10rem] rounded-xl overflow-hidden mr-[16rem] lg:mr-[47rem]">
              <img
                src="https://i.pinimg.com/736x/55/1e/94/551e94ae8845df9d455f221c07421dcd.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <div className="text-center mr-[16rem] lg:mr-[47rem]">
              <h3 className="text-xl font-semibold">Midnight Echo</h3>
              <p className="text-sm text-white/80">by Neon Artist</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-[-1rem] mr-[16rem] lg:mr-[47rem]">
            <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
              ⏮
            </button>

            <button className="w-14 h-14 rounded-full bg-white text-blue-700 flex items-center justify-center text-2xl">
              ▶
            </button>

            <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
              ⏭
            </button>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar">
            <div className="w-full h-1 bg-white/30 rounded">
              <div className="w-1/3 h-full bg-white rounded"></div>
            </div>
            <div className="flex justify-between text-xs text-white/70 mt-1">
              <span>1:12</span>
              <span>3:45</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
