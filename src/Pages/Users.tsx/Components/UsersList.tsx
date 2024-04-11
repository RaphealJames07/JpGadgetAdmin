import {IoFilterOutline, IoSearchOutline} from "react-icons/io5";
import {FaRegEye} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {Pagination} from "antd";
import KebabMenu from "./KebabMenu";

const UsersList = () => {
    const data = [1, 2, 3, 4, 5,1, 2, 3, 4, 5];
    return (
        <>
            <div className="w-full h-max flex flex-col gap-2">
                <div className="w-full h-max flex justify-between">
                    <p className="text-lg font-semibold">Users</p>
                    <button className="w-max h-8 px-4 text-xs font-semibold text-white bg-[#118686] rounded flex items-center justify-center gap-2">
                        <IoSearchOutline size={15} />
                        Add User
                    </button>
                </div>
                <div className="w-full h-max flex phone:flex-col justify-between gap-4">
                    <input
                        type="text"
                        placeholder="Search for User, name, email, phone..."
                        className="w-[50%] phone:w-full h-8 rounded border-gray-300 border shadow outline-none transition-all duration-500 focus:border-[#118686] focus:shodow-[#118686] pl-2 text-xs"
                    />
                    <div className="w-1/2 phone:w-full h-max flex justify-between gap-4">
                        <select
                            name=""
                            id=""
                            className="w-1/3 h-8 rounded border-gray-300 border shadow outline-none transition-all duration-500 focus:border-[#118686] focus:shodow-[#118686] pl-2 text-xs"
                        >
                            <option value="">Users</option>
                            <option value="">Admin</option>
                            <option value="">Drivers</option>
                        </select>
                        <select
                            name=""
                            id=""
                            className="w-1/3 h-8 rounded border-gray-300 border shadow outline-none transition-all duration-500 focus:border-[#118686] focus:shodow-[#118686] pl-2 text-xs"
                        >
                            <option value="">Active</option>
                            <option value="">Blocked</option>
                        </select>
                        <button className="w-1/3 h-8 px-4 text-xs font-semibold text-white bg-[#118686] rounded flex items-center justify-center gap-2">
                            <IoFilterOutline size={15} />
                            Filter
                        </button>
                    </div>
                </div>
                <div className="w-full h-max  overflow-x-auto scrollbar-none border border-gray-300 rounded flex flex-col ">
                    <div className="min-w-full w-max h-10 bg-[#f8fafc] flex text-xs font-semibold">
                        <div className="w-80 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                            User
                        </div>
                        <div className="w-52 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                            Email
                        </div>
                        <div className="w-32 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                            Phone
                        </div>
                        <div className="w-32 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                            Total Spent
                        </div>
                        <div className="w-20 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                            Orders
                        </div>
                        <div className="w-36 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                            Date Joined
                        </div>
                        <div className="w-24 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                            Status
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
                                            className="w-8 h-8 rounded-full bg-lime-100"
                                        />
                                    </div>
                                    <div className="w-max h-max flex flex-col">
                                        <p className="font-semibold">
                                            Rapheal Ukachukwu James
                                        </p>
                                    </div>
                                </div>
                                <div className="w-52 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                    raphealjunior07@gmail.com
                                </div>
                                <div className="w-32 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                    08123456789
                                </div>
                                <div className="w-32 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                    N10,203,444.00
                                </div>
                                <div className="w-20 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                    21
                                </div>
                                <div className="w-36 h-full flex gap-1 items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                    12-November-2024
                                </div>
                                <div className="w-24 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                    <p className="w-max h-max bg-red-100 px-3 font-semibold py-1 text-xs text-red-500 rounded-full">
                                        Blocked
                                    </p>
                                </div>
                                <div className="w-28 h-full flex gap-4 items-center pl-3  ">
                                    <NavLink to={"/admin/users/profile/1"}>
                                        <span className="w-6 h-6 rounded-full flex items-center justify-center bg-[#eeeffe] text-[#5a66f1cc] transition-all duration-300 hover:bg-[#5a66f1cc] hover:text-[#fff] cursor-pointer">
                                            <FaRegEye />
                                        </span>
                                    </NavLink>
                                    <span className="w-6 h-6 rounded-full flex items-center justify-center bg-[#d2ffe2cc] text-[#22c55ecc] transition-all duration-300 hover:bg-[#22c55ecc] hover:text-[#fff] cursor-pointer">
                                        <KebabMenu />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-max flex justify-end">
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default UsersList;
