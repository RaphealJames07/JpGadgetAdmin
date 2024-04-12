import OrderKebabMenu from "../../Orders/Components/OrderKebabMenu";

const UserWishList = () => {
    const data = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="w-full h-max flex flex-col gap-4 mt-4">
                <p>Wishlist</p>
                <div className="w-full h-max flex flex-col overflow-x-auto scrollbar-none bg-white">
                    <div className="w-full h-max flex items-center bg-white  ">
                        <div className="w-max h-12 flex items-center gap-5 text-xs font-bold border-b border-b-gray-300 px-2 ">
                            <div className="w-60 h-max">Product</div>
                            <div className="w-52 h-max">Price</div>
                            <div className="w-10 h-max">Action</div>
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col bg-white  ">
                        {data.map((index) => (
                            <div
                                className="w-max h-14 flex items-center gap-5 text-xs font-medium border-b border-b-gray-300 px-2"
                                key={index}
                            >
                                <div className="w-60 h-max flex items-center gap-2">
                                    <div className="w-max h-max">
                                        <img
                                            src=""
                                            alt=""
                                            className="w-9 h-9 bg-red-200 rounded"
                                        />
                                    </div>
                                    <p>Iphone 12 Pro Max</p>
                                </div>
                                <div className="w-52 h-max flex items-center">
                                    <p className="w-max h-max px-3 py-[2px] rounded-full bg-green-300">
                                        N10,000,000
                                    </p>
                                </div>
                                <div className="w-10 flex items-center justify-center h-max">
                                    <OrderKebabMenu />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserWishList;
