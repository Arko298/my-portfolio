'use client';
import { sanityClient } from '@/lib/sanity';
import { useState } from 'react';

const inputClasses = 'w-full px-4 py-3 rounded-lg border border-blue-400 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 hover:border-blue-300';
const labelClasses = 'block text-sm font-medium text-gray-300';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess(false);

    try {
      await sanityClient.create({
        _type: 'contact',
        name: formData.name,
        email: formData.email,
        message: formData.message,
        submittedAt: new Date().toISOString(),
      });
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold mb-4 text-blue-400">Get in Touch</h1>
      <p className="text-lg mb-8 text-gray-300">Feel free to reach out for any inquiries or collaborations!</p>
      <div className="bg-gray-800 w-full max-w-lg p-8 rounded-lg shadow-lg border border-blue-400">
        {success && <p className="text-green-400 mb-4">Message sent successfully!</p>}
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your message here..."
              className={inputClasses}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-400 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition-colors duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}