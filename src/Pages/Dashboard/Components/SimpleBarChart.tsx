import {useRef} from "react";
import {Bar} from "react-chartjs-2";
import "chart.js/auto";

export const SimpleBarChart = () => {
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
                label: "Processing",
                data: labels.map(() => Math.floor(Math.random() * 20)),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "On Delivery",
                data: labels.map(() => Math.floor(Math.random() * 20)),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
            {
                label: "Delivered",
                data: labels.map(() => Math.floor(Math.random() * 20)),
                backgroundColor: "rgba(88, 162, 235, 0.5)",
            },
            {
                label: "Cancelled",
                data: labels.map(() => Math.floor(Math.random() * 20)),
                backgroundColor: "rgba(26, 21, 235, 0.5)",
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
                text: "Transactions statistics in $",
            },
        },
    };

    return <Bar ref={chartRef} options={options} data={data} />;
};
