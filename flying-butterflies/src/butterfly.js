import React from 'react';
import { motion } from 'framer-motion';

const Butterfly = () => {
    return (
        <motion.div
            className="butterfly"
            animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
        >
            <motion.div
                className="wing wing-left"
                animate={{ rotate: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
            />
            <motion.div
                className="wing wing-right"
                animate={{ rotate: [0, -30, 0] }}
                transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
            />
        </motion.div>
    );
};

export default Butterfly;
