import {MdContactSupport, MdDashboard} from "react-icons/md";
import logo from "../../src/assets/Logo1.png";
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";

const AdminNav = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full h-full flex flex-col justify-between">
                <div className="w-full h-max flex flex-col gap-2">
                    <div className="w-full h-16 flex items-center justify-center shadow-md">
                        <img
                            src={logo}
                            alt=""
                            className="w-max h-14 cursor-pointer"
                            onClick={() => navigate("/admin/dashboard")}
                        />
                    </div>
                    <div className="w-full h-max flex flex-col  gap-2">
                        <NavLink
                            to={"/admin/dashboard"}
                            className={({isActive}) =>
                                !isActive
                                    ? "transition-all hover:text-[0.90rem] hover:bg-[#118686]   hover:text-[#fff] text-[#118686]"
                                    : "transition-all bg-[#118686] text-white"
                            }
                        >
                            <div className="w-full h-12 px-4 flex items-center gap-4 cursor-pointer transition-all duration-400">
                                <MdDashboard className="w-5 h-5" />
                                <p className="text-sm font-medium">Dashboard</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to={"/admin/orders"}
                            className={({isActive}) =>
                                !isActive
                                    ? "transition-all hover:text-[0.90rem] hover:bg-[#118686]   hover:text-[#fff] text-[#118686]"
                                    : "transition-all bg-[#118686] text-white"
                            }
                        >
                            <div className="w-full h-12 px-4 flex items-center gap-4 cursor-pointer transition-all duration-400 ">
                                <MdDashboard className="w-5 h-5" />
                                <p className="text-sm font-medium">Orders</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to={"/admin/transactions"}
                            className={({isActive}) =>
                                !isActive
                                    ? "transition-all hover:text-[0.90rem] hover:bg-[#118686]   hover:text-[#fff] text-[#118686]"
                                    : "transition-all bg-[#118686] text-white"
                            }
                        >
                            <div className="w-full h-12 px-4 flex items-center gap-4 cursor-pointer transition-all duration-400 ">
                                <MdDashboard className="w-5 h-5" />
                                <p className="text-sm font-medium">
                                    Transactions
                                </p>
                            </div>
                        </NavLink>
                        <NavLink
                            to={"/admin/products"}
                            className={({isActive}) =>
                                !isActive
                                    ? "transition-all hover:text-[0.90rem] hover:bg-[#118686]   hover:text-[#fff] text-[#118686]"
                                    : "transition-all bg-[#118686] text-white"
                            }
                        >
                            <div className="w-full h-12 px-4 flex items-center gap-4 cursor-pointer transition-all duration-400 ">
                                <MdDashboard className="w-5 h-5" />
                                <p className="text-sm font-medium">Products</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to={"/admin/users"}
                            className={({isActive}) =>
                                !isActive
                                    ? "transition-all hover:text-[0.90rem] hover:bg-[#118686]   hover:text-[#fff] text-[#118686]"
                                    : "transition-all bg-[#118686] text-white"
                            }
                        >
                            <div className="w-full h-12 px-4 flex items-center gap-4 cursor-pointer transition-all duration-400 ">
                                <MdDashboard className="w-5 h-5" />
                                <p className="text-sm font-medium">Users</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to={"/admin/reports"}
                            className={({isActive}) =>
                                !isActive
                                    ? "transition-all hover:text-[0.90rem] hover:bg-[#118686]   hover:text-[#fff] text-[#118686]"
                                    : "transition-all bg-[#118686] text-white"
                            }
                        >
                            <div className="w-full h-12 px-4 flex items-center gap-4 cursor-pointer transition-all duration-400 ">
                                <MdDashboard className="w-5 h-5" />
                                <p className="text-sm font-medium">Reports</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to={"/admin/settings"}
                            className={({isActive}) =>
                                !isActive
                                    ? "transition-all hover:text-[0.90rem] hover:bg-[#118686]   hover:text-[#fff] text-[#118686]"
                                    : "transition-all bg-[#118686] text-white"
                            }
                        >
                            <div className="w-full h-12 px-4 flex items-center gap-4 cursor-pointer transition-all duration-400 ">
                                <MdDashboard className="w-5 h-5" />
                                <p className="text-sm font-medium">Settings</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="w-full h-40  flex items-center justify-center">
                    <div className="w-[80%] h-max flex items-center gap-2 p-4 bg-white rounded cursor-pointer shadow-md text-[#118686]">
                        <MdContactSupport className="w-10 h-10 " />
                        <p className="flex flex-col w-max font-semibold ">
                            Contact
                            <span className="font-normal text-xs text-[#000]">
                                Start a chat
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminNav;
