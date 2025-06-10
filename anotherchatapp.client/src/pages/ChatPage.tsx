import React, { useState } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! Ask me anything.' },
  ])
  const [input, setInput] = useState('')

  function sendMessage() {
    if (!input.trim()) return
    setMessages((msgs) => [
      ...msgs,
      { role: 'user', content: input },
      { role: 'assistant', content: 'This is a mocked response.' },
    ])
    setInput('')
  }

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex-1 space-y-2 overflow-y-auto">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`max-w-sm rounded px-3 py-2 text-sm whitespace-pre-wrap ${
              m.role === 'user'
                ? 'ml-auto bg-blue-500 text-white'
                : 'mr-auto bg-gray-200 text-gray-900'
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          className="flex-1 rounded border px-3 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message"
        />
        <button
          onClick={sendMessage}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Send
        </button>
      </div>
    </div>
  )
}
