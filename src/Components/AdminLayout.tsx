import {Outlet} from "react-router";
import AdminHeader from "./AdminHeader";
import AdminNav from "./AdminNav";

const AdminLayout = () => {
    return (
        <>
            <div className="w-full h-max flex gap-2">
                <div className="w-[20%] h-screen flex flex-col border-r-2 phone:hidden">
                    <AdminNav />
                </div>
                <div className="w-[80%] phone:w-full h-screen flex flex-col gap-2">
                    <div className="w-full h-16 bg-white shadow-md">
                        <AdminHeader />
                    </div>
                    <div className="w-full h-[89vh] overflow-y-auto pr-2">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
