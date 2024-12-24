import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function ContactPage() {
  // フォーム要素を参照するためのuseRef
  const form = useRef(); 
  const [status, setStatus] = useState(""); // ステータスメッセージ用の状態

  const sendEmail = (e) => {
    e.preventDefault(); // ページリロードを防ぐ

    emailjs
      .sendForm(
        "service_09kvp6p",
        "template_crc9ela",
        form.current,
        "vE1TiZ8-gMASzmXma"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message. Please try again later.");
        }
      );

    e.target.reset(); // フォームのリセット
  };

  return (
    <>
    <div className="max-w-lg min-h-screen p-8  mx-auto">
      <h1 className="text-4xl font-bold font-montserrat mb-8">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label >Name</label>
        <input type="text" name="user_name" className="w-full p-2 border rounded" required />
        
        <label className="block text-lg mb-2">Email</label>
        <input type="email" name="user_email"  className="w-full p-2 border rounded"required />
        
        <label className="block text-lg mb-2">Message</label>
        <textarea name="message" className="w-full p-2 border rounded" required />
        
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
</>
  );
}


  export default ContactPage;