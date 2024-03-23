import {Pagination} from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import OrderChart from "./Components/OrderChart";

const OverViewTwo = () => {
    const testData = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="w-full h-max flex phone:flex-col gap-5 mt-4">
                <div className="w-1/2 phone:w-full h-[60vh] border flex flex-col border-gray-200 bg-white rounded overflow-auto">
                    <div className="w-full h-10 flex justify-between items-center px-4 border-b border-b-gray-200">
                        <p className="text-base font-semibold">Recent Orders</p>
                        <div className="w-max text-xs bg-green-100 rounded-sm p-1 cursor-pointer">
                            Generate Report
                        </div>
                    </div>
                    <div
                        className="w-full overflow-auto scrollbar-thin"
                        style={{height: `calc(100% - 5rem)`}}
                    >
                        <div className="w-full h-max flex flex-col justify-between gap-2 p-1 ">
                            <div className="w-max h-12 bg-sky-50 flex text-sm px-2">
                                <div className="w-24 h-full flex items-center font-medium">
                                    Order ID
                                </div>
                                <div className="w-48 h-full flex items-center font-medium">
                                    Customer
                                </div>
                                <div className="w-24 h-full flex items-center font-medium">
                                    Product
                                </div>
                                <div className="w-28 h-full flex items-center font-medium">
                                    Amount
                                </div>
                                <div className="w-28 h-full flex items-center font-medium">
                                    Status
                                </div>
                                <div className="w-10 h-full flex items-center font-medium">
                                    Action
                                </div>
                            </div>
                            <div
                                className="w-full flex flex-col gap-1"
                                style={{height: `calc(100% - 2rem)`}}
                            >
                                {testData.map((index) => (
                                    <div
                                        className="w-max h-12 bg-sky-50 flex text-[13px] px-2"
                                        key={index}
                                    >
                                        <div className="w-24 h-full flex items-center ">
                                        #VZ2112
                                        </div>
                                        <div className="w-48 h-full flex gap-2 items-center ">
                                            <div className="w-8 h-8 rounded-full bg-orange-100"></div>
                                            <p>John Smith Philip</p>
                                        </div>
                                        <div className="w-24 h-full flex items-center ">
                                            Phone
                                        </div>
                                        <div className="w-28 h-full flex items-center ">
                                            N500,000
                                        </div>
                                        <div className="w-28 h-full flex items-center ">
                                            <p className="bg-yellow-300 rounded py-1 px-2 text-xs">Pending</p>
                                        </div>
                                        <div className="w-10 h-full flex items-center ">
                                        <BsThreeDotsVertical className="w-max h-max cursor-pointer"/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-10 bg-sky-50 flex ">
                        <Pagination />
                    </div>
                </div>
                <div className="w-1/2 phone:w-full h-[60vh] phone:h-max border border-gray-200 bg-white rounded p-2">
                    <OrderChart />
                </div>
            </div>
        </>
    );
};

export default OverViewTwo;
