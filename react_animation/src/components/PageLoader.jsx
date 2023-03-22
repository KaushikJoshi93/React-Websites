import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useEffect } from 'react'

const word = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0
    }
}

const PageLoader = () => {
    const [show, setShow] = useState(false);
    const textName = "KAUSHIK";


    useEffect(() => {
        setTimeout(() => setShow(true), 2000)
    }, [])
    return (
        <motion.div
            className='w-screen h-screen flex flex-col gap-5 bg-white'
            transition={{ease:"easeInOut"}}
        >

            {
                !show ?
                    <motion.h3
                        variants={word}
                        className='flex justify-center w-full h-full items-center bg-green-800 font-bold text-4xl'
                        initial="hidden"
                        animate="visible"
                    >
                        {
                            textName.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "_" + index} variants={letter}>
                                        {char}
                                    </motion.span>
                                )
                            })
                        }
                    </motion.h3>
                    :
                    <>
                        <div className='flex-1'>
                            <motion.div
                                className='w-[100%] bg-green-800 '
                                animate={{ height: ["100%", "0%"] }}
                                transition={{  ease: "easeInOut", velocity: 130,stiffness:400,type:"inertia" }}
                            />
                        </div>
                        <div className='flex-1'>
                            <motion.div
                                className='w-[100%] bg-green-800 '
                                animate={{ height: ["100%", "0%"] }}
                                transition={{  ease: "easeInOut", velocity: 130,stiffness:400,type:"inertia" }}
                            />
                        </div>
                        <div className='flex-1'>
                            <motion.div
                                className='w-[100%] bg-green-800 '
                                animate={{ height: ["100%", "0%"] }}
                                transition={{  ease: "easeInOut", velocity: 130,stiffness:400,type:"inertia" }}
                            />
                        </div>
                        <div className='flex-1'>
                            <motion.div
                                className='w-[100%] bg-green-800 '
                                animate={{ height: ["100%", "0%"] }}
                                transition={{  ease: "easeInOut", velocity: 130,stiffness:400,type:"inertia" }}
                            />
                        </div>
                    </>

            }

        </motion.div>
    )
}

export default PageLoader