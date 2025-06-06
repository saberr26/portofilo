import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants'; // Assuming CONTACT_INFO includes email, social links, etc.

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle'); // Reset status

    // In a real application, you would send this data to a backend API
    // For this example, we'll simulate a network request.
    console.log('Form data submitted:', formData);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form

    } catch (error) {
      // Simulate error
      setSubmitStatus('error');
      console.error('Form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <div className="mb-16 text-center">
        <div className="inline-flex items-center justify-center h-12 w-12 bg-tertiary/10 rounded-full mb-6">
          <Mail className="text-tertiary" size={24} />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </div>

      <div className="relative">
        <div className="mx-auto max-w-4xl p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                     className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                     className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting}
                    className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={20} className={`ml-3 ${isSubmitting ? 'animate-pulse' : ''}`} />
            </button>
            {submitStatus === 'success' && <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>}
            {submitStatus === 'error' && <p className="text-red-500 mt-4 text-center">Failed to send message. Please try again later.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;