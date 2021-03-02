import React from "react";

export default function ProgressRing({project}) {
    
    const radius = 36;
    const circum = 2 * Math.PI * radius;
    const progressPercent = (project.usedHours / project.allowedHours * 100)
    
    return (
        <>
            <svg
                // className="gridProgress-ring"
                height="90"
                width="90"
            >
                <circle
                    className="background-circle"
                    strokeWidth="2"
                    fill="transparent"
                    r={radius}
                    cx="45"
                    cy="45"
                    stroke="lightgrey"
                    transform="rotate(-90) translate(-90 0)"
                />
                <circle
                    className="progress-circle"
                    strokeWidth="5"
                    fill="transparent"
                    r={radius}
                    cx="45"
                    cy="45"
                    stroke="blue"
                    strokeDasharray={circum}
                    strokeDashoffset={circum * ((100 - progressPercent) / 100)}
                    transform="rotate(-90) translate(-90 0)"
                />
                <text
                    className="svg-circle-text"
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                >
                    {Math.round(progressPercent)}%
                </text>
            </svg>
        </>
    )
}