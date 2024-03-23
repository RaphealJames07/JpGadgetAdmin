import {useState} from "react";
import ReactApexChart from "react-apexcharts";

const PieChartOne = () => {
    const [chartData] = useState<{
        series: number[];
        options: ApexCharts.ApexOptions;
    }>({
        series: [120, 55, 63, 20, 35],
        options: {
            // series: [120, 55, 63, 20, 35],
            labels: ["Phones", "Laptop", "Airpods", "Consoles", "Tablets"],
            chart: {
                // width: 380,
                type: "donut",
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270,
                },
            },

            dataLabels: {
                enabled: true,
            },
            fill: {
                type: "gradient",
            },
            legend: {
                formatter: function (val, opts) {
                    return (
                        val + " - " + opts.w.globals.series[opts.seriesIndex]
                    );
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
                    type="donut"
                    height={"auto"}
                ></ReactApexChart>
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default PieChartOne;
