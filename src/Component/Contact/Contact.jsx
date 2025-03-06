import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ error: true, message: 'Please fill in all fields' });
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitStatus({ error: true, message: 'Please enter a valid email' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to send message');
      }

      setSubmitStatus({ error: false, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus({ 
        error: true, 
        message: error.message || 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-fit py-20 font-josefin bg-gradient-to-t from-violet-700 via-purple-900 to-indigo-950 flex justify-center items-center p-4">
      <div className="flex flex-col gap-10 justify-center items-center w-full max-w-3xl">
        <h2 className="md:text-4xl text-2xl text-white font-bold mb-6 font-cinzel hover:font-josefin">
          Feel free to contact
        </h2>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-md text-white p-8 w-full">
          {submitStatus && (
            <div className={`mb-4 p-3 rounded ${submitStatus.error ? 'bg-red-500/50' : 'bg-green-500/50'}`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label htmlFor="name" className="text-sm absolute top-0 left-0 transform -translate-y-4 translate-x-2 px-1 bg-transparent text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white py-2 text-white focus:outline-none placeholder-transparent focus:border-orange-400 transition-all duration-300 ease-in-out"
                placeholder="Your Name"
              />
            </div>

            <div className="relative">
              <label htmlFor="email" className="text-sm absolute top-0 left-0 transform -translate-y-4 translate-x-2 px-1 bg-transparent text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white py-2 text-white focus:outline-none placeholder-transparent focus:border-orange-400 transition-all duration-300 ease-in-out"
                placeholder="Your Email"
              />
            </div>

            <div className="relative">
              <label htmlFor="message" className="text-sm absolute top-0 left-0 transform -translate-y-4 translate-x-2 px-1 bg-transparent text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-transparent border-b border-white py-2 text-white focus:outline-none placeholder-transparent focus:border-orange-400 transition-all duration-300 ease-in-out resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group bg-gradient-to-bl from-purple-900 via-purple-600 to-purple-900 text-white py-2 px-4 rounded-lg transition-colors shadow-md shadow-black hover:shadow-none relative overflow-hidden disabled:opacity-50"
              >
                <span className="group-hover:opacity-0 transition-opacity duration-300">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <i className="ri-mail-send-line absolute left-14 text-xl top-1/4 animate-bounce transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-100"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
