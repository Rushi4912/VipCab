'use client';

import { useState } from 'react';

export default function MapEmbed() {
    const [isLoaded, setIsLoaded] = useState(false);
    const mapQuery = encodeURIComponent('Shop No 2, 7th Floor, Bhama Centre, near Bhujbal Chowk, Wakad, Pune, Maharashtra 411057');
    const simpleEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

    return (
        <div className="w-full relative group">
            {/* Header label */}
            <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">📍</span>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">Find Us Here</span>
            </div>

            {/* Map container with glow effect */}
            <div className="relative rounded-xl overflow-hidden shadow-xl">
                {/* Animated gradient border */}
                <div className="absolute -inset-[1.5px] rounded-xl bg-gradient-to-br from-accent/60 via-accent/20 to-accent/50 z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Inner container */}
                <div className="relative z-10 rounded-xl overflow-hidden bg-[#1a1a2e]">
                    {/* Loading skeleton */}
                    {!isLoaded && (
                        <div className="absolute inset-0 z-20 bg-[#1a1a2e] flex items-center justify-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
                                <span className="text-xs text-white/40">Loading map...</span>
                            </div>
                        </div>
                    )}

                    <iframe
                        title="VIP Cab Office Location – Wakad, Pune"
                        width="100%"
                        height="280"
                        style={{ border: 0, display: 'block' }}
                        src={simpleEmbedUrl}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        onLoad={() => setIsLoaded(true)}
                        className="opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.01] origin-center"
                    />
                </div>
            </div>

            {/* Address text below map */}
            <p className="mt-3 text-xs text-white/50 leading-relaxed flex items-start gap-2">
                <span className="shrink-0 mt-px">🏢</span>
                <span>Shop No 2, 7th Floor, Bhama Centre, near Bhujbal Chowk, Wakad, Pune 411057</span>
            </p>
        </div>
    );
}
