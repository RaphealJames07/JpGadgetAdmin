// import Overview from "./Components/Overview";
// import {SimpleBarChart} from "./Components/SimpleBarChart";
// import {SimpleLineChart} from "./Components/SimpleLineChart";

import DashboardHeaderTop from "../../Components/DashboardHeaderTop";
import OverviewFour from "./Components/OverviewFour/OverviewFour";
import Overview from "./Components/OverviewOne/Overview";
import OverviewThree from "./Components/OverviewThree/OverviewThree";
import OverViewTwo from "./Components/OverviewTwo/OverViewTwo";

const Dashboard = () => {
    return (
        <>
            <div className="w-full h-max min-h-full  flex flex-col gap-3 text-gray-600 bg-[#f2f6f9] px-3 pt-1 pb-5">
                <DashboardHeaderTop />
                <Overview />
                <OverViewTwo />
                <OverviewThree />
                <OverviewFour/>
            </div>
        </>
    );
};

export default Dashboard;
