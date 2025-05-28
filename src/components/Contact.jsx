import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_i33a6ff', 'template_bjltfaz', form.current, 'Vcz3yeY9MmtwxGgYe')
      .then(
        () => {
          setLoading(false);
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 2000);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white min-h-screen flex flex-col justify-center py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Contact Me</h2>

        {/* Success Alert */}
        {showAlert && (
          <div className="bg-green-600 text-white px-4 py-2 mb-6 rounded-md text-center transition">
            Message sent successfully!
          </div>
        )}

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-800 shadow-lg p-8 rounded-lg"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name *"
            required
            className="bg-gray-700 text-white border border-gray-600 p-3 rounded focus:outline-blue-400"
            disabled={loading}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email *"
            required
            className="bg-gray-700 text-white border border-gray-600 p-3 rounded focus:outline-blue-400"
            disabled={loading}
          />
          <select
            name="user_class"
            required
            className="bg-gray-700 text-white border border-gray-600 p-3 rounded focus:outline-blue-400"
            disabled={loading}
          >
            <option value="">Choose Class *</option>
            <option value="6th">6th Grade</option>
            <option value="7th">7th Grade</option>
            <option value="8th">8th Grade</option>
            <option value="9th">9th Grade</option>
            <option value="10th">10th Grade</option>
            <option value="11th_humanities">11th Grade - Humanities</option>
            <option value="12th_humanities">12th Grade - Humanities</option>
            <option value="bachelor_political_science">Bachelor of Political Science</option>
          </select>
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone (Optional)"
            className="bg-gray-700 text-white border border-gray-600 p-3 rounded focus:outline-blue-400"
            disabled={loading}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message *"
            required
            className="md:col-span-2 bg-gray-700 text-white border border-gray-600 p-3 rounded resize-none focus:outline-blue-400"
            disabled={loading}
          ></textarea>

          {/* Submit Button with spinner */}
          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition flex justify-center items-center"
            disabled={loading}
            style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
