import React from 'react';
import Image from 'next/image';

export const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="relative h-10 w-10 flex items-center justify-center overflow-hidden rounded-full border border-slate-200 dark:border-sky-500/20 bg-white dark:bg-slate-900/50 shadow-sm transition-standard hover:border-sky-500/30">
                <Image
                    src="/logo.jpeg"
                    alt="Orbit One Logo"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="leading-tight">
                <p className="text-sm font-bold tracking-[0.2em] text-foreground">
                    ORBITONE
                </p>
                <p className="text-[10px] font-medium tracking-tight text-accent uppercase">
                    Platforms (PVT) LTD
                </p>
            </div>
        </div>
    );
};
