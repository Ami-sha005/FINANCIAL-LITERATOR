import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {

    const navigate = useNavigate();

    const { register } = useAuth();

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        password: "",

        age: "",

        occupation: "",

        monthlyIncome: "",

        monthlyExpenses: "",

        savings: "",

        debt: ""

    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        setError("");

        try {

            const response = await register({

                ...formData,

                age: Number(formData.age),

                monthlyIncome: Number(formData.monthlyIncome),

                monthlyExpenses: Number(formData.monthlyExpenses),

                savings: Number(formData.savings),

                debt: Number(formData.debt)

            });

            if (response.success) {

                navigate("/");

            }

            else {

                setError(response.message);

            }

        }

        catch {

            setError("Registration failed.");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10">

            <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

                <h1 className="text-4xl font-bold text-center text-white">

                    Create Account

                </h1>

                <p className="text-center text-slate-400 mt-2">

                    Join FINSIGHT OS

                </p>

                <form
                    onSubmit={handleSubmit}
                    className="grid md:grid-cols-2 gap-5 mt-8"
                >

                    <input
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700"
                        required
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700"
                        required
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700"
                        required
                    />

                    <input
                        name="age"
                        type="number"
                        placeholder="Age"
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700"
                        required
                    />

                    <input
                        name="occupation"
                        placeholder="Occupation"
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700"
                        required
                    />

                    <input
                        name="monthlyIncome"
                        type="number"
                        placeholder="Monthly Income"
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700"
                        required
                    />

                    <input
                        name="monthlyExpenses"
                        type="number"
                        placeholder="Monthly Expenses"
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700"
                        required
                    />

                    <input
                        name="savings"
                        type="number"
                        placeholder="Savings"
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700"
                        required
                    />

                    <input
                        name="debt"
                        type="number"
                        placeholder="Debt"
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700 md:col-span-2"
                        required
                    />

                    {error && (

                        <div className="text-red-400 md:col-span-2">

                            {error}

                        </div>

                    )}

                    <button

                        className="bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-white font-semibold md:col-span-2"

                    >

                        {loading ? "Creating Account..." : "Register"}

                    </button>

                </form>

                <p className="text-center text-slate-400 mt-6">

                    Already have an account?

                    <Link

                        to="/"

                        className="text-blue-400 ml-2"

                    >

                        Login

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Register;