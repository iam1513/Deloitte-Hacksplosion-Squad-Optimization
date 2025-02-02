import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PlayerScoreDial = ({ player }) => {
    const data = {
        labels: ["Score"],
        datasets: [
            {
                data: [player?.potential || 0, 100 - (player?.potential || 0)],
                backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(200, 200, 200, 0.3)"],
                borderWidth: 1,
                circumference: 180, // Half-doughnut
                rotation: 270, // Starts at bottom
                cutout: "80%",
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: "70%",
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
    };

    return (
        <div style={{ position: "relative", width: "200px", height: "200px" }}>
            <Doughnut data={data} options={options} />
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                }}
            >
                <div style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
                    {player?.potential}%
                </div>
            </div>
        </div>
    );
};

export default PlayerScoreDial;
