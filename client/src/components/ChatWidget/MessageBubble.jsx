// src/components/ChatWidget/MessageBubble.jsx
export default function MessageBubble({ from, text }) {
  const base = from === "user"
    ? "ml-auto bg-primary-600 text-white"
    : "mr-auto bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100";
  return (
    <div className={`${base} px-4 py-2 rounded-lg mb-2 max-w-xs`}>
      {text}
    </div>
  );
}
