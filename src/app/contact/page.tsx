import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Hacked Aging',
  description: 'Get in touch with the Hacked Aging team. We are here to answer your questions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-extrabold text-center mb-4 text-white">Get in Touch</h1>
        <p className="text-lg text-center mb-12 text-zinc-400">
          Have a question or want to learn more? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-zinc-200">Email</h3>
                <p><a href="mailto:hello@hackedaging.com" className="text-blue-400 hover:underline">hello@hackedaging.com</a></p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-200">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                  {/* Replace '#' with your actual social media links */}
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">Twitter</a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form className="space-y-6" name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300">Full Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email Address</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300">Your Message</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
              </div>

              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}