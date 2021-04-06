import React from "react";

export default function ProgressRing({usedHours, allowedHours, className, circleSize}) {
    
    const size = circleSize
    const backCircleWidth = circleSize > 90 ? 4 : 2;
    const frontCircleWidth = circleSize > 90 ? 8 : 5;
    const radius = (size / 2) - (frontCircleWidth * 2);
    const circum = 2 * Math.PI * radius;
    const progressPercent = (usedHours / allowedHours * 100);
    const progressStroke = (circum * ((100 - progressPercent) / 100));
    
    return (
        <>
            <svg
                className={className}
                height={size}
                width={size}
            >
                <circle
                    className="background-circle"
                    strokeWidth={backCircleWidth}
                    fill="transparent"
                    r={radius}
                    cx={size/2}
                    cy={size/2}
                    // stroke="lightgrey"
                    transform={`rotate(-90) translate(-${size} 0)`}
                />
                <circle
                    className="progress-circle"
                    strokeWidth={frontCircleWidth}
                    fill="transparent"
                    r={radius}
                    cx={size/2}
                    cy={size/2}
                    // stroke={midGreen}
                    strokeDasharray={circum}
                    strokeDashoffset={progressStroke}
                    transform={`rotate(-90) translate(-${size} 0)`}
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