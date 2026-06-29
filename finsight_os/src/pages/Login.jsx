import { useEffect , useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { login , user } = useAuth();

    useEffect(() => {

        if (user) {

            navigate("/dashboard", { replace: true });

        }

    }, [user, navigate]);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        setLoading(true);

        setError("");

        try {

            const response = await login({

                email,

                password

            });

            if (response.success) {

                navigate("/dashboard" , { replace: true });

            }

            else {

                setError(response.message);

            }

        }

        catch (err) {

            setError("Unable to login.");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

                <h1 className="text-4xl font-bold text-center text-white">

                    FINSIGHT OS

                </h1>

                <p className="text-center text-slate-400 mt-2">

                    Your Personal Financial Operating System

                </p>

                <form
                    onSubmit={handleLogin}
                    className="mt-8 space-y-5"
                >

                    <div>

                        <label className="text-slate-300">

                            Email

                        </label>

                        <input

                            type="email"

                            value={email}

                            onChange={(e)=>setEmail(e.target.value)}

                            className="w-full mt-2 p-3 rounded-xl bg-slate-800 text-white border border-slate-700 outline-none"

                            required

                        />

                    </div>

                    <div>

                        <label className="text-slate-300">

                            Password

                        </label>

                        <input

                            type="password"

                            value={password}

                            onChange={(e)=>setPassword(e.target.value)}

                            className="w-full mt-2 p-3 rounded-xl bg-slate-800 text-white border border-slate-700 outline-none"

                            required

                        />

                    </div>

                    {error && (

                        <div className="text-red-400">

                            {error}

                        </div>

                    )}

                    <button

                        disabled={loading}

                        className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-white font-semibold transition"

                    >

                        {loading ? "Logging In..." : "Login"}

                    </button>

                </form>

                <p className="text-center text-slate-400 mt-6">

                    Don't have an account?

                    <Link

                        to="/register"

                        className="text-blue-400 ml-2"

                    >

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;