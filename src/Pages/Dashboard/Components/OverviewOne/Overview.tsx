const Overview = () => {
    return (
        <>
            <div className="w-full h-max flex flex-col gap-2">
                <p className="text-lg font-semibold">Dashboard Overview</p>
                <div className="w-full h-max flex flex-col gap-5">
                    <div className="w-full h-max flex gap-5 phone:flex-col">
                        <div className="w-1/3 phone:w-full h-28 border border-gray-200 bg-white rounded flex gap-3 items-center p-6">
                            <div className="w-20 h-20 bg-blue-100 rounded"></div>
                            <div>
                                <p className="">Total Orders</p>
                                <p className="text-xl font-semibold">12,088</p>
                                <p className="text-sm">
                                    Increased by{" "}
                                    <span className="text-green-500">
                                        +12.2%
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="w-1/3 phone:w-full h-28 border border-gray-200 bg-white rounded flex gap-3 items-center p-6">
                            <div className="w-20 h-20 bg-blue-100 rounded"></div>
                            <div>
                                <p className="">Total Sales</p>
                                <p className="text-xl font-semibold">12,088</p>
                                <p className="text-sm">
                                    Increased by{" "}
                                    <span className="text-green-500">
                                        +12.2%
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="w-1/3 phone:w-full h-28 border border-gray-200 bg-white rounded flex gap-3 items-center p-6">
                            <div className="w-20 h-20 bg-blue-100 rounded"></div>
                            <div>
                                <p className="">Total Total Visitors</p>
                                <p className="text-xl font-semibold">12,088</p>
                                <p className="text-sm">
                                    Increased by{" "}
                                    <span className="text-green-500">
                                        +12.2%
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max flex gap-5 phone:flex-col">
                        <div className="w-1/3 phone:w-full h-28 border border-gray-200 bg-white rounded flex gap-3 items-center p-6">
                            <div className="w-20 h-20 bg-blue-100 rounded"></div>
                            <div>
                                <p className="">Total Income</p>
                                <p className="text-xl font-semibold">12,088</p>
                                <p className="text-sm">
                                    Increased by{" "}
                                    <span className="text-green-500">
                                        +12.2%
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="w-1/3 phone:w-full h-28 border border-gray-200 bg-white rounded flex gap-3 items-center p-6">
                            <div className="w-20 h-20 bg-blue-100 rounded"></div>
                            <div>
                                <p className="">Total Expenses</p>
                                <p className="text-xl font-semibold">12,088</p>
                                <p className="text-sm">
                                    Increased by{" "}
                                    <span className="text-green-500">
                                        +12.2%
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="w-1/3 phone:w-full h-28 border border-gray-200 bg-white rounded flex gap-3 items-center p-6">
                            <div className="w-20 h-20 bg-blue-100 rounded"></div>
                            <div>
                                <p className="">Total Products</p>
                                <p className="text-xl font-semibold">12,088</p>
                                <p className="text-sm">
                                    Increased by{" "}
                                    <span className="text-green-500">
                                        +12.2%
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Overview;
