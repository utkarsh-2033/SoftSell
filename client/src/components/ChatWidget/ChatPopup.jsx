import React, { useState } from "react";
import ChatWindow from "./ChatWindow"; 
import { X, MessageCircle } from "lucide-react"; 

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-[350px] max-w-full bg-white dark:bg-gray-800 shadow-2xl rounded-2xl z-50 overflow-hidden">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center px-4 py-3 border-b dark:border-gray-700 bg-gray-100 dark:bg-gray-700">
            <h2 className="text-lg font-semibold">SoftSell AI</h2>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X className="w-5 h-5 text-gray-600 hover:text-red-500" />
            </button>
          </div>

          {/* ChatWindow content */}
          <div className="p-4 max-h-[500px] overflow-y-auto">
            <ChatWindow />
          </div>
        </div>
      )}
    </>
  );
}
