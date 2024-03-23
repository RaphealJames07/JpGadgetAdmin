import {useState} from "react";
import {FaCaretDown} from "react-icons/fa";
import {RxHamburgerMenu} from "react-icons/rx";
import {Drawer} from "antd";
import AdminNav from "./AdminNav";

const AdminHeader = () => {
    const [languageDropdown, setlanguageDropdown] = useState<boolean>(false);
    const [openNav, setOpenNav] = useState<boolean>(false);

    

    return (
        <>
            <div className="w-full h-full flex items-center justify-end phone:justify-between px-5">
                <div className="w-max h-max items-center justify-center phone:flex hidden">
                    <RxHamburgerMenu
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => setOpenNav(true)}
                    />
                </div>
                <div className="w-max h-max relative">
                    <div
                        className="w-max h-12 bg-white shadow-lg border-2  flex items-center gap-2 cursor-pointer p-1 rounded relative"
                        onClick={() => setlanguageDropdown(!languageDropdown)}
                    >
                        <div className="w-10 h-10 bg-amber-200 rounded-full"></div>
                        <div className="w-40 phone:w-max h-10 flex flex-col justify-center">
                            <p className="font-medium text-sm">
                                Rapheal Ukachukwu
                            </p>
                            <p className="text-xs flex items-center gap-1 text-green-500">
                                Admin{" "}
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </p>
                        </div>
                        <div className="w-5 h-10 flex items-center justify-center">
                            <FaCaretDown
                                className={`transition-all duration-300 ${
                                    languageDropdown ? "-rotate-180" : ""
                                }`}
                            />
                        </div>
                    </div>
                    <span
                        className={`w-60 h-max py-3 px-2 rounded flex flex-col gap-3 bg-white shadow-lg border-2 absolute right-[-22px] top-14 toggle-dropdown ${
                            languageDropdown ? " active" : ""
                        }`}
                    >
                        <div className="w-full h-10 rounded shadow-md flex items-center pl-2 cursor-pointer">
                            View Profile
                        </div>
                        <div className="w-full h-10 rounded shadow-md flex items-center pl-2 text-red-500 cursor-pointer">
                            Logout
                        </div>
                    </span>
                </div>
            </div>
            <Drawer
                open={openNav}
                onClose={() => setOpenNav(false)}
                placement="left"
                maskClosable={true}
                // width={350}
                // title={"MENU"}
            >
                <div className="w-full h-[90vh] p-3">
                    <AdminNav />
                </div>
            </Drawer>
        </>
    );
};

export default AdminHeader;
