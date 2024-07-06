'use client';

import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Mesajınız başarıyla gönderildi!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Mesaj gönderilirken bir hata oluştu.');
      }
    } catch (error) {
      setStatus('Mesaj gönderilirken bir hata oluştu.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-customGray text-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4">İletişim</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Adınız
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-customDarkGray border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-customDarkGray border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Mesajınız
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full h-32 px-3 py-2 bg-customDarkGray border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-customPurple text-white py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-customPurpleDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Gönder
          </button>
        </div>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};

export default ContactPage;
