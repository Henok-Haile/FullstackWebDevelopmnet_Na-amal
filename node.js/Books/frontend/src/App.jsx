import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateBook from "./pages/CreateBooks.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
