import React, { useState } from "react";
import "../styles/animation.css";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // เพิ่มข้อความผู้ใช้ใน state
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    // ตั้งค่า isTyping เป็น true
    setIsTyping(true);

    // ส่งข้อความไปยัง Backend
    try {
      const response = await fetch("http://localhost:5001/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.response, sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // ตั้งค่า isTyping เป็น false เมื่อเสร็จสิ้น
      setIsTyping(false);
    }
  };

  const handleClear = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex-1 overflow-y-auto mb-4 relative">
        {messages.length === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-gray-500">ไม่มีข้อมูล</div>
          </div>
        ) : (
          // ใช้ map ในการวนลูปข้อมูลใน messages
          messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-2 rounded ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-200 mr-auto"
              }`}
            >
              {msg.text}
            </div>
          ))
        )}
        {/* แสดง Typing Indicator พร้อม Animation */}
        {isTyping && (
          <div className="p-2 my-2 bg-gray-200 mr-auto rounded w-24">
            <div className="flex space-x-1">
              <div className="typing-dot animate-bounce delay-100"></div>
              <div className="typing-dot animate-bounce delay-200"></div>
              <div className="typing-dot animate-bounce delay-300"></div>
            </div>
          </div>
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 p-2 border border-gray-300 rounded-l"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          Send
        </button>
        <button
          onClick={handleClear}
          className="bg-red-500 text-white p-2 ml-2 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
