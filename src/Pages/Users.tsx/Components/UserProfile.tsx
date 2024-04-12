import {MdOutlineEdit} from "react-icons/md";
import UserOrders from "./UserOrders";
import UserWishList from "./UserWishList";

const UserProfile = () => {
    return (
        <>
            <div className="w-full h-max flex flex-col gap-2">
                <div className="w-full h-max flex justify-between">
                    <p className="text-lg font-semibold">User Profile</p>
                    <button className="w-max h-8 px-4 text-xs font-semibold text-white bg-[#118686] rounded flex items-center justify-center gap-1">
                        <MdOutlineEdit size={15} />
                        Edit
                    </button>
                </div>
                <div className="w-full h-60 flex justify-between gap-4">
                    <div className="w-[55%] h-full bg-white rounded-md border border-gray-300 shadow-sm flex flex-col px-4">
                        <div className="w-full h-[80%] border-b border-b-gray-300 flex items-center gap-4">
                            <div className="w-max h-max flex items-center justify-center">
                                <img
                                    src=""
                                    alt=""
                                    className="w-28 h-28 rounded-full bg-sky-200"
                                />
                            </div>
                            <div className="w-max h-max flex flex-col justify-center gap-1">
                                <p className="font-bold text-xl">
                                    Rapheal Ukachukwu James
                                </p>
                                <p className="text-sm">Joined on 12-Mar-2026</p>
                                <p className="text-xs px-4 text-green-500 bg-green-200 w-max rounded-full h-max py-[2px] font-semibold flex items-center justify-center">
                                    Active
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-[20%] flex justify-between items-center">
                            <p className="text-xs flex flex-col font-medium">
                                Orders <span className="font-normal">20</span>
                            </p>
                            <p className="text-xs flex flex-col font-medium">
                                Wishlist <span className="font-normal">20</span>
                            </p>
                            <p className="text-xs flex flex-col font-medium">
                                Reports <span className="font-normal">20</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-[45%] h-full bg-white rounded-md border border-gray-300 shadow-sm flex flex-col p-4 justify-between">
                        <p className="text-lg font-semibold">Default Address</p>
                        <p className="w-[80%] h-max font-semibold text-sm flex flex-col">
                            Address{" "}
                            <span className="font-normal text-xs">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatum quasi sequi dolor
                                quis unde sint, quibusdam quam odit delectus
                                suscipit cumque dolores recusandae libero
                                eveniet mollitia expedita, qui impedit
                                asperiores!
                            </span>
                        </p>
                        <p className="w-[80%] h-max font-semibold text-sm flex flex-col">
                            Email
                            <span className="font-normal text-xs">raphealjunior07@gmail.com</span>
                        </p>
                        <p className="w-[80%] h-max font-semibold text-sm flex flex-col">
                            Phone
                            <span className="font-normal text-xs">08123456789</span>
                        </p>
                    </div>
                </div>
                <UserOrders/>
                <UserWishList/>
            </div>
        </>
    );
};

export default UserProfile;
