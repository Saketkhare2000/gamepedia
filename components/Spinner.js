import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[50vh] w-screen">
      <div className=" flex justify-center items-top mt-10">
        <div className="w-16 h-16 border-b-2 border-gray-100 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;
