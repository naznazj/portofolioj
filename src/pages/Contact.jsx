import { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_cf7neln';
        const templateID = 'template_0y07k33';
        const userID = 'cgCr7_G2oYkeDq7RD';

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then(() => {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            }, () => {
                setStatus('Error sending message. Please try again.');
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Contact Me</h2>
            <form
                className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-md"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Send Message
                </button>
                {status && (
                    <div className={`mt-4 ${status.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                        {status}
                    </div>
                )}
            </form>
        </div>
    );
};
