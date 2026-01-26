import React from 'react';

export default function SkillRadar({ data, labels, size = 300 }) {
    const center = size / 2;
    const radius = (size / 2) - 40; // Padding for labels
    const angleStep = (Math.PI * 2) / labels.length;

    const getCoordinates = (value, index) => {
        const angle = (index * angleStep) - (Math.PI / 2); // Start at top
        const x = center + (value / 100) * radius * Math.cos(angle);
        const y = center + (value / 100) * radius * Math.sin(angle);
        return { x, y };
    };

    // Generate web points (concentric polygons)
    const webLevels = [25, 50, 75, 100];
    const webs = webLevels.map(level => {
        const points = labels.map((_, i) => {
            const { x, y } = getCoordinates(level, i);
            return `${x},${y}`;
        }).join(' ');
        return { level, points };
    });

    // Generate axis lines
    const axes = labels.map((label, i) => {
        const { x, y } = getCoordinates(100, i);

        // Label position with extra padding
        const labelAngle = (i * angleStep) - (Math.PI / 2);
        const labelRadius = radius + 20;
        const lx = center + labelRadius * Math.cos(labelAngle);
        const ly = center + labelRadius * Math.sin(labelAngle);

        // Adjust alignment based on position
        let textAnchor = 'middle';
        if (lx < center - 10) textAnchor = 'end';
        if (lx > center + 10) textAnchor = 'start';

        return { x, y, lx, ly, label, textAnchor };
    });

    // Generate data polygon
    const dataPoints = data.map((val, i) => getCoordinates(val, i));
    const dataPolygon = dataPoints.map(p => `${p.x},${p.y}`).join(' ');

    return (
        <div className="relative flex justify-center items-center">
            <svg width={size} height={size} className="overflow-visible">
                {/* Webs */}
                {webs.map((web, i) => (
                    <polygon
                        key={i}
                        points={web.points}
                        fill="none"
                        stroke="#1e293b" // slate-800
                        strokeWidth="1"
                        className={i === 3 ? "stroke-slate-600" : ""}
                    />
                ))}

                {/* Axes */}
                {axes.map((axis, i) => (
                    <g key={i}>
                        <line
                            x1={center}
                            y1={center}
                            x2={axis.x}
                            y2={axis.y}
                            stroke="#1e293b"
                            strokeWidth="1"
                        />
                        {/* Labels */}
                        <text
                            x={axis.lx}
                            y={axis.ly}
                            fill="#94a3b8"
                            fontSize="9"
                            fontFamily="monospace"
                            textAnchor={axis.textAnchor}
                            alignmentBaseline="middle"
                            className="uppercase tracking-widest font-bold"
                        >
                            {/* Split label if too long? For now just render */}
                            {axis.label.split(' ').map((line, idx) => (
                                <tspan x={axis.lx} dy={idx === 0 ? 0 : '1.1em'} key={idx}>
                                    {line}
                                </tspan>
                            ))}
                        </text>
                    </g>
                ))}

                {/* Data Polygon */}
                <polygon
                    points={dataPolygon}
                    fill="rgba(45, 212, 191, 0.2)" // teal-400 with opacity
                    stroke="#2dd4bf" // teal-400
                    strokeWidth="2"
                    className="drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]"
                />

                {/* Data Points */}
                {dataPoints.map((p, i) => (
                    <circle
                        key={i}
                        cx={p.x}
                        cy={p.y}
                        r="3"
                        fill="#fff"
                        stroke="#2dd4bf"
                        strokeWidth="1"
                    />
                ))}
            </svg>
        </div>
    );
}
