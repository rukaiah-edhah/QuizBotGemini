"use client";

export default function Contact() {
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="bg-black w-full">
      <main className="container mx-auto px-4 py-16">
        <section className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full p-3 rounded-md text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="w-full p-3 rounded-md text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Type your message here..."
                required
                className="w-full p-3 rounded-md text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-purple-500 rounded-md text-lg font-medium hover:bg-purple-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
