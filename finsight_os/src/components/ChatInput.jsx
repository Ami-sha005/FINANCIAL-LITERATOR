import { useState } from "react";

function ChatInput({ onSend, disabled }) {

    const [message, setMessage] = useState("");

    const handleSend = () => {

        if (!message.trim()) return;

        onSend(message);

        setMessage("");
    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter" && !e.shiftKey) {

            e.preventDefault();

            handleSend();
        }
    };

    return (

        <div className="border-t border-slate-800 p-4 bg-slate-950">

            <div className="flex gap-3">

                <textarea

                    rows={2}

                    value={message}

                    disabled={disabled}

                    onChange={(e) => setMessage(e.target.value)}

                    onKeyDown={handleKeyDown}

                    placeholder="Ask your AI Financial Guardian..."

                    className="flex-1 resize-none rounded-xl bg-slate-900 border border-slate-700 text-white p-3 outline-none focus:border-blue-500"

                />

                <button

                    disabled={disabled}

                    onClick={handleSend}

                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 px-6 rounded-xl text-white font-semibold transition"

                >

                    Send

                </button>

            </div>

        </div>

    );

}

export default ChatInput;