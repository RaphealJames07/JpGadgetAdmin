import {FaRegEye, FaStar} from "react-icons/fa";
import {SlOptions} from "react-icons/sl";
import {NavLink} from "react-router-dom";

const ProductList = () => {
    const data = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="w-full h-max  overflow-x-auto scrollbar-none border border-gray-300 rounded flex flex-col ">
                <div className="min-w-full w-max h-10 bg-[#f8fafc] flex text-xs font-semibold">
                    <div className="w-80 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                        Product
                    </div>
                    <div className="w-20 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                        Stock
                    </div>
                    <div className="w-44 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                        Last Updated
                    </div>
                    <div className="w-32 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                        Price (unit)
                    </div>
                    <div className="w-20 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                        Orders
                    </div>
                    <div className="w-24 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                        Ratings
                    </div>
                    <div className="w-40 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                        Category
                    </div>
                    <div className="w-28 h-full flex items-center pl-3  ">
                        ACTION
                    </div>
                </div>
                <div className="w-full h-max flex flex-col text-xs">
                    {data.map((index) => (
                        <div
                            className="min-w-full w-max h-14 bg-white flex"
                            key={index}
                        >
                            <div className="w-80 h-full flex items-center gap-2 pl-3 border-r border-r-gray-300 ">
                                <div className="w-max h-max flex items-center">
                                    <img
                                        src=""
                                        alt=""
                                        className="w-10 h-10 rounded bg-lime-100"
                                    />
                                </div>
                                <div className="w-max h-max flex flex-col">
                                    <p className="font-semibold">
                                        Iphone 12 Pro Max 128 GB
                                    </p>
                                </div>
                            </div>
                            <div className="w-20 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                30
                            </div>
                            <div className="w-44 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                10-20-2024 | 10:30AM
                            </div>
                            <div className="w-32 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                N1,203,444.00
                            </div>
                            <div className="w-20 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                21
                            </div>
                            <div className="w-24 h-full flex gap-1 items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                <FaStar className="text-yellow-500" />
                                <p className="bg-yellow-300 text-yellow-600 w-max h-max px-1 rounded-sm">
                                    4.5
                                </p>
                            </div>
                            <div className="w-40 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                Phone
                            </div>
                            <div className="w-28 h-full flex gap-4 items-center pl-3  ">
                                <NavLink to={"/admin/products/view/1"}>
                                    <span className="w-6 h-6 rounded-full flex items-center justify-center bg-[#eeeffe] text-[#5a66f1cc] transition-all duration-300 hover:bg-[#5a66f1cc] hover:text-[#fff] cursor-pointer">
                                        <FaRegEye />
                                    </span>
                                </NavLink>
                                <span className="w-6 h-6 rounded-full flex items-center justify-center bg-[#d2ffe2cc] text-[#22c55ecc] transition-all duration-300 hover:bg-[#22c55ecc] hover:text-[#fff] cursor-pointer">
                                    <SlOptions />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductList;
