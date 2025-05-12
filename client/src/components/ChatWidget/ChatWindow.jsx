// src/components/ChatWidget/ChatWindow.jsx
import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import { askSoftSell } from "../../lib/apiClient"

export default function ChatWindow() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const endRef = useRef();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const send = async () => {
    if (!input.trim()) return;
    setHistory(h => [...h, { from: "user", text: input }]);
    const q = input;
    setInput("");

    try {
      const ans = await askSoftSell(q);
      setHistory(h => [...h, { from: "ai", text: ans }]);
    } catch {
      setHistory(h => [...h, { from: "ai", text: "Oops, something went wrong." }]);
    }
  };

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-800 max-w-md mx-auto">
      <div className="h-64 overflow-y-auto mb-4">
        {history.map((m,i) => <MessageBubble key={i} from={m.from} text={m.text} />)}
        <div ref={endRef} />
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key==="Enter" && send()}
          placeholder="Ask me anything…"
          className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none"
        />
        <button
          onClick={send}
          className="px-4 py-2 bg-primary-600 text-white rounded-r-md hover:bg-primary-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
