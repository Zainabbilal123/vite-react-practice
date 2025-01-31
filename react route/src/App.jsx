

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home
 from "./pages/Home";
 import Layout from "./pages/Layout";

 import Notpage from "./pages/Notpage";

export default function App() {
  return (
    <BrowserRouter>
      
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          <Layout/>
        
    </BrowserRouter>
  );
}