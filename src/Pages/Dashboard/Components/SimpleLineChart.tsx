import {useRef} from "react";
import {Line} from "react-chartjs-2";
import "chart.js/auto";

export const SimpleLineChart = () => {
    const chartRef = useRef(null);

    const labels = [
        "Phone",
        "Tablets",
        "Laptops",
        "Smartwatches",
        "Consoles",
        "Airpods",
        "Others",
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Cancelled",
                data: labels.map(() => Math.floor(Math.random() * 20)),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Confirmed",
                data: labels.map(() => Math.floor(Math.random() * 20)),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
            {
                label: "Processing",
                data: labels.map(() => Math.floor(Math.random() * 20)),
                backgroundColor: "rgba(53, 30, 235, 0.5)",

            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Order Summary",
            },
        },
    };

    return <Line ref={chartRef} options={options} data={data} />;
};
