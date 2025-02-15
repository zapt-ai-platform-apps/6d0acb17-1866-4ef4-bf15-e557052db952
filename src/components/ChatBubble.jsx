import React from 'react';

const ChatBubble = ({ message }) => {
  const isUser = message.sender === 'user';
  return (
    <div
      className={`my-2 max-w-3/4 p-3 rounded-lg ${
        isUser
          ? 'bg-blue-500 text-white self-end'
          : 'bg-gray-300 text-black self-start'
      }`}
    >
      <p>{message.text}</p>
    </div>
  );
};

export default ChatBubble;