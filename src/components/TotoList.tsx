'use client';

import React, { useState } from 'react';
import { MaskedSvgIcon } from './MaskedSvgIcon';

export interface TotoListItem {
    id: string;
    icon: {
        src: string;
        alt: string;
        color?: string;
    };
    title: string;
    subtitle?: string;
    onClick: () => void;
}

export interface TotoListProps {
    items?: TotoListItem[];
    loading?: boolean;
}

const LOADING_ROW_WIDTHS: Array<{ title: string; subtitle: string }> = [
    { title: 'w-10/12', subtitle: 'w-7/12' },
    { title: 'w-8/12',  subtitle: 'w-9/12' },
    { title: 'w-7/12',  subtitle: 'w-6/12' },
];

const ANIMATED_CIRCLE_R = 15;
const CIRCLE_DASH = Math.PI * 2 * ANIMATED_CIRCLE_R;

const SHIMMER_STYLE = `
@keyframes toto-shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
.toto-shimmer {
    background: linear-gradient(90deg, #26767f 0%, #1f6c75 50%, #18646e 100%);
    background-size: 200% 100%;
    animation: toto-shimmer 1.5s ease-in-out infinite;
}
@keyframes toto-fill-circle {
    0%   { stroke-dashoffset:  ${CIRCLE_DASH}; }
    50%  { stroke-dashoffset:  0; }
    100% { stroke-dashoffset: -${CIRCLE_DASH}; }
}
`;

function LoadingCircle() {
    return (
        <div className="relative flex items-center justify-center rounded-full border border-cyan-800 p-2 w-9 h-9 flex-shrink-0">
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 36 36"
                fill="none"
            >
                <circle
                    cx="18"
                    cy="18"
                    r={ANIMATED_CIRCLE_R}
                    stroke="#0891b2"
                    strokeWidth="1.5"
                    strokeDasharray={CIRCLE_DASH}
                    strokeDashoffset={0}
                    strokeLinecap="round"
                    style={{ animation: 'toto-fill-circle 2s linear infinite' }}
                />
            </svg>
        </div>
    );
}

function LoadingRow({ widths }: { widths: { title: string; subtitle: string } }) {
    return (
        <div className="flex items-center gap-3 py-1">
            <LoadingCircle />
            <div className="flex flex-col flex-1 min-w-0 gap-1.5">
                <div className={`h-4 rounded-md toto-shimmer ${widths.title}`} />
                <div className={`h-3 rounded-md toto-shimmer ${widths.subtitle}`} />
            </div>
        </div>
    );
}

function ItemRow({ item }: { item: TotoListItem }) {
    const [pressed, setPressed] = useState(false);

    return (
        <div
            className="flex items-center gap-3 text-left hover:bg-accent transition-colors duration-100"
            style={{ transform: pressed ? 'scale(0.98)' : 'scale(1)', transition: 'transform 100ms' }}
            onClick={item.onClick}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => setPressed(false)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && item.onClick()}
        >
            <div className="rounded-full border border-cyan-800 p-2 flex items-center justify-center flex-shrink-0">
                <MaskedSvgIcon
                    src={item.icon.src}
                    alt={item.icon.alt}
                    size="w-5 h-5"
                    color={item.icon.color ?? 'bg-cyan-800'}
                />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
                <span className="text-sm font-medium truncate">{item.title}</span>
                {item.subtitle && (
                    <span className="text-xs text-muted-foreground">{item.subtitle}</span>
                )}
            </div>
        </div>
    );
}

export function TotoList({ items = [], loading = false }: TotoListProps) {
    return (
        <>
            <style>{SHIMMER_STYLE}</style>
            <div className="flex flex-col gap-2">
                {loading
                    ? LOADING_ROW_WIDTHS.map((widths, i) => (
                          <LoadingRow key={i} widths={widths} />
                      ))
                    : items.map((item) => (
                          <ItemRow key={item.id} item={item} />
                      ))}
            </div>
        </>
    );
}
