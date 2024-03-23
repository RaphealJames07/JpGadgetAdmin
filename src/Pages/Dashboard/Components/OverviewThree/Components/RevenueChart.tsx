import {useState} from "react";
import ReactApexChart from "react-apexcharts";

const RevenueChart = () => {
    const [chartData] = useState<{
        series: {name: string; data: number[]; type: string}[];
        options: ApexCharts.ApexOptions;
    }>({
        series: [
            {
                name: "Orders",
                data: [81, 72, 92, 87, 93, 102, 67, 81, 94, 52, 80, 75],
                type: "column",
            },
            {
                name: "Earnings",
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 29],
                type: "area",
            },
            {
                name: "Completed",
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 48],
                type: "line",
            },
            {
                name: "Returned",
                data: [11, 6, 0, 2, 4, 1, 6, 10, 3, 7, 2, 5],
                type: "line",
            },
        ],
        options: {
            chart: {
                type: "line",
                height: "auto",
                zoom: {
                    enabled: false,
                },
                stacked: false,
            },
            dataLabels: {
                enabled: false,
            },
            
            stroke: {
                curve: "smooth",
                width: [3, 3, 3,3],
            },
            plotOptions: {
                bar: {
                    columnWidth: "15%",
                    borderRadius: 2,
                },
            },
            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: "light",
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 0, 0, 0],
                },
            },

            labels: [
                "01/01/2023",
                "02/01/2023",
                "03/01/2023",
                "04/01/2023",
                "05/01/2023",
                "06/01/2023",
                "07/01/2023",
                "08/01/2023",
                "09/01/2023",
                "10/01/2023",
                "11/01/2023",
                "12/01/2023",
            ],
            markers: {
                size: 0,
            },
            xaxis: {
                type: "datetime",
            },
            yaxis: {},
            // tooltip: {
            //     shared: true,
            //     intersect: false,
            //     y: {
            //         formatter: function (y) {
            //             if (typeof y !== "undefined") {
            //                 return y.toFixed(0) + " points";
            //             }
            //             return y;
            //         },
            //     },
            // },
            // legend: {
            //     horizontalAlign: "left",
            // },
        },
    });

   
    //     const generateRandomData = () => {
    //         const randomPrices = Array.from({length: 30}, () =>
    //             Math.floor(Math.random() * 50)
    //         );
    //         const randomDates = Array.from(
    //             {length: 30},
    //             (_, i) => new Date(Date.now() - i * 24 * 60 * 60 * 1000)
    //         );

    //         return {
    //             prices: randomPrices,
    //             dates: randomDates,
    //         };
    //     };

    //     const randomData = generateRandomData();
    //     setChartData((prevState) => ({
    //         ...prevState,
    //         series: [
    //             {
    //                 ...prevState.series[0],
    //                 data: randomData.prices,
    //             },
    //         ],
    //         options: {
    //             ...prevState.options,
    //             xaxis: {
    //                 ...prevState.options.xaxis,
    //                 categories: randomData.dates.map((date) =>
    //                     date.toISOString()
    //                 ),
    //             },
    //         },
    //     }));
    //     console.log(randomData.dates.map((date) => date.toISOString()));
    // }, []);

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="line"
                    height={"auto"}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default RevenueChart;
