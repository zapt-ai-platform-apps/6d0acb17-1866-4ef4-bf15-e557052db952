import React, { useState } from 'react';

const ChatInput = ({ onSend, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex p-2 border-t">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 border rounded-l box-border"
        placeholder="Type your message..."
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="p-2 bg-blue-600 text-white rounded-r cursor-pointer disabled:opacity-50"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;