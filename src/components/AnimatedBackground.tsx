import { motion } from 'framer-motion'
import { Settings, ArrowUpRight, ArrowDownLeft, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Container, Box, Package } from 'lucide-react'

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Cogwheels */}
      <motion.div
        className="absolute top-20 right-20 text-gray-200 dark:text-gray-700 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Settings size={80} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-16 text-gray-200 dark:text-gray-700 opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <Settings size={60} />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/4 text-gray-200 dark:text-gray-700 opacity-25"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Settings size={40} />
      </motion.div>

      {/* Floating Arrows */}
      <motion.div
        className="absolute top-1/4 right-1/3 text-blue-300 dark:text-blue-600 opacity-40"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowUpRight size={24} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3 text-purple-300 dark:text-purple-600 opacity-40"
        animate={{ 
          y: [0, 20, 0],
          x: [0, -10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDownLeft size={24} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-20 text-green-300 dark:text-green-600 opacity-35"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowUp size={20} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-16 text-orange-300 dark:text-orange-600 opacity-35"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/4 text-pink-300 dark:text-pink-600 opacity-30"
        animate={{ 
          x: [0, 15, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowRight size={18} />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-12 text-cyan-300 dark:text-cyan-600 opacity-35"
        animate={{ 
          x: [0, -15, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowLeft size={18} />
      </motion.div>

      {/* Floating Docker Containers */}
      <motion.div
        className="absolute top-1/3 right-1/5 text-blue-400 dark:text-blue-500 opacity-40"
        animate={{ 
          y: [0, -25, 0],
          x: [0, 15, 0],
          rotateY: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Container size={32} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/2 left-1/6 text-indigo-400 dark:text-indigo-500 opacity-35"
        animate={{ 
          y: [0, 20, 0],
          x: [0, -12, 0],
          rotateX: [0, 15, 0]
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Box size={28} />
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-1/2 text-teal-400 dark:text-teal-500 opacity-30"
        animate={{ 
          y: [0, -18, 0],
          x: [0, 8, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Package size={26} />
      </motion.div>

      <motion.div
        className="absolute top-1/5 left-2/3 text-emerald-400 dark:text-emerald-500 opacity-35"
        animate={{ 
          y: [0, 22, 0],
          x: [0, -10, 0],
          rotateZ: [0, -8, 0]
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Container size={24} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-2/3 text-violet-400 dark:text-violet-500 opacity-25"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 18, 0],
          rotateY: [0, -180, -360]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Box size={30} />
      </motion.div>

      {/* Container clusters - simulating orchestration */}
      <motion.div
        className="absolute top-1/4 left-1/5 flex gap-2 text-blue-300 dark:text-blue-600 opacity-20"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Container size={16} />
        <Container size={16} />
        <Container size={16} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-3/4 flex flex-col gap-1 text-purple-300 dark:text-purple-600 opacity-20"
        animate={{ 
          x: [0, -8, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Box size={14} />
        <Box size={14} />
      </motion.div>

      {/* Subtle gradient orbs */}
      <motion.div
        className="absolute top-16 left-1/2 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* DevOps themed gradient orb */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-lg"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}