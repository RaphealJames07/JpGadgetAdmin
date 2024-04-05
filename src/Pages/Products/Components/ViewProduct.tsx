import {FaMoneyBillAlt, FaRegStar, FaStar} from "react-icons/fa";
import {MdEdit} from "react-icons/md";
import {PiWaveTriangleFill} from "react-icons/pi";

import {IoIosListBox, IoMdCash} from "react-icons/io";

const ViewProduct = () => {
    return (
        <>
            <div className="w-full h-max min-h-full  flex flex-col gap-2 text-gray-600 bg-[#f2f6f9] px-3 pt-1 pb-5">
                <div className="w-full h-10 flex justify-between items-center">
                    <p className="font-medium">PRODUCT DETAILS</p>
                    <div className="w-max h-max flex items-center justify-center text-xs gap-2 cursor-pointer bg-white px-2 rounded-sm">
                        <span className="w-6 h-6 bg-[#fff] flex items-center justify-center rounded cursor-pointer">
                            <MdEdit />
                        </span>
                        Edit
                    </div>
                </div>
                <div className="w-full h-max flex p-2 bg-white rounded border gap-5 border-gray-300 shadow-sm">
                    <div className="w-80 h-max flex flex-col gap-2">
                        <div className="w-full h-80 bg-[#f3f6f9] border border-gray-300 rounded flex items-center justify-center">
                            image
                        </div>
                        <div className="w-full h-max flex flex-wrap gap-2 flex-grow">
                            <div className="w-[23%] h-16 border border-gray-300 rounded cursor-pointer"></div>
                            <div className="w-[23%] h-16 border border-gray-300 rounded cursor-pointer"></div>
                            <div className="w-[23%] h-16 border border-gray-300 rounded cursor-pointer"></div>
                            <div className="w-[23%] h-16 border border-gray-300 rounded cursor-pointer"></div>
                            <div className="w-[23%] h-16 border border-gray-300 rounded cursor-pointer"></div>
                            <div className="w-[23%] h-16 border border-gray-300 rounded cursor-pointer"></div>
                        </div>
                    </div>
                    <div
                        className=" overflow-y-auto scrollbar-none h-[70vh] p-2"
                        style={{width: `calc(100% - 20rem)`}}
                    >
                        <div className="w-full h-max flex flex-col gap-4">
                            <div className="w-full h-max flex flex-col gap-2">
                                <p className="text-xl font-medium">
                                    Iphone 12 Pro Max 128 GB
                                </p>
                                <div className="w-max flex h-max gap-5 text-xs font-medium">
                                    <p>Brand: Apple</p>
                                    <p>Category: Phones</p>
                                    <p>Date Created: 26 Mar 2024</p>
                                </div>
                            </div>
                            <div className="w-max h-max">
                                <p className="w-max flex items-center gap-2 text-sm">
                                    <span className="w-max flex h-max">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar />
                                        <FaRegStar />
                                    </span>
                                    <span>23 Customer Review</span>
                                </p>
                            </div>
                            <div className="w-full h-max flex justify-between gap-2">
                                <div className="w-1/4 h-16 border border-gray-300 rounded flex items-center p-2 gap-1">
                                    <div className="w-max h-max flex items-center justify-center">
                                        <span className="w-8 h-8 text-[#118686] flex items-center justify-center rounded-full">
                                            <FaMoneyBillAlt />
                                        </span>
                                    </div>
                                    <div className="w-max h-max flex flex-col text-xs font-semibold">
                                        <p className="text-gray-400 font-medium">Price</p>
                                        <p className="text-sm">N745,000</p>
                                    </div>
                                </div>
                                <div className="w-1/4 h-16 border border-gray-300 rounded flex items-center p-2 gap-1">
                                    <div className="w-max h-max flex items-center justify-center">
                                        <span className="w-8 h-8 text-[#118686] flex items-center justify-center rounded-full">
                                            <IoIosListBox />
                                        </span>
                                    </div>
                                    <div className="w-max h-max flex flex-col text-xs font-semibold">
                                        <p className="text-gray-400 font-medium">No of Orders</p>
                                        <p className="text-sm">N745,000</p>
                                    </div>
                                </div>
                                <div className="w-1/4 h-16 border border-gray-300 rounded flex items-center p-2 gap-1">
                                    <div className="w-max h-max flex items-center justify-center">
                                        <span className="w-8 h-8 text-[#118686] flex items-center justify-center rounded-full">
                                            <PiWaveTriangleFill />
                                        </span>
                                    </div>
                                    <div className="w-max h-max flex flex-col text-xs font-semibold">
                                        <p className="text-gray-400 font-medium">Stocks</p>
                                        <p className="text-sm">N745,000</p>
                                    </div>
                                </div>
                                <div className="w-1/4 h-16 border border-gray-300 rounded flex items-center p-2 gap-1">
                                    <div className="w-max h-max flex items-center justify-center">
                                        <span className="w-8 h-8 text-[#118686] flex items-center justify-center rounded-full">
                                            <IoMdCash />
                                        </span>
                                    </div>
                                    <div className="w-max h-max flex flex-col text-xs font-semibold">
                                        <p className="text-gray-400 font-medium">Revenue</p>
                                        <p className="text-sm">N745,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewProduct;
