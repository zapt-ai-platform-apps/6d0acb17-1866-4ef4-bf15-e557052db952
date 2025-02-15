import React, { useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';

const ChatWindow = ({ messages }) => {
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex flex-col space-y-2 p-4 overflow-y-auto h-full">
      {messages.map((msg, index) => (
        <ChatBubble key={index} message={msg} />
      ))}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default ChatWindow;