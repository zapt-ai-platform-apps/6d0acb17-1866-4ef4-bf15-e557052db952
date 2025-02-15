import React, { useState } from 'react';

export function ChatWindow({ messages }) {
  return (
    <div className="p-4 overflow-y-auto h-full">
      {messages.map((msg, index) => (
        <div key={index} className="mb-2">
          <strong>{msg.sender}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
}

export function ChatInput({ onSend, isLoading }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onSend(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isLoading}
        className="flex-grow border rounded-l px-3 py-2"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-500 text-white px-4 py-2 rounded-r"
      >
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}

export function Disclaimer({ onAccept }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <p className="mb-4">
          This chat contains explicit companion messages. By continuing, you agree to view explicit content.
        </p>
        <button
          onClick={onAccept}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Accept
        </button>
      </div>
    </div>
  );
}