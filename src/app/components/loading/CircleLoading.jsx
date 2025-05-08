"use client";

import { motion } from "framer-motion";

function CircleLoading() {
  return (
    <div className="container-loading flex justify-center items-center ">
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>
      {`
            .container-loading {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 40px;
                border-radius: 8px;
            }

            .spinner {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 4px solid #f59e0b;
                border-top-color: #ff0088;
                will-change: transform;
            }
            `}
    </style>
  );
}

export default CircleLoading;
