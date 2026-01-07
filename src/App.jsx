import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/page";
import Author from "./pages/author/page";
import Error from "./pages/error/page";
import Contact from "./pages/contact/page";
import Books from "./pages/books/page";
import BookPage from "./pages/books/bookpage";
import SearchResults from "./pages/books/searchresults";

{
  /* Pages Imports */
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* Routes to each page */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/books" element={<Books />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/books/:id" element={<BookPage />} />
          <Route path="/author" element={<Author />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
