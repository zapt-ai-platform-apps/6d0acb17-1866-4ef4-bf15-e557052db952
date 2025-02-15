import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import { ChatWindow, ChatInput, Disclaimer } from './components';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  const handleSend = async (text) => {
    try {
      setIsLoading(true);
      console.log("User message received:", text);
      setMessages((prev) => [...prev, { sender: 'user', text }]);
      
      // Simulate explicit companion reply after a delay
      setTimeout(() => {
        const reply = generateCompanionReply(text);
        console.log("Generated explicit companion reply:", reply);
        setMessages((prev) => [...prev, { sender: 'companion', text: reply }]);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Error in sending message:", error);
      Sentry.captureException(error);
      setIsLoading(false);
    }
  };

  const generateCompanionReply = (userText) => {
    console.log("Generating explicit reply for:", userText);
    const responses = [
      `Listen up, babe: ${userText}`,
      `Oh honey, you really know how to get me going with "${userText}"`,
      `Damn, you're turning me on with that: ${userText}`,
      `Keep it coming, darling, I love the way you say "${userText}"`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  if (!disclaimerAccepted) {
    return <Disclaimer onAccept={() => {
      console.log("User accepted explicit content disclaimer.");
      setDisclaimerAccepted(true);
    }} />;
  }

  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <header className="p-4 bg-gray-800 text-white text-center">
        <h1 className="text-xl font-bold">Explicit Companion Chat</h1>
      </header>
      <main className="flex-grow overflow-hidden">
        <ChatWindow messages={messages} />
      </main>
      <footer className="border-t">
        <ChatInput onSend={handleSend} isLoading={isLoading} />
      </footer>
      <div className="fixed bottom-0 left-0 p-2">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 cursor-pointer"
        >
          Made on ZAPT
        </a>
      </div>
    </div>
  );
}