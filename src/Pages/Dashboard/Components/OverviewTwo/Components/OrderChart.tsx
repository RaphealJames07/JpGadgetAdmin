// import React, {useState, useEffect} from "react";
// import ReactApexChart from "react-apexcharts";

// const OrderChart = () => {
//     const [chartData, setChartData] = useState<{
//         series: {name: string; data: number[]}[];
//         options: ApexCharts.ApexOptions;
//     }>({
//         series: [
//             {
//                 name: "STOCK ABC",
//                 data: [],
//             },
//         ],
//         options: {
//             chart: {
//                 type: "area",
//                 height: 280,
//                 zoom: {
//                     enabled: false,
//                 },
//             },
//             dataLabels: {
//                 enabled: false,
//             },
//             stroke: {
//                 curve: "straight",
//             },
//             title: {
//                 text: "Fundamental Analysis of Stocks",
//                 align: "left",
//             },
//             subtitle: {
//                 text: "Price Movements",
//                 align: "left",
//             },
//             xaxis: {
//                 type: "datetime",
//             },
//             yaxis: {
//                 opposite: true,
//             },
//             legend: {
//                 horizontalAlign: "left",
//             },
//         },
//     });

//     useEffect(() => {
//         const generateRandomData = () => {
//             const randomPrices = Array.from({length: 30}, () =>
//                 Math.floor(Math.random() * 1000)
//             );
//             const randomDates = Array.from(
//                 {length: 30},
//                 (_, i) => new Date(Date.now() - i * 24 * 60 * 60 * 1000)
//             );
//             console.log(randomDates);

//             return {
//                 prices: randomPrices,
//                 dates: randomDates,
//             };
//         };

//         const randomData = generateRandomData();
//         setChartData((prevState) => ({
//             ...prevState,
//             series: [
//                 {
//                     ...prevState.series[0],
//                     data: randomData.prices,
//                 },
//             ],
//             options: {
//                 ...prevState.options,
//                 xaxis: {
//                     ...prevState.options.xaxis,
//                     categories: randomData.dates,
//                 },
//             },
//         }));
//     }, []);

//     return (
//         <div>
//             <div id="chart">
//                 <ReactApexChart
//                     options={chartData.options}
//                     series={chartData.series}
//                     type="area"
//                     height={280}
//                 />
//             </div>
//             <div id="html-dist"></div>
//         </div>
//     );
// };

// export default OrderChart;

import  {useState, useEffect} from "react";
import ReactApexChart from "react-apexcharts";

const OrderChart = () => {
    const [chartData, setChartData] = useState<{
        series: {name: string; data: number[]}[];
        options: ApexCharts.ApexOptions;
    }>({
        series: [
            {
                name: "Order",
                data: [],
            },
        ],
        options: {
            chart: {
                type: "area",
                height: "auto",
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            title: {
                text: "Total Order",
                align: "left",
                style: {
                    fontWeight: "500",
                    fontSize: "16px",
                },
            },
            subtitle: {
                text: "Order placed from date indicated below",
                align: "left",
            },
            xaxis: {
                type: "datetime",
            },
            yaxis: {
                opposite: true,
            },
            legend: {
                horizontalAlign: "left",
            },
        },
    });

    useEffect(() => {
        const generateRandomData = () => {
            const randomPrices = Array.from({length: 30}, () =>
                Math.floor(Math.random() * 50)
            );
            const randomDates = Array.from(
                {length: 30},
                (_, i) => new Date(Date.now() - i * 24 * 60 * 60 * 1000)
            );

            return {
                prices: randomPrices,
                dates: randomDates,
            };
        };

        const randomData = generateRandomData();
        setChartData((prevState) => ({
            ...prevState,
            series: [
                {
                    ...prevState.series[0],
                    data: randomData.prices,
                },
            ],
            options: {
                ...prevState.options,
                xaxis: {
                    ...prevState.options.xaxis,
                    categories: randomData.dates.map((date) =>
                        date.toISOString()
                    ),
                },
            },
        }));
        console.log(randomData.dates.map((date) => date.toISOString()));
    }, []);

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="area"
                    height={"auto"}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default OrderChart;
