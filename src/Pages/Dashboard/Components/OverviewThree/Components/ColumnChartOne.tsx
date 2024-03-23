import {useState} from "react";
import ReactApexChart from "react-apexcharts";

const ColumnChartOne = () => {
    const [chartData] = useState<{
        series: {name: string; data: number[]}[];
        options: ApexCharts.ApexOptions;
    }>({
        series: [
            {
                name: "Net Profit",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 77, 80, 92],
            },
            {
                name: "Withdrawn",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 77, 80, 92],
            },
            {
                name: "Balance",
                data: [1, 1, 1, 1, 1, 1, 1, 1, 1],
            },
        ],
        options: {
            chart: {
                // width: 380,
                type: "bar",
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
                },
            },
            dataLabels: {
                enabled: false,
            },
            title: {
                text: "Account Summary",
                align: "left",
                style: {
                    fontWeight: "500",
                    fontSize: "16px",
                },
            },
            subtitle: {
                text: "Income and  Expenses for the period indicated",
                align: "left",
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"],
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            yaxis: {
                title: {
                    text: "$ (thousands)",
                },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands";
                    },
                },
            },
        },
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="bar"
                    height={"auto"}
                ></ReactApexChart>
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ColumnChartOne;
