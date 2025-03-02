import React, { useState, forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
    const [formData, setFormData] = useState({ email: "", message: "" })
    const [status, setStatus] = useState('')


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...")
        try {
            const response = await fetch("http://localhost:5000/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("Email sent successfully!")
                alert("Email sent successfully!");
            } else {
                setStatus("Something went wrong!")
                alert(data.error);
            }
        } catch (error) {
            setStatus("Something went wrong!")
            console.error("Error sending email:", error);
        }
    };


    return (
        <div ref={ref} className="flex flex-col items-center justify-center py-32 select-none ">
            <h2 className="text-4xl poppins-bold font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                Reach Me
            </h2>

            <form action="/email/send" method="post" className="flex flex-col space-y-5 w-full md:w-3xl bg-gray-900/50 backdrop-blur-md p-6 rounded-xl shadow-md border border-gray-800 mt-10">

                <label htmlFor="email" className="text-gray-300 poppins-medium">Your Email</label>
                <input
                    className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    value={formData.email}
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                />

                <label htmlFor="message" className="text-gray-300 poppins-medium">Your Message</label>
                <textarea
                    className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="message"
                    id="message"
                    value={formData.message}
                    rows={5}
                    placeholder="Write your message..."
                    onChange={handleChange}
                ></textarea>

                <button className="mt-3 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition duration-200 ease-in-out"
                    onClick={handleSubmit}
                >
                    Send Message
                </button>

                <p className='text-white'>{status}</p>
            </form>
        </div>

    )
})

export default Contact;