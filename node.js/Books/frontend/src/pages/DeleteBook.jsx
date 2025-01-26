import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import React from "react";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        enqueueSnackbar("Book deleted successfully")
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="my-4">Delete Book</h1>

      <div className="d-flex flex-column flex-justofy-center border border-danger rounded-xl p-5">
        <h5 className="display-5 my-5 text-center">
          Are You Sure to delete this book?
        </h5>

        <button
          className="p-4 btn btn-danger text-white m-8"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
