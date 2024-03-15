import Overview from "./Components/Overview";
import {SimpleBarChart} from "./Components/SimpleBarChart";
import {SimpleLineChart} from "./Components/SimpleLineChart";

const Dashboard = () => {
    return (
        <>
            <div className="w-full h-max min-h-[89vh]  flex flex-col gap-2">
                <div className="w-full h-max  flex items-center phone:px-3">
                    <p className="text-2xl">Good Morning Rapheal</p>
                </div>
                <div className="w-full h-max p-3 bg-slate-100">
                    <div className="w-full h-10 flex items-center justify-between">
                        <p className="text-xl">Dashboard Overview</p>
                        <div className="w-max h-max flex">
                            <select name="" id="" className="w-max h-8 rounded">
                                <option value="">Today</option>
                                <option value="">Yesterday</option>
                                <option value="">Last 3 days</option>
                                <option value="">This week</option>
                                <option value="">This Month</option>
                                <option value="">Last Month</option>
                                <option value="">Last 3 Month</option>
                                <option value="">Last 6 Month</option>
                                <option value="">Last 12 Month</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full h-max flex items-center justify-between overflow-x-auto">
                        <Overview />
                    </div>
                </div>
                <div className="w-full h-[50vh] flex justify-between ">
                    <div className="w-[60%] h-full">
                        <SimpleLineChart />
                    </div>
                    <div className="w-[40%] h-full flex flex-col items-center border-2 rounded p-2">
                        <p>Orders</p>
                        <div className="w-full h-full p-4 overflow-y-auto">
                            <div className="w-full h-max flex flex-col gap-2">
                                <div className="w-full h-20 bg-red-100 rounded"></div>
                                <div className="w-full h-20 bg-red-100 rounded"></div>
                                <div className="w-full h-20 bg-red-100 rounded"></div>
                                <div className="w-full h-20 bg-red-100 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-max p-2 h-[50vh] bg-sky-100">
                    <SimpleBarChart />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
