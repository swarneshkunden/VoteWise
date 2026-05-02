
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ChatAssistant from '../ChatAssistant';

// Mock the Gemini utility to avoid real API calls during tests
vi.mock('../../utils/gemini', () => ({
  getGeminiResponse: vi.fn().mockResolvedValue('This is a mocked response from VoteWise.'),
}));

// Mock the lucide-react icons
vi.mock('lucide-react', () => ({
  Bot: () => <div data-testid="bot-icon" />,
  User: () => <div data-testid="user-icon" />,
  Send: () => <div data-testid="send-icon" />,
  Loader2: () => <div data-testid="loader-icon" />
}));

describe('ChatAssistant', () => {
  it('renders the initial greeting', () => {
    render(<ChatAssistant />);
    expect(screen.getByText(/VoteWise is thinking/i)).toBeNull(); // Shouldn't be loading
    expect(screen.getByText(/Hello! I'm VoteWise/i)).toBeTruthy();
  });

  it('allows user to type and send a message', () => {
    render(<ChatAssistant />);
    const input = screen.getByPlaceholderText(/Ask about voter registration/i) as HTMLInputElement;
    const sendButton = screen.getByRole('button', { name: /Send message/i });

    fireEvent.change(input, { target: { value: 'How do I register to vote?' } });
    expect(input.value).toBe('How do I register to vote?');

    fireEvent.click(sendButton);
    
    // Input should be cleared
    expect(input.value).toBe('');
    
    // User message should appear
    expect(screen.getByText('How do I register to vote?')).toBeTruthy();
  });
});
