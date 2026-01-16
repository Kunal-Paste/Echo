import React from "react";

const UploadForm = () => {
  return (
    <form className="space-y-4">
      {/* Song Title */}
      <div>
        <label className="block text-sm font-medium mb-1 customretro tracking-[.3rem]">Song Title</label>
        <input
          type="text"
          placeholder="Enter song title"
          className="w-full border border-gray-300 rounded-lg px-4 py-2
                     focus:outline-none focus:ring-2 focus:ring-black customnormal"
        />
      </div>

      {/* Music File */}
      <div>
        <label className="block text-sm font-medium mb-1 customretro tracking-[.3rem]">Music File</label>
        <input
          type="file"
          accept="audio/*"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-black customnormal"
        />
      </div>

      {/* Cover Image */}
      <div>
        <label className="block text-sm font-medium mb-1 customretro tracking-[.3rem]">Cover Image</label>
        <input
          type="file"
          accept="image/*"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-black customnormal"
        />
      </div>

      {/* Submit */}
      <button
        type="button"
        className="w-full bg-gradient-to-r customretro tracking-[.5rem] from-blue-500 to-green-700
                   text-white py-3 rounded-xl font-semibold"
      >
        Upload Track
      </button>
    </form>
  );
};

export default UploadForm;
