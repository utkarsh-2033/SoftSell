export default function MessageBubble({ from, text }) {
  const base = from === "user"
    ? "ml-auto bg-blue-400 text-white dark:bg-gray-700 dark:text-gray-100"
    : "mr-auto bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100";
  
  return (
    <div className={`${base} px-4 py-2 rounded-lg mb-2 max-w-xs`}>
      {text}
    </div>
  );
}
