import {BiTrendingDown, BiTrendingUp, BiUserCheck} from "react-icons/bi";
import {FaClipboardList, FaUsers} from "react-icons/fa";
import {MdOutlineTouchApp} from "react-icons/md";

const Overview = () => {
    return (
        <>
            <div className="w-full phone:w-max h-max flex items-center justify-between gap-4">
                <div className="w-[30%] h-36 phone:w-60 rounded-md bg-white py-5 px-5">
                    <div className="w-full h-[80%] flex">
                        <div className="w-[30%] flex justify-center">
                            <span className="w-12 h-12 rounded-full bg-[#e0dbff] flex items-center justify-center">
                                <FaClipboardList className="w-6 h-6 text-[#2b66c3]" />
                            </span>
                        </div>
                        <div className="w-[70%] flex flex-col items-center font-medium">
                            <h1 className="w-[80%] flex justify-end text-xl">
                                Total Orders
                            </h1>
                            <p className="w-[80%] flex justify-end">150</p>
                        </div>
                    </div>
                    <p className="w-full h-[20%] flex items-center text-sm pl-3">
                        <span className="flex items-center mr-1 text-green-400">
                            <BiTrendingUp /> 10%
                        </span>
                        up from the past week
                    </p>
                </div>
                <div className="w-[30%] h-36 phone:w-60 rounded-md bg-white py-5 px-5">
                    <div className="w-full h-[80%] flex">
                        <div className="w-[30%] flex justify-center">
                            <span className="w-12 h-12 rounded-full bg-[#d2ebc6] flex items-center justify-center">
                                <MdOutlineTouchApp className="w-6 h-6 text-[#81c361]" />
                            </span>
                        </div>
                        <div className="w-[70%] flex flex-col items-center font-medium">
                            <h1 className="w-[80%] flex justify-end text-xl">
                                Total Visits
                            </h1>
                            <p className="w-[80%] flex justify-end">150</p>
                        </div>
                    </div>
                    <p className="w-full h-[20%] flex items-center text-sm pl-3">
                        <span className="flex items-center mr-1 text-red-400">
                            <BiTrendingDown /> 10%
                        </span>
                        down from the past week
                    </p>
                </div>
                <div className="w-[30%] h-36 phone:w-60 rounded-md bg-white py-5 px-5">
                    <div className="w-full h-[80%] flex">
                        <div className="w-[30%] flex justify-center">
                            <span className="w-12 h-12 rounded-full bg-[#f4ddff] flex items-center justify-center">
                                <FaUsers className="w-6 h-6 text-[#f114f7]" />
                            </span>
                        </div>
                        <div className="w-[70%] flex flex-col items-center font-medium">
                            <h1 className="w-[80%] flex justify-end text-xl">
                                Total Users
                            </h1>
                            <p className="w-[80%] flex justify-end">150</p>
                        </div>
                    </div>
                    <p className="w-full h-[20%] flex items-center text-sm pl-3">
                        <span className="flex items-center mr-1 text-green-400">
                            <BiTrendingUp /> 10%
                        </span>
                        up from the past week
                    </p>
                </div>
                <div className="w-[30%] h-36 phone:w-60 rounded-md bg-white py-5 px-5">
                    <div className="w-full h-[80%] flex">
                        <div className="w-[30%] flex justify-center">
                            <span className="w-12 h-12 rounded-full bg-[#c6d8e4] flex items-center justify-center">
                                <BiUserCheck className="w-6 h-6 text-[#34a1b0]" />
                            </span>
                        </div>
                        <div className="w-[70%] flex flex-col items-center font-medium">
                            <h1 className="w-[80%] flex justify-end text-xl">
                                Active Users
                            </h1>
                            <p className="w-[80%] flex justify-end">150</p>
                        </div>
                    </div>
                    <p className="w-full h-[20%] flex items-center text-sm pl-3">
                        <span className="flex items-center mr-1 text-green-400">
                            <BiTrendingUp /> 10%
                        </span>
                        up from the past week
                    </p>
                </div>
            </div>
        </>
    );
};

export default Overview;
