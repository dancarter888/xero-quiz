import React, { useState } from "react";
import emailjs from "emailjs-com";

const EndCard = ({ teamName, retries }) => {
  const [submitted, setSubmitted] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    setSubmitted(true);

    emailjs
      .sendForm(
        "service_o5rxmpf",
        "template_flk39me",
        e.target,
        "user_xjW5SvTOi3pZvQikcy26o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="h-96 w-full max-w-screen-md bg-white rounded-md shadow mt-56 p-4">
      <div className="text-2xl h-full w-full flex flex-col justify-center items-center py-20">
        <h1 className="text-2xl font-bold">CONGRATULATIONS {teamName}!</h1>
        <h2 className="text-base">
          You have completed the Back to School Challenge with{" "}
          <span className="font-bold">{retries} retries!</span>
        </h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            className="absolute invisible"
            type="text"
            name="team_name"
            value={teamName}
          />
          <input
            className="absolute invisible"
            type="text"
            name="retries"
            value={retries}
          />
          {!submitted ? (
            <input
              className="w-full mt-10 cursor-pointer bg-green-500 active:bg-green-700 text-white py-1 px-2 rounded focus:outline-none"
              type="submit"
              value="Submit Results"
            />
          ) : (
            <h1 className="mt-10">Submitted</h1>
          )}
        </form>
      </div>
    </div>
  );
};

export default EndCard;
