import {Outlet} from "react-router";
import DashboardHeaderTop from "../../Components/DashboardHeaderTop";
// import OrderContent from "./Components/OrderContent";

const Orders = () => {
    return (
        <>
            <div className="w-full h-max min-h-full  flex flex-col gap-3 text-gray-600 bg-[#f2f6f9] px-3 pt-1 pb-5">
                <DashboardHeaderTop />
                <Outlet />
            </div>
        </>
    );
};

export default Orders;
