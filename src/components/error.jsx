import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Error({ e, onDismiss }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-5 right-5 z-50 bg-red-500 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3"
    >
      <span className="font-medium">{e || "An error occurred!"}</span>
      <button
        onClick={onDismiss}
        className="text-white hover:text-gray-300"
      >
        <X size={20} />
      </button>
    </motion.div>
  );
}