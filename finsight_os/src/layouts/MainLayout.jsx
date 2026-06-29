import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import AIChatButton from "../components/AIChatButton";
import AIAssistantPanel from "../components/AIAssistantPanel";

function MainLayout({ children }) {

    const [openAI, setOpenAI] = useState(false);

    return (

        <div className="flex bg-slate-950 min-h-screen">

            <Sidebar />

            <div className="flex-1">

                <Navbar />

                <div className="p-6">

                    {children}

                </div>

            </div>

            <AIChatButton

                onClick={() => setOpenAI(true)}

            />

            <AIAssistantPanel

                open={openAI}

                onClose={() => setOpenAI(false)}

            />

        </div>

    );

}

export default MainLayout;