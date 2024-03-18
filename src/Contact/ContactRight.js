import React, { useState } from "react";

const ContactRight = () => {

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number field cannot be empty");
    } else if (email === "") {
      setErrMsg("Email address can not be blank");
    } else if (!emailValidation(email)) {
      setErrMsg("Please enter a valid email");
    } else if (subject === "") {
      setErrMsg("Subject field cannot be empty");
    } else if (message === "") {
      setErrMsg("Message Field Cannot Be Empty");
    } else {
      setSuccessMsg(`Thank You ${username}, Your Messages Sent Successfully!`);
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div
      className="w-full lgl:w-[60%] h-full py-10
          gap-8 p-4 lgl:p-8 rounded-lg flex flex-col"
    >
      <form action="" className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-10">
        {errMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                shadow-shadowOne text-center text-orange-500 text-base tracking-wide 
                animate-bounce"
          >
            {errMsg}
          </p>
        )}

        {successMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#878d98] to-[#a7abaf] 
                shadow-shadowOne text-center text-green-500 text-base tracking-wide 
                animate-bounce"
          >
            {successMsg}
          </p>
        )}

        <div className="w-full flex flex-col lgl:flex-row gap-10">
        <div className="flex justify-center items-center text-center">
      <h1 className='flex justify-center items-center text-cyan-400 text-4xl underline'>Contact Me</h1>
    </div>
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-cyan-400 uppercase tracking-wide">
              YOUR NAME
            </p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#edf0f3]
              text-black px-4 active:outline-none focus-visible:outline-red
              outline-none focus-visible:border-b-transparent duration-300 p-2"
              type="text"
            />
          </div>
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-cyan-400 uppercase tracking-wide">
              PHONE NUMBER
            </p>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#edf0f3]
              text-black px-4 active:outline-none focus-visible:outline-red
              outline-none focus-visible:border-b-transparent duration-300 p-2"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-cyan-400 uppercase tracking-wide">EMAIL</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#edf0f3]
            text-black px-4 active:outline-none focus-visible:outline-red
              outline-none focus-visible:border-b-transparent duration-300 p-2"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-cyan-400 uppercase tracking-wide">
            SUBJECT
          </p>
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#edf0f3]
            text-black px-4 active:outline-none focus-visible:outline-red
              outline-none focus-visible:border-b-transparent duration-300 p-2"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-cyan-400 uppercase tracking-wide">
            MESSAGE
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#edf0f3]
            text-black px-4 active:outline-none focus-visible:outline-red
              outline-none focus-visible:border-b-transparent duration-300 p-2"
            cols="30"
            rows="6"
          ></textarea>
        </div>
        <div className="w-full">
          <button
            onClick={handleSend}
            className="w-full h-12 bg-[#141518] rounded-lg text-base text-white
                tracking-wider uppercase hover:text-white duration-300 hover:border-[1px]
                hover:border-designColor border-transparent"
          >
            Send Message
          </button>
        </div>
        {errMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                shadow-shadowOne text-center text-orange-500 text-base tracking-wide 
                animate-bounce"
          >
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                shadow-shadowOne text-center text-green-500 text-base tracking-wide 
                animate-bounce"
          >
            {successMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactRight;
