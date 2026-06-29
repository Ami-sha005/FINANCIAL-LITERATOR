import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {

    const { user, loading } = useAuth();

    if (loading) {

        return (

            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">

                Loading...

            </div>

        );

    }

    if (!user) {

        return <Navigate to="/" replace />;

    }

    return children;

}

export default ProtectedRoute;