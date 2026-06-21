"use client";

import { useState } from 'react';
import Image from 'next/image';
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Extract data directly from the form
    const formData = new FormData(e.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const interest = formData.get('interest');
    const userMessage = formData.get('message');

    // Format the payload to match your API route's expectations
    const payload = {
      name: `${firstName} ${lastName}`.trim(),
      email: email,
      phone: phone,
      // Combine the dropdown interest and the textarea into one message for the email
      message: `Primary Interest: ${interest}\n\nProject Details:\n${userMessage}`,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset(); // Clear the form
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Failed to send the message. Please check your network connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

return (
  <main className="bg-white">

    {/* Hero */}
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">

      <div className="absolute inset-0">
        <Image
          src="/projects/3/3.jpg"
          alt="Luxury Outdoor Living"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 px-6 text-center text-white">
        <p className="mb-6 text-xs uppercase tracking-[0.4em]">
          Consultation & Planning
        </p>

        <h1 className="mb-8 text-5xl font-light md:text-6xl lg:text-8xl">
          Let&apos;s Create
          <br />
          Something Extraordinary
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-gray-200">
          From private residences to landmark hospitality projects,
          our specialists are ready to bring your vision to life.
        </p>
      </div>

    </section>

    {/* Featured Image */}
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

        <Image
          src="/proj1.png"
          alt="Apertolux Project"
          width={2200}
          height={1400}
          className="h-[350px] w-full rounded-[32px] object-cover md:h-[500px] lg:h-[750px]"
        />

      </div>
    </section>

    {/* Consultation */}
    <section className="pb-24 lg:pb-36">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">

        <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left */}
          <div>

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
              Direct Contact
            </p>

            <h2 className="mb-8 text-4xl font-light text-[#0A192F] lg:text-6xl">
              Start Your Project
            </h2>

            <p className="mb-12 text-lg leading-relaxed text-gray-600">
              Whether you are planning a luxury residence,
              wellness destination, hospitality development,
              or bespoke architectural feature, our team
              is ready to assist.
            </p>

            <div className="space-y-8">

              <div>
                <h3 className="mb-2 text-lg font-medium text-[#0A192F]">
                  Email
                </h3>
                <p className="text-gray-600">
                  info@apertolux.com
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium text-[#0A192F]">
                  Phone
                </h3>
                <p className="text-gray-600">
                  +972 52-839-9655
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium text-[#0A192F]">
                  Location
                </h3>
                <p className="text-gray-600">
                  Nazareth, Israel
                </p>
              </div>

            </div>

          </div>

          {/* Form */}
          <div>

            {isSubmitted ? (
              <div className="py-20">

                <h3 className="mb-6 text-4xl font-light text-[#0A192F]">
                  Thank You
                </h3>

                <p className="max-w-xl text-lg text-gray-600">
                  Your inquiry has been received.
                  One of our specialists will contact
                  you shortly.
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 rounded-full border border-[#0A192F] px-8 py-4 text-[#0A192F] transition hover:bg-[#0A192F] hover:text-white"
                >
                  Send Another Inquiry
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >

                {errorMessage && (
                  <div className="rounded-xl bg-red-50 p-4 text-red-700">
                    {errorMessage}
                  </div>
                )}

                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    disabled={isSubmitting}
                    className="border-b border-gray-300 py-4 outline-none focus:border-[#0A192F]"
                  />

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    disabled={isSubmitting}
                    className="border-b border-gray-300 py-4 outline-none focus:border-[#0A192F]"
                  />

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    disabled={isSubmitting}
                    className="border-b border-gray-300 py-4 outline-none focus:border-[#0A192F]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    disabled={isSubmitting}
                    className="border-b border-gray-300 py-4 outline-none focus:border-[#0A192F]"
                  />

                </div>

                <select
                  name="interest"
                  required
                  disabled={isSubmitting}
                  className="w-full border-b border-gray-300 py-4 outline-none focus:border-[#0A192F]"
                >
                  <option value="">
                    Select a Solution
                  </option>
                  <option value="Movable Pool Floor">
                    Movable Pool Floor
                  </option>
                  <option value="Automated Pool Cover">
                    Automated Pool Cover
                  </option>
                  <option value="Bioclimatic Pergola">
                    Bioclimatic Pergola
                  </option>
                  <option value="Zip Screens / Shutters">
                    Zip Screens / Shutters
                  </option>
                   <option value="Hot Tubs & Spas">
                    Hot Tubs & Spas
                  </option>
                  <option value="Multiple Solutions">
                    Multiple Solutions
                  </option>
                </select>

                <textarea
                  name="message"
                  required
                  disabled={isSubmitting}
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full border-b border-gray-300 py-4 outline-none focus:border-[#0A192F]"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-[#0A192F] px-10 py-4 text-white transition hover:bg-[#172A45]"
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Send Inquiry"}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>

    {/* Closing Statement */}
    <section className="bg-[#081321] py-32 text-center text-white">

      <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gray-400">
        Since 2006
      </p>

      <h2 className="mx-auto max-w-5xl px-6 text-4xl font-light md:text-5xl lg:text-7xl">
        Engineering Exceptional
        Outdoor Spaces
      </h2>

    </section>

  </main>
);
}