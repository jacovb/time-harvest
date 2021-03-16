import React from "react";

export default function ProgressRing({project}) {
    
    const size = 90
    const backCircleWidth = 2;
    const frontCircleWidth = 5;
    const radius = (size / 2) - (frontCircleWidth * 2);
    const circum = 2 * Math.PI * radius;
    const progressPercent = (project.usedHours / project.allowedHours * 100)
    const darkBlue = "#006ba6";
    const mustard = "#ffbc42";
    const midGreen = "#84dcc6";
    
    return (
        <>
            <svg
                // className="gridProgress-ring"
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
                    stroke="lightgrey"
                    transform="rotate(-90) translate(-90 0)"
                />
                <circle
                    className="progress-circle"
                    strokeWidth={frontCircleWidth}
                    fill="transparent"
                    r={radius}
                    cx={size/2}
                    cy={size/2}
                    stroke={midGreen}
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