import {Pagination} from "antd";
import {IoMdSearch} from "react-icons/io";
import OrderKebabMenu from "./OrderKebabMenu";

const OrderContent = () => {
    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
        <>
        
            <div className="w-full h-max flex flex-col gap-2">
                <div className="w-full h-max flex items-center justify-between">
                    <p className="text-xl font-medium">Orders</p>
                    <div className="w-max h-max hidden phone:flex">
                        <select
                            name=""
                            id=""
                            className="w-max px-1 h-8 rounded text-sm"
                        >
                            <option value="">All Orders</option>
                            <option value="">Processing</option>
                            <option value="">On Delivery</option>
                            <option value="">Delivered</option>
                            <option value="">Failed Delivery</option>
                            <option value="">Returned</option>
                            <option value="">Cancelled</option>
                        </select>
                    </div>
                </div>
                <div className="w-max phone:hidden h-8 flex items-center gap-8 font-medium text-xs">
                    <span className="cursor-pointer transition-all duration-500 text-green-500">
                        All Orders (20081)
                    </span>
                    <span className="cursor-pointer transition-all duration-500">
                        Processing
                    </span>
                    <span className="cursor-pointer transition-all duration-500">
                        On Delivery
                    </span>
                    <span className="cursor-pointer transition-all duration-500">
                        Delivered
                    </span>
                    <span className="cursor-pointer transition-all duration-500">
                        Failed Delivery
                    </span>
                    <span className="cursor-pointer transition-all duration-500">
                        Returned
                    </span>
                    <span className="cursor-pointer transition-all duration-500">
                        Cancelled
                    </span>
                </div>
                <div className="w-full h-max flex justify-between items-center">
                    <div className="w-max h-7 flex bg-white p-1 items-center rounded">
                        <input
                            type="text"
                            placeholder="search by order ID"
                            className="text-xs w-full h-full outline-none border-none pl-1"
                        />
                        <IoMdSearch className="w-6 h-full cursor-pointer" />
                    </div>
                    <div className="w-max h-max">
                        <button className="w-max h-max px-2 py-1 text-xs rounded-sm bg-blue-200">
                            Generate Report
                        </button>
                    </div>
                </div>
                <div className="w-full h-max flex flex-col overflow-x-auto scrollbar-none bg-white">
                    <div className="w-full h-max flex items-center bg-white  ">
                        <div className="w-max h-12 flex items-center gap-5 text-xs font-bold border-b border-b-gray-300 px-2 ">
                            <div className="w-max h-max px-1">
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    className="w-4 h-4 flex items-center cursor-pointer"
                                />
                            </div>
                            <div className="w-28 h-max">ORDER NO</div>
                            <div className="w-52 h-max">CUSTOMER</div>
                            <div className="w-48 h-max">PAYMENT STATUS</div>
                            <div className="w-40 h-max">DELIVERY STATUS</div>
                            <div className="w-40 h-max">DELIVERY TYPE</div>
                            <div className="w-24 h-max">DATE</div>
                            <div className="w-10 h-max">Action</div>
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col bg-white  ">
                        {data.map((index) => (
                            <div
                                className="w-max h-12 flex items-center gap-5 text-xs font-medium border-b border-b-gray-300 px-2"
                                key={index}
                            >
                                <div className="w-max h-max px-1">
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        className="w-4 h-4 flex items-center cursor-pointer"
                                    />
                                </div>
                                <div className="w-28 h-max">#ABC-123-DEF</div>
                                <div className="w-52 h-max flex items-center gap-2">
                                    <div className="w-max h-max">
                                        <img
                                            src=""
                                            alt=""
                                            className="w-7 h-7 bg-red-200 rounded-full"
                                        />
                                    </div>
                                    <p>Rapheal Ukachukwu James</p>
                                </div>
                                <div className="w-48 h-max flex items-center">
                                    <p className="w-max h-max px-3 py-[2px] rounded-full bg-green-300">
                                        Confirmed
                                    </p>
                                </div>
                                <div className="w-40 h-max">
                                    <p className="w-max h-max px-3 py-[2px] rounded-full bg-yellow-300">
                                        Pending
                                    </p>
                                </div>
                                <div className="w-40 h-max">
                                    Pay on Delivery
                                </div>
                                <div className="w-24 h-max">12-Mar-2023</div>
                                <div className="w-10 flex items-center justify-center h-max">
                                    <OrderKebabMenu />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-10 flex items-center p-4 justify-between text-xs">
                    <p>Showing 10 of 25 results</p>
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default OrderContent;
