import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";

const BackButton = ({ destination = "/home" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="btn btn-primary bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
