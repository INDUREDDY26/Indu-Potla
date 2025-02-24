"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_9w601nn", // Replace with your EmailJS Service ID
        "template_3b47a5d", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "J6Jlkf0GwNMmvqVwI" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Failed to send message", error);
          setSuccessMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 w-full text-white">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">📞 Contact Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
        Feel free to reach out to me via email or connect on LinkedIn!
      </p>

      {/* Social Links */}
        <div className="mt-6 flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/indu-potla/" target="_blank" rel="noopener noreferrer"
                className="bg-[#171717] p-3 rounded-full text-white hover:bg-gray-800 transition">
                <FaLinkedin className="text-3xl" />
            </a>
            <a href="https://github.com/INDUREDDY26" target="_blank" rel="noopener noreferrer"
                className="bg-[#171717] p-3 rounded-full text-white hover:bg-gray-800 transition">
                <FaGithub className="text-3xl" />
            </a>
            <a href="mailto:indupotla26@gmail.com"
                className="bg-[#171717] p-3 rounded-full text-white hover:bg-gray-800 transition">
                <FaEnvelope className="text-3xl" />
            </a>
        </div>


      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white"
        />
        <button type="submit" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>

      {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
    </section>
  );
}
