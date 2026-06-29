import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function AIChat() {

  const { user } = useAuth();

  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);

  const askAI = async () => {

    if (!question.trim()) return;

    if (!user) {

      setAnswer("Please login first.");

      return;

    }

    try {

      setLoading(true);

      const response = await axios.post(

        "http://localhost:8080/advisor/chat",

        {

          userId: user.userId,

          message: question

        }

      );

      setAnswer(response.data.response);

    }

    catch (error) {

      console.error(error);

      setAnswer("Unable to contact AI Advisor.");

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-white">

      <h2 className="text-xl font-bold mb-4">

        AI Financial Advisor

      </h2>

      <div className="space-y-3">

        <div className="bg-slate-800 p-3 rounded-lg">

          💡 Ask anything about savings, investments or budgeting.

        </div>

      </div>

      <textarea

        rows={3}

        value={question}

        onChange={(e) => setQuestion(e.target.value)}

        onKeyDown={(e) => {

          if (e.key === "Enter" && !e.shiftKey) {

            e.preventDefault();

            askAI();

          }

        }}

        placeholder="Ask your AI advisor..."

        className="w-full mt-6 bg-slate-900 border border-slate-700 rounded-xl p-3 outline-none"

      />

      <button

        onClick={askAI}

        disabled={loading}

        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 rounded-xl p-3 font-semibold"

      >

        {

          loading

            ? "Thinking..."

            : "Ask AI"

        }

      </button>

      {

        answer && (

          <div className="mt-6 bg-slate-900 rounded-xl p-4 whitespace-pre-line">

            {answer}

          </div>

        )

      }

    </div>

  );

}

export default AIChat;