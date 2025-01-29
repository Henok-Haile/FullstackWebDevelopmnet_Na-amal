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

  // Cloudinary Upload Function
  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "henokk"); // Replace with your Cloudinary upload preset
    formData.append("cloud_name", "dpnmbolhm"); // Replace with your Cloudinary cloud name

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dpnmbolhm/image/upload`,
        formData
      );
      console.log(response.data.secure_url);
      return response.data.secure_url; // Return uploaded image URL
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      enqueueSnackbar("Image upload failed", { variant: "error" });
      return null;
    }
  };

  const handleSaveBook = async () => {
    if (!image) {
      enqueueSnackbar("Please select an image", { variant: "warning" });
      return;
    }

    enqueueSnackbar("Uploading image...", { variant: "info" });
    const imageUrl = await uploadImageToCloudinary(image);

    if (!imageUrl) return;

    const data = {
      title,
      author,
      publishYear,
      image: imageUrl, // Use the Cloudinary image URL
    };

    const token = localStorage.getItem("token");
    axios
      .post("https://new-one-yoka.onrender.com/books", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        enqueueSnackbar("Book created successfully", { variant: "success" });
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error saving book:", error);
        enqueueSnackbar("Failed to create book", { variant: "error" });
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
          <label className="mx-2">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="mx-4 px-4 py-2"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="border-2 border-gray-500 px-4 py-2 w-full"
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
