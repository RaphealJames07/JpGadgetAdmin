import {Pagination} from "antd";
import {FaRegEye} from "react-icons/fa";
import {SlOptions} from "react-icons/sl";

const TransactionsList = () => {
    const data = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="w-full h-max flex flex-col">
                <p>Transactions List</p>
                <div className="w-full h-max flex flex-col">
                    <div className="w-full h-max  overflow-x-auto scrollbar-none border border-gray-300 rounded flex flex-col ">
                        <div className="min-w-full w-max h-10 bg-[#f8fafc] flex text-xs font-semibold">
                            <div className="w-80 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                                CUSTOMER
                            </div>
                            <div className="w-40 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                                TRANSACTION ID
                            </div>
                            <div className="w-28 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                                DATE
                            </div>
                            <div className="w-32 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                                AMOUNT
                            </div>
                            <div className="w-24 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                                TYPE
                            </div>
                            <div className="w-32 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                                STATUS
                            </div>
                            <div className="w-40 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                                MODE
                            </div>
                            <div className="w-28 h-full flex items-center pl-3  ">
                                ACTION
                            </div>
                        </div>
                        <div className="w-full h-max flex flex-col text-xs">
                            {data.map((index) => (
                                <div className="min-w-full w-max h-14 bg-white flex" key={index}>
                                    <div className="w-80 h-full flex items-center gap-2 pl-3 border-r border-r-gray-300 ">
                                        <div className="w-max h-max flex items-center">
                                            <img
                                                src=""
                                                alt=""
                                                className="w-10 h-10 rounded-full bg-lime-100"
                                            />
                                        </div>
                                        <div className="w-max h-max flex flex-col">
                                            <p className="font-semibold">
                                                Rapheal Ukachukwu James
                                            </p>
                                            <p className="text-[10px]">
                                                raphealjunior07@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-40 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                        #123ABC456DEF
                                    </div>
                                    <div className="w-28 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                        10-20-2024
                                    </div>
                                    <div className="w-32 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                        N1,203,444.00
                                    </div>
                                    <div className="w-24 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                        Credit
                                    </div>
                                    <div className="w-32 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                        <p className="w-max h-max p-1 rounded-full bg-yellow-300 px-2 text-yellow-700">
                                            Processing
                                        </p>
                                    </div>
                                    <div className="w-40 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                        Mastercard
                                    </div>
                                    <div className="w-28 h-full flex gap-4 items-center pl-3  ">
                                        <span className="w-6 h-6 rounded-full flex items-center justify-center bg-[#eeeffe] text-[#5a66f1cc] transition-all duration-300 hover:bg-[#5a66f1cc] hover:text-[#fff] cursor-pointer">
                                            <FaRegEye />
                                        </span>
                                        <span className="w-6 h-6 rounded-full flex items-center justify-center bg-[#d2ffe2cc] text-[#22c55ecc] transition-all duration-300 hover:bg-[#22c55ecc] hover:text-[#fff] cursor-pointer">
                                            <SlOptions />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full h-12 bg-white flex items-center justify-end">
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TransactionsList;
