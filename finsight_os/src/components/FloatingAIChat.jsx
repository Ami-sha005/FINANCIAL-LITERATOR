import { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { sendMessage } from "../api/chatService";

function FloatingAIChat() {

    const [open, setOpen] = useState(false);

    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text:
                "👋 Hello! I'm your AI Financial Guardian.\n\nAsk me anything about investments, savings, taxes, budgeting, fraud detection or government schemes."
        }
    ]);

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth"

        });

    }, [messages]);

    const handleSend = async () => {

        if (!message.trim()) return;

        const userMessage = {

            sender: "user",

            text: message

        };

        setMessages(prev => [...prev, userMessage]);

        const currentMessage = message;

        setMessage("");

        setLoading(true);

        try {

            const response = await sendMessage(currentMessage);

            setMessages(prev => [

                ...prev,

                {

                    sender: "ai",

                    text: response.response

                }

            ]);

        }

        catch (error) {

            setMessages(prev => [

                ...prev,

                {

                    sender: "ai",

                    text:
                        "⚠ Unable to contact AI server."

                }

            ]);

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <>

            {/* Floating Button */}

            <button

                onClick={() => setOpen(!open)}

                className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl z-50 flex items-center justify-center transition"

            >

                {

                    open

                        ?

                        <FaTimes size={22} />

                        :

                        <FaRobot size={24} />

                }

            </button>

            {

                open &&

                <div className="fixed bottom-28 right-8 w-[380px] h-[620px] bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50">

                    {/* Header */}

                    <div className="bg-blue-600 p-5 text-white">

                        <h2 className="text-xl font-bold">

                            AI Financial Guardian

                        </h2>

                        <p className="text-blue-100 text-sm">

                            Powered by Gemini AI

                        </p>

                    </div>

                    {/* Messages */}

                    <div className="flex-1 overflow-y-auto p-5 space-y-4">

                        {

                            messages.map((msg, index) => (

                                <div

                                    key={index}

                                    className={`flex ${

                                        msg.sender === "user"

                                            ?

                                            "justify-end"

                                            :

                                            "justify-start"

                                    }`}

                                >

                                    <div

                                        className={`max-w-[85%] rounded-2xl p-3 whitespace-pre-wrap ${

                                            msg.sender === "user"

                                                ?

                                                "bg-blue-600 text-white"

                                                :

                                                "bg-slate-800 text-white"

                                        }`}

                                    >

                                        {msg.text}

                                    </div>

                                </div>

                            ))

                        }

                        {

                            loading &&

                            <div className="bg-slate-800 text-white rounded-xl p-3 w-fit">

                                🤖 AI is thinking...

                            </div>

                        }

                        <div ref={bottomRef}></div>

                    </div>

                    {/* Input */}

                    <div className="border-t border-slate-700 p-4">

                        <div className="flex gap-3">

                            <input

                                value={message}

                                onChange={(e) =>

                                    setMessage(e.target.value)

                                }

                                onKeyDown={(e) => {

                                    if (e.key === "Enter") {

                                        handleSend();

                                    }

                                }}

                                placeholder="Ask your AI..."

                                className="flex-1 bg-slate-800 rounded-xl p-3 text-white outline-none"

                            />

                            <button

                                onClick={handleSend}

                                disabled={loading}

                                className="bg-blue-600 hover:bg-blue-700 px-4 rounded-xl text-white"

                            >

                                <FaPaperPlane />

                            </button>

                        </div>

                    </div>

                </div>

            }

        </>

    );

}

export default FloatingAIChat;