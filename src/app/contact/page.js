"use client";

import { useState } from 'react';

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
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      {/* High-End Hero Section */}
      <div className="page-hero" style={{ minHeight: '40vh' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Get in Touch</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '700px' }}>
          Begin your journey to a redefined outdoor space. Connect with our design specialists today.
        </p>
      </div>

      <div className="container contact-grid">
        {/* Left Column: Contact Details */}
        <div>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>
            Let&apos;s build something extraordinary.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
            Whether you are an architect detailing a new build, or a homeowner looking to elevate your current property, our engineering and design team is ready to assist you with bespoke solutions.
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>Main Office OpenAlum</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              
              Nazareth, 2004 st. Zip code: 16955
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>Direct Contact</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Phone: +972 52-839-9655<br />
              Email: info@apertolux.com
            </p>
          </div>
        </div>

        {/* Right Column: The Inquiry Form */}
        <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <h2 style={{ color: 'var(--navy-primary)', marginBottom: '1rem' }}>Thank You</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                Your inquiry has been received. One of our design specialists will contact you shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-outline" 
                style={{ marginTop: '2rem' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--navy-primary)', marginBottom: '2rem' }}>Request a Consultation</h3>
              
              {errorMessage && (
                <div style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem' }}>
                  {errorMessage}
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" className="form-input" required disabled={isSubmitting} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" className="form-input" required disabled={isSubmitting} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" className="form-input" required disabled={isSubmitting} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-input" disabled={isSubmitting} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="interest">Primary Interest</label>
                <select id="interest" name="interest" className="form-select" required disabled={isSubmitting}>
                  <option value="">Select a Solution...</option>
                  <option value="Movable Pool Floor">Movable Pool Floor</option>
                  <option value="Automated Pool Cover">Automated Pool Cover</option>
                  <option value="Bioclimatic Pergola">Bioclimatic Pergola</option>
                  <option value="Zip Screens / Shutters">Zip Screens / Shutters</option>
                  <option value="Multiple Solutions">Multiple Solutions</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Project Details</label>
                <textarea 
                  id="message" 
                  name="message"
                  className="form-textarea" 
                  rows="5" 
                  placeholder="Tell us a bit about your timeline, location, and vision..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}