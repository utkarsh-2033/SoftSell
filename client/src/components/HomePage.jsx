import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero.jsx";
// import ChatWindow from "./ChatWidget/ChatWindow.jsx"
import ChatPopup from "./ChatWidget/ChatPopup.jsx";
const HomePage = ({darkMode}) => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Chat Widget */}
      <ChatPopup />
      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Upload License",
                description:
                  "Simply upload your software license details through our secure platform.",
                icon: "📄",
              },
              {
                title: "Get Valuation",
                description:
                  "We analyze your license and provide a competitive market valuation.",
                icon: "💰",
              },
              {
                title: "Get Paid",
                description:
                  "Receive payment quickly and securely once your license is sold.",
                icon: "💳",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title + (darkMode ? "-dark" : "-light")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 40 }} // ↪ scroll animation
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700
                      transition-transform  duration-300
                      hover:shadow-lg hover:scale-105"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Secure Transactions",
                description:
                  "Bank-level security for all your license transactions.",
                icon: "🔒",
              },
              {
                title: "Best Market Rates",
                description:
                  "Get the highest possible value for your software licenses.",
                icon: "📈",
              },
              {
                title: "Fast Processing",
                description: "Quick verification and payment processing.",
                icon: "⚡",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title + (darkMode ? "-dark" : "-light")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 40 }} // ↪ scroll animation
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm
                      transition-transform  duration-300
                      hover:shadow-lg hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "IT Director",
                company: "TechCorp Inc.",
                testimonial:
                  "SoftSell made selling our unused licenses incredibly easy. The process was smooth and we got great value for our assets.",
              },
              {
                name: "Michael Chen",
                role: "Software Manager",
                company: "Innovate Solutions",
                testimonial:
                  "I was skeptical at first, but SoftSell delivered beyond our expectations. The team was professional and the payment was prompt.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                // key={darkMode ? 'dark' : 'light'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onAnimationStart={() => console.log("animation started")}
                onAnimationComplete={() => console.log("animation done")}
                className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700
                        transition-transform  duration-300
                        hover:shadow-lg hover:scale-105"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.testimonial}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
