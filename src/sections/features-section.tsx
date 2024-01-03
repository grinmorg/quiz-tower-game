"use client"
import React from 'react'
import { motion } from "framer-motion";
import PlayButton from '@/entities/PlayButton';

export default function FeaturesSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-12 text-slate-600">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
                <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
                    Проект развивется быстро
                    <span className="text-slate-400"> потому что мы прислушиваемся к вашим идеям</span>
                </h2>
                <PlayButton href='#' />
            </div>
            <div className="mb-4 grid grid-cols-12 gap-4">
                <BounceCard className="col-span-12 md:col-span-4">
                    <CardTitle>OpenSource</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <img
                            className='rounded-xl'
                            src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"
                        />
                    </div>
                </BounceCard>
                <BounceCard className="col-span-12 md:col-span-8">
                    <CardTitle>Раздел "Есть идея"</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <img
                            className='rounded-xl'
                            src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"
                        />
                    </div>
                </BounceCard>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <BounceCard className="col-span-12 md:col-span-8">
                    <CardTitle>Discord</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <img
                            className='rounded-xl'
                            src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"
                        />
                    </div>
                </BounceCard>
                <BounceCard className="col-span-12 md:col-span-4">
                    <CardTitle>Telegram</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <img
                            className='rounded-xl'
                            src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"
                        />
                    </div>
                </BounceCard>
            </div>
        </section>
    )
}

const BounceCard = ({ className, children }: { className: string, children: React.ReactNode }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.95, rotate: "-1deg" }}
            className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-200 p-8 ${className}`}
        >
            {children}
        </motion.div>
    );
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
    );
};