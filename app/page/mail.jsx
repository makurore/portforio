import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
function gmail (){

    const form =useRef();
    const [status, setStatus] = useState("");
    const sendEmail =(e)=>{
        e.preventDefault();
     emailjs
      .sendForm(
        "service_09kvp6p",
        "template_crc9ela",
        form.current,
        "vE1TiZ8-gMASzmXma"
    )
    .then(
        (result)=>{
            console.log(result.text)
            setStatus("Messge sent successfully!");
        },
      (error)=>{
      console.log(error.text)
      setStatus("Failed to send message. Please try again later.")
      }
    )
    e.target.reset(); // フォームのリセット
    <div className="min-h-screen p-8">
    <h2 className="text-4xl font-bold font-montserrat mb-8">連絡先</h2>
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <form className="space-y-6">
        <div>
          <label className="block text-lg mb-2">お名前</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-lg mb-2">メールアドレス</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-lg mb-2">メッセージ</label>
          <textarea
            name="message"

            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          送信
        </button>
      </form>
    </div>
  </div>
};

}
export default gmail;