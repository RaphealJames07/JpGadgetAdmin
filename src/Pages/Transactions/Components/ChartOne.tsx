import {useState} from "react";
import ReactApexChart from "react-apexcharts";

const ChartOne = () => {
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
                name: "Expenses",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 77, 80, 92],
            },
            {
                name: "Balance",
                data: [80, 62, 75, 92, 70, 68, 81, 73, 70, 75, 85, 99],
            },
        ],
        options: {
            chart: {
                width: "auto",
                type: "bar",
                toolbar: {
                    show: true,
                    offsetX: 0,
                    offsetY: 0,
                    tools: {
                        download: true,
                        selection: true,
                        zoom: true,
                        zoomin: true,
                        zoomout: true,
                        pan: true,

                        customIcons: [],
                    },
                    export: {
                        csv: {
                            filename: undefined,
                            columnDelimiter: ",",
                            headerCategory: "category",
                            headerValue: "value",
                        },
                        svg: {
                            filename: undefined,
                        },
                        png: {
                            filename: undefined,
                        },
                    },
                    autoSelected: "zoom",
                },
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
                    height={370}
                    width={"100%"}
                ></ReactApexChart>
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ChartOne;
