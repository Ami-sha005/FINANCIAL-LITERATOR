import { useEffect, useRef } from "react";

function ChatMessages({ messages, loading }) {

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth"

        });

    }, [messages, loading]);

    return (

        <div className="p-5 space-y-5">

            {

                messages.length === 0 && (

                    <div className="text-center text-gray-400 mt-16">

                        <div className="text-6xl mb-5">

                            🤖

                        </div>

                        <h2 className="text-white text-2xl font-bold">

                            AI Financial Guardian

                        </h2>

                        <p className="mt-4">

                            Ask me anything about

                            your finances,

                            investments,

                            savings,

                            budgeting,

                            government schemes,

                            loans,

                            insurance,

                            or financial planning.

                        </p>

                    </div>

                )

            }

            {

                messages.map((message, index) => (

                    <div

                        key={index}

                        className={`flex ${

                            message.sender === "user"

                                ? "justify-end"

                                : "justify-start"

                        }`}

                    >

                        <div

                            className={`max-w-[80%] rounded-2xl px-5 py-4 whitespace-pre-wrap shadow-lg ${

                                message.sender === "user"

                                    ? "bg-blue-600 text-white"

                                    : "bg-slate-800 text-gray-100"

                            }`}

                        >

                            {message.text}

                        </div>

                    </div>

                ))

            }

            {

                loading && (

                    <div className="flex justify-start">

                        <div className="bg-slate-800 rounded-2xl px-5 py-4 text-gray-300">

                            AI is thinking...

                        </div>

                    </div>

                )

            }

            <div ref={bottomRef} />

        </div>

    );

}

export default ChatMessages;