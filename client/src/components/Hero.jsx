import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            Turn Your Software Licenses Into Cash
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            SoftSell helps you sell your unused software licenses quickly and
            securely. Get the best value for your digital assets.
          </p>
          <button
            className="
    inline-flex items-center
    px-5 py-2.5
    rounded-md font-medium
    bg-gray-200 text-gray-900
    hover:bg-gray-300
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
    transition-colors duration-200

    dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:focus:ring-gray-500
  "
          >
            Sell My Licenses
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
