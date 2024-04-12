import OrderKebabMenu from "../../Orders/Components/OrderKebabMenu";

const UserOrders = () => {
    const data = [1, 2, 3, 4, 5, 6, 7];
    return (
        <>
            <p className="font-semibold text-lg mt-2 ">Orders</p>
            <div className="w-full h-max flex flex-col overflow-x-auto scrollbar-none bg-white">
                <div className="w-full h-max flex items-center bg-white  ">
                    <div className="w-max h-12 flex items-center gap-5 text-xs font-bold border-b border-b-gray-300 px-2 ">
                        <div className="w-28 h-max">ORDER NO</div>
                        <div className="w-52 h-max">CUSTOMER</div>
                        <div className="w-48 h-max">PAYMENT STATUS</div>
                        <div className="w-40 h-max">DELIVERY STATUS</div>
                        <div className="w-40 h-max">DELIVERY TYPE</div>
                        <div className="w-24 h-max">DATE</div>
                        <div className="w-10 h-max">Action</div>
                    </div>
                </div>
                <div className="w-full h-max flex flex-col bg-white  ">
                    {data.map((index) => (
                        <div
                            className="w-max h-12 flex items-center gap-5 text-xs font-medium border-b border-b-gray-300 px-2"
                            key={index}
                        >
                            <div className="w-28 h-max">#ABC-123-DEF</div>
                            <div className="w-52 h-max flex items-center gap-2">
                                <div className="w-max h-max">
                                    <img
                                        src=""
                                        alt=""
                                        className="w-7 h-7 bg-red-200 rounded-full"
                                    />
                                </div>
                                <p>Rapheal Ukachukwu James</p>
                            </div>
                            <div className="w-48 h-max flex items-center">
                                <p className="w-max h-max px-3 py-[2px] rounded-full bg-green-300">
                                    Confirmed
                                </p>
                            </div>
                            <div className="w-40 h-max">
                                <p className="w-max h-max px-3 py-[2px] rounded-full bg-yellow-300">
                                    Pending
                                </p>
                            </div>
                            <div className="w-40 h-max">Pay on Delivery</div>
                            <div className="w-24 h-max">12-Mar-2023</div>
                            <div className="w-10 flex items-center justify-center h-max">
                                <OrderKebabMenu />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default UserOrders;
