import React, { useState } from 'react';

export function ChatWindow({ messages }) {
  return (
    <div>
      {messages.map((msg, index) => (
        <p key={index}>
          <strong>{msg.sender}:</strong> {msg.text}
        </p>
      ))}
    </div>
  );
}

export function ChatInput({ onSend, isLoading }) {
  const [text, setText] = useState('');
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isLoading}
      />
      <button
        onClick={() => {
          onSend(text);
          setText('');
        }}
        disabled={isLoading || text.trim() === ''}
      >
        Send
      </button>
    </div>
  );
}

export function Disclaimer({ onAccept }) {
  return (
    <div>
      <p>Disclaimer: This conversation may include explicit content.</p>
      <button onClick={onAccept}>Accept</button>
    </div>
  );
}