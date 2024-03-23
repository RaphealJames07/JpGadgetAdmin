import ColumnChartOne from "./Components/ColumnChartOne";
import PieChartOne from "./Components/PieChartOne";
import RevenueChart from "./Components/RevenueChart";

const OverviewThree = () => {
    return (
        <>
            <div className="w-full h-max flex phone:flex-col gap-5 mt-4 ">
                <div className="w-[65%] phone:w-full h-max bg-white border border-gray-200 rounded">
                    <div className="w-full h-14 border-b border-b-gray-200 p-4 flex items-center justify-between">
                        <div className="font-medium text-lg">Revenue</div>
                        <div className="w-max h-max flex gap-2">
                            <span className="w-max h-max px-2 py-1 cursor-pointer text-sky-700 rounded-sm text-sm bg-sky-100">
                                All
                            </span>
                            <span className="w-max h-max px-2 py-1 cursor-pointer text-sky-700 rounded-sm text-sm bg-sky-100">
                                1W
                            </span>
                            <span className="w-max h-max px-2 py-1 cursor-pointer text-sky-700 rounded-sm text-sm bg-sky-100">
                                1M
                            </span>
                            <span className="w-max h-max px-2 py-1 cursor-pointer text-sky-700 rounded-sm text-sm bg-sky-100">
                                6M
                            </span>
                            <span className="w-max h-max px-2 py-1 cursor-pointer text-sky-700 rounded-sm text-sm bg-sky-100">
                                1Y
                            </span>
                        </div>
                    </div>
                    <div className="w-full h-16 border-b border-b-gray-200 flex items-center bg-[#f9fbfc] text-sm">
                        <div className="w-1/4 h-full flex items-center justify-center flex-col border-r border-r-gray-200">
                            <p className="text-base font-medium">7,821</p>
                            <p>Orders</p>
                        </div>
                        <div className="w-1/4 h-full flex items-center justify-center flex-col border-r border-r-gray-200">
                            <p className="text-base font-medium">N22,8m</p>
                            <p>Earnings</p>
                        </div>
                        <div className="w-1/4 h-full flex items-center justify-center flex-col border-r border-r-gray-200">
                            <p className="text-base font-medium">341</p>
                            <p>Refunds</p>
                        </div>
                        <div className="w-1/4 h-full flex items-center justify-center flex-col">
                            <p className="text-base font-medium text-green-500">
                                7,331
                            </p>
                            <p>Completed</p>
                        </div>
                    </div>
                    <div className="w-full h-max ">
                        <RevenueChart />
                    </div>
                </div>
                <div className="w-[35%] phone:w-full h-max  flex flex-col gap-5 ">
                    <div className="w-full h-1/2 phone:h-max border rounded border-gray-200 bg-white">
                        <div className="w-full h-14 border-b border-b-gray-200 flex items-center justify-between px-4">
                            <p className="text-lg font-medium">
                                Inventory Summary
                            </p>
                        </div>
                        <PieChartOne />
                    </div>
                    <div className="w-full h-1/2 phone:h-max border rounded border-gray-200 bg-white">
                        <ColumnChartOne />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OverviewThree;
