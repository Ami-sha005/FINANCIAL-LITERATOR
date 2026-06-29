import { motion, AnimatePresence } from "framer-motion";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

function AIAssistantPanel({

    isOpen,

    onClose,

    messages,

    loading,

    onSend

}) {

    return (

        <AnimatePresence>

            {isOpen && (

                <>

                    {/* Background Overlay */}

                    <motion.div

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 0.45 }}

                        exit={{ opacity: 0 }}

                        onClick={onClose}

                        className="fixed inset-0 bg-black z-40"

                    />

                    {/* Side Panel */}

                    <motion.div

                        initial={{ x: "100%" }}

                        animate={{ x: 0 }}

                        exit={{ x: "100%" }}

                        transition={{

                            duration: 0.35

                        }}

                        className="fixed right-0 top-0 h-screen w-[430px] bg-slate-950 border-l border-slate-800 z-50 flex flex-col"

                    >

                        {/* Header */}

                        <div className="flex justify-between items-center p-5 border-b border-slate-800">

                            <div>

                                <h2 className="text-white text-xl font-bold">

                                    AI Financial Guardian

                                </h2>

                                <p className="text-gray-400 text-sm">

                                    Powered by Gemini AI

                                </p>

                            </div>

                            <button

                                onClick={onClose}

                                className="text-gray-400 hover:text-white text-2xl"

                            >

                            </button>

                        </div>

                        {/* Messages */}

                        <div className="flex-1 overflow-y-auto">

                            <ChatMessages

                                messages={messages}

                                loading={loading}

                            />

                        </div>

                        {/* Input */}

                        <ChatInput

                            onSend={onSend}

                            disabled={loading}

                        />

                    </motion.div>

                </>

            )}

        </AnimatePresence>

    );

}

export default AIAssistantPanel;
