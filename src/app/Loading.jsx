"use client"

import { motion } from "framer-motion"

function Loading() {
    const dotVariants = {
        pulse: {
            scale: [1, 1.5, 1],
            transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    }

    return (
    <div className="flex justify-center items-center h-screen"> 
        <motion.div
            animate="pulse"
            transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            className="container-loading"
        >
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <StyleSheet />
        </motion.div>
    </div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style >
            {`
            .container-loading {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
            }

            .dot {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #f59e0b;
                will-change: transform;
            }
            `}
        </style>
    )
}

export default Loading
