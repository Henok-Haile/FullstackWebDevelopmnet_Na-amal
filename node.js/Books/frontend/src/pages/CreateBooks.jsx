import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
      image,
    };

    axios
      .post("http://localhost:5555/books", data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        enqueueSnackbar("book created successfully");
        navigate("/home");
      })
      .catch((error) => {
        // alert('An error happened. Please Check console');
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="my-4">Create Book</h1>

      <div className="p-4">
        <div className="my-4">
          <label className="mx-4">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mx-5 px-4 py-2"
          />
        </div>

        <div className="my-4">
          <label className="mx-2">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mx-4 px-4 py-2"
          />
        </div>

        <div className="my-4">
          <label className="mx-2">PublishYear</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="mx-4 px-4 py-2"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-5000">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="norder-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <button className="btn btn-primary btn-lg" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
