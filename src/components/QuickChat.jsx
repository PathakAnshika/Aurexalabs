
"use client";

import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  X,
  ArrowUp,
  Sparkles,
  RotateCcw,
  LoaderCircle,
} from "lucide-react";

const INITIAL_MESSAGE = {
  role: "assistant",
  content:
    "Hey! Welcome to Aurexa Labs. Tell me a little about your business and what you are trying to achieve. Don't worry if you don't know the technical details. We will figure it out together.",
};

export default function QuickChat({
  isOpen: controlledOpen,
  onOpen,
  onClose,
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const isControlled = typeof controlledOpen === "boolean";

  const isOpen = isControlled
    ? controlledOpen
    : internalOpen;

  function openChat() {
    if (onOpen) {
      onOpen();
    } else {
      setInternalOpen(true);
    }
  }

  function closeChat() {
    if (onClose) {
      onClose();
    } else {
      setInternalOpen(false);
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  async function sendMessage(e) {
    e?.preventDefault();

    const text = input.trim();

    if (!text || loading) return;

    const previousMessages = messages;

    const userMessage = {
      role: "user",
      content: text,
    };

    const updatedMessages = [
      ...previousMessages,
      userMessage,
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/aurexa-guide", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          history: previousMessages
            .slice(1)
            .map(({ role, content }) => ({
              role,
              content,
            })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to get a response."
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    }  catch (error) {
  console.error("Aurexa Quick Chat:", error);

  let errorMessage =
    "I'm having trouble connecting right now. Please try again in a moment.";

  if (error.message?.includes("429")) {
    errorMessage =
      "I'm receiving too many requests right now. Please wait a little and try again.";
  } else if (error.message?.includes("401")) {
    errorMessage =
      "The AI connection needs attention. Please contact the Aurexa team.";
  } else if (error.message?.includes("404")) {
    errorMessage =
      "The AI model is currently unavailable. Please try again later.";
  }

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content: errorMessage,
    },
  ]);
} finally {
  setLoading(false);
}
  }

  function resetChat() {
    if (loading) return;

    setMessages([INITIAL_MESSAGE]);
    setInput("");
  }

  return (
    <>
      {/* Floating Quick Chat Button */}

      {!isOpen && (
        <button
          type="button"
          onClick={openChat}
          aria-label="Open Quick Chat"
          className="fixed bottom-6 right-5 sm:right-7 z-[100] group"
        >
          <span className="absolute inset-0 rounded-full bg-[#c7ff00]/20 blur-xl group-hover:bg-[#c7ff00]/40 transition" />

          <span className="relative flex items-center gap-3 rounded-full bg-[#c7ff00] px-5 py-4 text-black shadow-[0_0_35px_rgba(199,255,0,0.15)] transition-transform duration-300 group-hover:scale-105">
            <MessageCircle size={21} />

            <span className="text-sm font-semibold tracking-wide">
              Quick Chat
            </span>
          </span>
        </button>
      )}

      {/* Chat Window */}

      {isOpen && (
        <div
          role="dialog"
          aria-label="Aurexa Quick Chat"
          className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-[100] flex flex-col overflow-hidden rounded-[24px] border border-white/[0.1] bg-[#0b0b0b] text-white shadow-[0_20px_100px_rgba(0,0,0,0.7)] w-[calc(100vw-24px)] sm:w-[400px] h-[min(650px,calc(100dvh-24px))]"
        >
          {/* Header */}

          <div className="relative flex shrink-0 items-center justify-between gap-3 border-b border-white/[0.08] bg-[#101010] px-5 py-4">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c7ff00]/70 to-transparent" />

            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#c7ff00] text-black">
                <Sparkles size={22} />
              </div>

              <div className="min-w-0">
                <h3 className="text-[15px] font-semibold tracking-tight">
                  Aurexa Guide
                </h3>

                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c7ff00]" />

                  <span className="text-[11px] text-white/50">
                    Your digital business consultant
                  </span>
                </div>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                disabled={loading}
                aria-label="Start new conversation"
                title="New conversation"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/50 transition hover:bg-white/[0.06] hover:text-[#c7ff00] disabled:opacity-30"
              >
                <RotateCcw size={16} />
              </button>

              <button
                type="button"
                onClick={closeChat}
                aria-label="Close chat"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/50 transition hover:bg-white/[0.06] hover:text-white"
              >
                <X size={19} />
              </button>
            </div>
          </div>

          {/* Conversation Area */}

          <div className="flex-1 min-h-0 overflow-y-auto px-4 py-5 space-y-5 [scrollbar-width:thin] [scrollbar-color:#333_transparent]">
            <div className="flex justify-center">
              <span className="rounded-full border border-white/[0.08] px-3 py-1 text-[10px] uppercase tracking-widest text-white/30">
                Let's figure it out together
              </span>
            </div>

            {messages.map((msg, index) => {
              const isUser = msg.role === "user";

              return (
                <div
                  key={index}
                  className={`flex gap-2.5 ${
                    isUser
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {!isUser && (
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#c7ff00]/10 text-[#c7ff00]">
                      <Sparkles size={14} />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-[1.8] whitespace-pre-wrap break-words ${
                      isUser
                        ? "rounded-br-md bg-[#c7ff00] text-black"
                        : "rounded-bl-md border border-white/[0.05] bg-[#171717] text-white/85"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}

            {loading && (
              <div className="flex items-start gap-2.5">
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#c7ff00]/10 text-[#c7ff00]">
                  <Sparkles size={14} />
                </div>

                <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-white/[0.05] bg-[#171717] px-4 py-3">
                  <LoaderCircle
                    size={15}
                    className="animate-spin text-[#c7ff00]"
                  />

                  <span className="text-xs text-white/50">
                    Thinking...
                  </span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Message Input */}

          <div className="shrink-0 border-t border-white/[0.08] bg-[#101010] p-4">
            <form onSubmit={sendMessage}>
              <div className="flex items-end gap-2 rounded-2xl border border-white/[0.1] bg-[#171717] p-2 transition focus-within:border-[#c7ff00]/50">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter" &&
                      !e.shiftKey
                    ) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  placeholder="Message Aurexa Guide..."
                  rows={1}
                  maxLength={3000}
                  disabled={loading}
                  className="max-h-28 min-h-[42px] flex-1 resize-none bg-transparent px-3 py-3 text-[13px] text-white outline-none placeholder:text-white/30 disabled:opacity-50"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c7ff00] text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ArrowUp size={20} />
                </button>
              </div>
            </form>

            <div className="mt-3 flex items-center justify-between gap-2 px-1">
              <span className="text-[10px] text-white/25">
                Powered by Aurexa Labs
              </span>

              <span className="text-[10px] text-white/25">
                AI can make mistakes
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}