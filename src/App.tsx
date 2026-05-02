import { useState } from 'react';
import { Vote, Bot, Info } from 'lucide-react';
import ElectionTimeline from './components/ElectionTimeline.tsx';
import ChatAssistant from './components/ChatAssistant.tsx';

function App() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'assistant'>('timeline');

  return (
    <div className="app-container">
      <header className="header glass-panel animate-fade-in">
        <div className="logo">
          <Vote size={32} color="var(--primary-color)" />
          <h1>VoteWise <span className="highlight">AI</span></h1>
        </div>
        <p className="subtitle">Your interactive guide to the election process.</p>
      </header>

      <main className="main-content">
        <nav className="tabs glass-panel animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <button 
            className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
            onClick={() => setActiveTab('timeline')}
          >
            <Info size={20} />
            <span>Process & Timeline</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'assistant' ? 'active' : ''}`}
            onClick={() => setActiveTab('assistant')}
          >
            <Bot size={20} />
            <span>AI Assistant</span>
          </button>
        </nav>

        <section className="content-area glass-panel animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {activeTab === 'timeline' ? <ElectionTimeline /> : <ChatAssistant />}
        </section>
      </main>
    </div>
  );
}

export default App;
