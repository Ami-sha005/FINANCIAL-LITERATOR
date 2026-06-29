import { motion } from "framer-motion";

function FinancialCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ y: -8 ,
                  scale: 1.03
      }}
      whileTap={{ scale: 0.98 }}
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-5
      shadow-lg
      text-white
      "
    >
      <h3 className="text-gray-400 text-sm">
        {title}
      </h3>

      <h2 className="text-2xl font-bold mt-2">
        {value}
      </h2>
    </motion.div>
  );
}

export default FinancialCard;