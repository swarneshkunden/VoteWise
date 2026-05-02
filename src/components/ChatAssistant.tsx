import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../utils/gemini';
import './ChatAssistant.css';

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
}

export default function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-msg',
      role: 'model',
      content: "Hello! I'm VoteWise, your AI election assistant. I can help you understand the voting process, important deadlines, and how to register. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Format history for Gemini API (excluding the welcome message to maintain alternating roles)
    const history = messages.slice(1).map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }]
    }));

    const responseText = await getGeminiResponse(input, history);
    
    const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'model', content: responseText };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div 
            key={msg.id} 
            className={`message-wrapper ${msg.role} animate-fade-in`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="message-avatar glass-panel">
              {msg.role === 'user' ? <User size={20} /> : <Bot size={20} color="var(--primary-color)" />}
            </div>
            <div className={`message-bubble ${msg.role} glass-panel`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message-wrapper model animate-fade-in">
            <div className="message-avatar glass-panel">
              <Bot size={20} color="var(--primary-color)" />
            </div>
            <div className="message-bubble model glass-panel loading">
              <Loader2 className="spinner" size={20} />
              <span>VoteWise is thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="chat-input-form glass-panel">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about voter registration, early voting, or election day..."
          disabled={isLoading}
          className="chat-input"
          aria-label="Ask a question about voting"
        />
        <button 
          type="submit" 
          disabled={!input.trim() || isLoading} 
          className="send-btn"
          aria-label="Send message"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}
