import { useEffect, useState } from "react";
import axios from "axios";
import { FaTimes, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProfileDrawer({ open, onClose }) {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const [profile, setProfile] = useState(null);

    useEffect(() => {

    if (!open || !profile?.userId) return;

    axios

        .get(`http://localhost:8080/user/profile/${user.userId}`)

        .then(res => {

            setProfile(res.data);

        })

        .catch(console.error);

}, [open, user]);

    if (!open) return null;

    const handleLogout = () => {

        logout();

        navigate("/");

    };

    return (

        <>

            {/* Dark Overlay */}

            <div

                className="fixed inset-0 bg-black/40 z-40"

                onClick={onClose}

            />

            {/* Drawer */}

            <div className="fixed right-0 top-0 h-screen w-[380px] bg-slate-900 border-l border-slate-700 shadow-2xl z-50 p-8 overflow-y-auto">

                {/* Close */}

                <div className="flex justify-end">

                    <button

                        onClick={onClose}

                        className="text-gray-400 hover:text-white"

                    >

                        <FaTimes size={22}/>

                    </button>

                </div>

                {/* Avatar */}

                <div className="flex flex-col items-center mt-4">

                    <FaUserCircle

                        size={90}

                        className="text-blue-400"

                    />

                    <h2 className="text-2xl font-bold text-white mt-4">

                        {profile?.name || "User"}

                    </h2>

                    <p className="text-gray-400">

                        {profile?.email}

                    </p>

                </div>

                {/* Details */}

                <div className="mt-10 space-y-5">

                    <Info title="Age" value={profile?.age}/>

                    <Info title="Occupation" value={profile?.occupation}/>

                    <Info title="Monthly Income" value={`₹${profile?.monthlyIncome}`}/>

                    <Info title="Savings" value={`₹${profile?.savings}`}/>

                    <Info title="Debt" value={`₹${profile?.debt}`}/>

                </div>

                {/* Logout */}

                <button

                    onClick={handleLogout}

                    className="mt-12 w-full bg-red-600 hover:bg-red-700 rounded-xl py-3 text-white flex justify-center items-center gap-3"

                >

                    <FaSignOutAlt/>

                    Logout

                </button>

            </div>

        </>

    );

}

function Info({ title, value }) {

    return (

        <div className="bg-slate-800 rounded-xl p-4">

            <p className="text-gray-400 text-sm">

                {title}

            </p>

            <h3 className="text-white text-lg font-semibold">

                {value || "-"}

            </h3>

        </div>

    );

}

export default ProfileDrawer;