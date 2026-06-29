import { FaRobot } from "react-icons/fa";

function AIChatButton({ onClick }) {

    return (

        <button

            onClick={onClick}

            className="
                fixed bottom-8
                right-8
                z-40
                w-16
                h-16
                rounded-full
                bg-blue-600
                hover:bg-blue-700
                shadow-2xl
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-110
            "

        >

            <FaRobot

                size={28}

                className="text-white"

            />

        </button>

    );

}

export default AIChatButton;