import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NewsletterBox = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "3291b25d-37f4-4e84-b233-4a42be6d4ffc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert("Failed to subscribe: " + data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("Subscription error:", error);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="newsletter-box text-center bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4 sm:px-8 rounded-lg shadow-lg">
      <div className="icon-container text-indigo-500 mb-6">
        <FontAwesomeIcon icon={faEnvelope} size="3x" className="sm:text-4xl" />
      </div>

      {isSubmitted ? (
        <div className="thank-you-message">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Thank you for subscribing!
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Your subscription was successful. Stay tuned for exciting updates and offers!
          </p>
          <button
            onClick={resetForm}
            className="mt-6 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base"
          >
            Subscribe with a different email
          </button>
        </div>
      ) : (
        <>
          <p className="text-xl sm:text-2xl font-semibold text-gray-800">Subscribe now</p>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Sign up to receive exclusive deals, updates, and promotions directly in your inbox.
          </p>
          <form
            onSubmit={onSubmitHandler}
            className="w-full sm:w-4/5 lg:w-2/3 mx-auto mt-6 flex flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default NewsletterBox;
