'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { fleet } from '@/data/fleet';

export default function HeroCarCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % fleet.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-full">
            {fleet.map((car, index) => {
                const isActive = index === currentIndex;
                return (
                    <div
                        key={car.id}
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-[1200ms] ease-in-out ${isActive
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-[0.92]'
                            }`}
                    >
                        <Image
                            src={car.image}
                            alt={`${car.name} — premium cab`}
                            fill
                            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
                            priority={index === 0}
                            sizes="(max-width: 768px) 90vw, 50vw"
                        />
                    </div>
                );
            })}

            {/* Car name label */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full px-5 py-1.5 shadow-md border border-gray-100">
                <span className="text-sm font-bold text-gray-800">
                    {fleet[currentIndex].name}
                </span>
                <span className="text-[10px] text-gray-400 ml-2 uppercase tracking-wider">
                    {fleet[currentIndex].category}
                </span>
            </div>

            {/* Dot indicators */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {fleet.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-500 pointer-events-auto ${i === currentIndex
                                ? 'bg-cyan-600 w-5'
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`View ${fleet[i].name}`}
                    />
                ))}
            </div>
        </div>
    );
}
