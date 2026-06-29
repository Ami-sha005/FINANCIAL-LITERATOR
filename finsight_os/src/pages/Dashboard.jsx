import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import FinancialCard from "../components/FinancialCard";
import GoalProgress from "../components/GoalProgress";
import AIInsights from "../components/AIInsights";
import LiteracyWidget from "../components/LiteracyWidget";
import ExpenseChart from "../components/ExpenseChart";
import AIChat from "../components/AIChat";

function Dashboard() {

    const { user } = useAuth();

    const navigate = useNavigate();

    const [dashboardData, setDashboardData] = useState(null);

    const [aiData, setAiData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [aiLoading, setAiLoading] = useState(true);

    useEffect(() => {

        if (!user) {

            setLoading(false);

            return;

        }

        loadDashboard();

    }, [user]);

    const loadDashboard = async () => {

        try {

            /*
             * FAST API
             */

            const dashboardResponse = await axios.get(

                `http://localhost:8080/dashboard/${user.userId}`

            );

            console.log(dashboardResponse.data);

            setDashboardData(dashboardResponse.data);

            setLoading(false);

            /*
             * AI loads separately
             */

            loadAI();

        }

        catch (error) {
            console.error("Dashboard error", error);

            setDashboardData(null);
            
            setLoading(false);

        }

    };

    const loadAI = async () => {

        try {

            const response = await axios.get(

                `http://localhost:8080/dashboard/${user.userId}/ai`

            );

            setAiData(response.data);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setAiLoading(false);

        }

    };

    /*
     * Loading Screen
     */

    if (loading) {

        return (

            <MainLayout>

                <div className="text-white text-2xl p-10">

                    Loading Dashboard...

                </div>

            </MainLayout>

        );

    }

    /*
     * Guest Landing Page
     */

    if (!user) {

        return (

            <MainLayout>

                <div className="text-center py-24">

                    <h1 className="text-5xl font-bold text-white">

                        Welcome to FINSIGHT OS

                    </h1>

                    <p className="text-gray-400 mt-6 text-xl">

                        Your AI Powered Personal Financial Operating System

                    </p>

                    <p className="text-gray-500 mt-5">

                        Login to unlock Wealth Tracker,

                        Future Map,

                        AI Financial Guardian,

                        Scheme Navigator,

                        Fraud Detection

                        and many more powerful features.

                    </p>

                    <button

                        onClick={() => navigate("/")}

                        className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold"

                    >

                        Login To Continue

                    </button>

                </div>

            </MainLayout>

        );

    }

    if (!dashboardData) {

    return (

        <MainLayout>

            <div className="flex justify-center items-center h-[70vh]">

                <div className="text-white text-2xl">

                    Unable to load dashboard.

                </div>

            </div>

        </MainLayout>

    );

}
    /*
     * Dashboard
     */

    return (

        <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ duration: 0.6 }}

        >

            <MainLayout>

                {/* Hero */}

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white mb-8">

                    <h1 className="text-4xl font-bold">

                        Welcome to FINSIGHT OS

                    </h1>

                    <p className="mt-2 text-blue-100">

                        Your Personal Financial Operating System

                    </p>

                </div>

                {/* Header */}

                <div className="mb-6">

                    <h2 className="text-3xl text-white font-bold">

                        Financial Command Center

                    </h2>

                    <p className="text-gray-400 mt-2">

                        Monitor • Protect • Grow

                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">

                    <FinancialCard

                        title="Financial Score"

                        value={dashboardData.financialScore}

                    />

                    <FinancialCard

                        title="Savings"

                        value={`₹${dashboardData.savings}`}

                    />

                    <FinancialCard

                        title="Cash Flow"

                        value={`₹${dashboardData.monthlyCashFlow}`}

                    />

                    <FinancialCard

                        title="Debt Risk"

                        value={dashboardData.debtRisk}

                    />

                    <FinancialCard

                        title="Benefits"

                        value={dashboardData.benefitsAvailable}

                    />

                </div>

                {/* Expense Analytics + AI Insights */}

<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

    {/* Expense */}

    <ExpenseChart

        expenses={dashboardData.expenses}

    />

    {/* AI */}

    {

        aiLoading ?

        (

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

                <h2 className="text-2xl font-bold">

                    AI Financial Insights

                </h2>

                <p className="text-gray-400 mt-4">

                    AI is analysing your financial profile...

                </p>

            </div>

        )

        :

        (

            <AIInsights

                insights={

                    aiData?.insights ??

                    []

                }

            />

        )

    }

</div>

{/* Goal Progress */}

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">

    <h2 className="text-xl text-white font-bold mb-5">

        Goal Progress

    </h2>

    {

        dashboardData.goals?.map((goal,index)=>(

            <GoalProgress

                key={index}

                goal={goal}

            />

        ))

    }

</div>

{/* Financial Literacy */}

<div className="mt-8">

    <LiteracyWidget />

</div>

            </MainLayout>

        </motion.div>

    );

}

export default Dashboard;