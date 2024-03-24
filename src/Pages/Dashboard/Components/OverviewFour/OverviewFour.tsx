import {Pagination} from "antd";
import {IoStatsChart} from "react-icons/io5";

const OverviewFour = () => {
    const data = [1, 1, 1, 1, 1];
    return (
        <>
            <div className="w-full h-max flex phone:flex-col gap-5 mt-4">
                <div className="w-1/2 phone:w-full h-max bg-white rounded border border-gray-200">
                    <div className="w-full h-10 border-b border-b-gray-200 p-4 flex items-center justify-between">
                        <p className="text-sm font-semibold">
                            Best Selling Products
                        </p>
                        <div className="w-max flex text-xs gap-1 items-center">
                            <p className="font-semibold">SORT BY:</p>
                            <select
                                name=""
                                id=""
                                className="w-max h-max border rounded border-gray-300 text-[10px]"
                            >
                                <option value="">Today</option>
                                <option value="">Yesterday</option>
                                <option value="">Last 7 Days</option>
                                <option value="">Last 30 Days</option>
                                <option value="">This Month</option>
                                <option value="">Last Month</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full h-max overflow-x-auto">
                        <div className="phone:w-max w-full h-max">
                            {data.map((index) => (
                                <div
                                    className="w-full h-14 border-b border-gray-200 flex items-center justify-between gap-2 px-3 py-2 text-xs"
                                    key={index}
                                >
                                    <div className="w-max h-max flex gap-1 phone:mr-3">
                                        <div className="w-10 h-10 bg-black/20 rounded"></div>
                                        <div className="w-max flex flex-col justify-center">
                                            <p>Iphone 12 Pro Max</p>
                                            <p className="text-[10px]">
                                                10 Mar 2021
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-16 h-max flex flex-col phone:mr-3">
                                        <p>N1,000,000</p>
                                        <p className="text-[10px]">Prices</p>
                                    </div>
                                    <div className="w-10 h-max flex flex-col phone:mr-3">
                                        <p>100</p>
                                        <p className="text-[10px]">Orders</p>
                                    </div>
                                    <div className="w-max h-max flex flex-col phone:mr-3">
                                        <p className="text-xs rounded bg-red-300 text-red-700 w-max px-1 py-[1px]">
                                            out of stock
                                        </p>
                                        <p className="text-[10px]">Orders</p>
                                    </div>
                                    <div className="w-max h-max flex flex-col">
                                        <p>N1,000,000</p>
                                        <p className="text-[10px]">Prices</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full h-10 flex items-center p-4 justify-between text-xs">
                        <p>Showing 5 of 25 results</p>
                        <Pagination />
                    </div>
                </div>
                <div className="w-1/2 phone:w-full h-max bg-white rounded border border-gray-200">
                    <div className="w-full h-10 border-b border-b-gray-200 p-4 flex items-center justify-between">
                        <p className="text-sm font-semibold">Top Sellers</p>
                        <div className="w-max flex text-xs gap-1 items-center">
                            <p className="font-semibold">SORT BY:</p>
                            <select
                                name=""
                                id=""
                                className="w-max h-max border rounded border-gray-300 text-[10px]"
                            >
                                <option value="">Today</option>
                                <option value="">Yesterday</option>
                                <option value="">Last 7 Days</option>
                                <option value="">Last 30 Days</option>
                                <option value="">This Month</option>
                                <option value="">Last Month</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full h-max overflow-x-auto">
                        <div className="phone:w-max w-full h-max">
                            {data.map((index) => (
                                <div
                                    className="w-full h-14 border-b border-gray-200 flex items-center justify-between gap-2 px-3 py-2 text-xs"
                                    key={index}
                                >
                                    <div className="w-max h-max flex gap-1 phone:mr-3">
                                        <div className="w-10 h-10 bg-black/20 rounded"></div>
                                        <div className="w-max flex flex-col justify-center">
                                            <p>Phones</p>
                                        </div>
                                    </div>
                                    <div className="w-14 phone:w-max h-max flex flex-col text-[10px] phone:mr-3">
                                        apple, samsung
                                    </div>
                                    <div className="w-max h-max flex flex-col phone:mr-3">
                                        <p>1003</p>
                                        <p className="text-[10px]">Stock</p>
                                    </div>
                                    <div className="w-10 phone:w-max h-max flex flex-col phone:mr-3">
                                        <p className="">N10,200,993</p>
                                    </div>
                                    <div className="w-max h-max flex flex-col phone:mr-3">
                                        <p>70%</p>
                                        <p className="text-[10px]">Volume</p>
                                    </div>
                                    <div className="w-max h-max flex flex-col text-green-400 cursor-pointer">
                                        <IoStatsChart />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full h-10 flex items-center p-4 justify-between text-xs">
                        <p>Showing 5 of 25 results</p>
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OverviewFour;
