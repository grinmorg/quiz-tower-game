"use client"
import React from 'react'
import { motion } from "framer-motion"

export default function IntroTitle() {

    const titleRef = React.useRef(null);
    return (
        <motion.h1
            // animate={{ x: 100 }}
            className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-200 md:text-6xl md:tracking-tight" ref={titleRef}>
            <span>Сыграй в </span>{" "}
            <span className="leading-12 block w-full bg-gradient-to-r from-violet-500 to-green-400 bg-clip-text py-2 text-transparent lg:inline">
                QUIZ TOWER
            </span>{" "}
            <span></span>
        </motion.h1>
    )
}
