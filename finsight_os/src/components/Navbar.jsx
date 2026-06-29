import { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

import { useAuth } from "../context/AuthContext";
import ProfileDrawer from "./ProfileDrawer";

function Navbar() {

    const { user } = useAuth();

    const [profileOpen, setProfileOpen] = useState(false);

    return (

        <>

            <div className="h-20 bg-slate-950 border-b border-slate-800 flex justify-between items-center px-8">

                <div>

                    <h2 className="text-white text-xl font-bold">

                        Financial Command Center

                    </h2>

                    <p className="text-gray-400 text-sm">

                        Monitor • Protect • Grow

                    </p>

                </div>

                <div className="flex items-center gap-6">

                    <div className="bg-green-500/20 border border-green-500/30 rounded-xl px-4 py-2 text-green-400">

                        Financial Status : Healthy

                    </div>

                    <FaBell

                        size={20}

                        className="text-gray-300 cursor-pointer"

                    />

                    {/* Profile */}

                    <button

                        onClick={() => setProfileOpen(true)}

                        className="flex items-center gap-3 hover:bg-slate-800 px-3 py-2 rounded-xl transition"

                    >

                        <FaUserCircle

                            size={34}

                            className="text-blue-400"

                        />

                        <div className="text-left">

                            <p className="text-white text-sm font-semibold">

                                {user?.name}

                            </p>

                            <p className="text-gray-400 text-xs">

                                View Profile

                            </p>

                        </div>

                    </button>

                </div>

            </div>

            <ProfileDrawer

                open={profileOpen}

                onClose={() => setProfileOpen(false)}

            />

        </>

    );

}

export default Navbar;