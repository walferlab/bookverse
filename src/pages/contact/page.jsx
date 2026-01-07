import BgImage1 from "../../assets/backgrounds/4819765.jpg";
import BgImage2 from "../../assets/backgrounds/4812345.jpg";

import { IoIosMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoArrowBackCircleSharp } from "react-icons/io5";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Contact() {

  // 🔹 Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg_status, setmsg_status] = useState(false);

  // 🔹 Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("contact_messages")
      .insert([formData]);

    if (error) {
      console.error(error);
      setmsg_status(true)
    } else {
      setmsg_status(true)
      setFormData({ name: "", email: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-yellow-200 p-6 md:p-12 font-sans">

      {/* Back Button */}
      <div
        className="fixed top-3 left-3 flex items-center gap-2 font-display font-medium cursor-pointer"
        onClick={() => window.location.href = "/"}
      >
        <IoArrowBackCircleSharp size={40} />
        Back
      </div>

      {/* Page Title */}
      <h1 className="text-4xl md:text-6xl font-author font-bold text-center mb-12 text-black">
        CONTACT
      </h1>

      {/* Comic Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Panel – Contact Form */}
        <div
          className={`md:col-span-2 border-4 border-black p-6 shadow-[8px_8px_0px_#000] bg-cover bg-center ${!msg_status ? "block" : "hidden"
          }`}
          style={{ backgroundImage: `url(${BgImage1})` }}
        >
          <h2 className="text-3xl font-extrabold mb-6 font-author">
            SEND A MESSAGE
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 font-display">

            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 border-4 border-black rounded-md focus:outline-none bg-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 border-4 border-black rounded-md focus:outline-none bg-white"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-3 border-4 border-black rounded-md focus:outline-none bg-white"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-green-300 border-4 border-black px-6 py-3 text-xl font-bold
                         shadow-[4px_4px_0px_#000] hover:bg-green-400
                         active:translate-x-1 active:translate-y-1 active:shadow-none
                         disabled:opacity-50"
            >
              {loading ? "SENDING..." : "SEND"}
            </button>

          </form>
        </div>

        {/* Panel - Success or Failed */}
        <div
          className={`md:col-span-2 border-4 border-black p-6 shadow-[8px_8px_0px_#000] bg-cover bg-center flex items-center justify-center ${!msg_status ? "hidden" : "block"
          }`}
          style={{ backgroundImage: `url(${BgImage1})` }}
        >
            <p className="font-display text-2xl">Message Sent. Have a great day!</p>
        </div>

        {/* Panel – Other Contacts */}
        <div
          className="border-4 border-black p-6 text-center shadow-[8px_8px_0px_#000] bg-cover bg-center space-y-3 min-h-80"
          style={{ backgroundImage: `url(${BgImage2})` }}
        >
          <h2 className="text-3xl font-extrabold font-author">
            OTHER CONTACTS
          </h2>

          <p className="text-xl font-bold font-display flex items-center justify-center gap-2">
            <AiFillInstagram size={30} /> walfer.lab
          </p>

          <p className="text-xl font-bold font-display flex items-center justify-center gap-2">
            <IoIosMail size={30} /> walferlab@gmail.com
          </p>
        </div>

      </div>
    </div>
  );
}
