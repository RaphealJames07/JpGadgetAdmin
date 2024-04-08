import {FaMoneyBillAlt, FaRegStar, FaStar} from "react-icons/fa";
import {MdEdit} from "react-icons/md";
import {PiWaveTriangleFill} from "react-icons/pi";

import {IoIosListBox, IoMdCash} from "react-icons/io";
import {useState} from "react";

const ViewProduct = () => {
    const [showSpec, setShowSpec] = useState<boolean>(true);
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [showReview, setShowReview] = useState<boolean>(false);
    const revData = [1, 2, 3, 4, 5];

    const handleShowSpec = () => {
        setShowSpec(true);
        setShowDetails(false);
        setShowReview(false);
    };
    const handleShowDetails = () => {
        setShowSpec(false);
        setShowDetails(true);
        setShowReview(false);
    };
    const handleSHowReview = () => {
        setShowSpec(false);
        setShowDetails(false);
        setShowReview(true);
    };

    return (
        <>
            <div className="w-full h-max min-h-full  flex flex-col gap-2 text-gray-600 bg-[#f2f6f9] px-3 pt-1 pb-5">
                <div className="w-full h-10 flex justify-between items-center">
                    <p className="font-medium">PRODUCT DETAILS</p>
                    <div className="w-max h-max flex items-center justify-center text-xs gap-2 cursor-pointer bg-white px-2 rounded-sm">
                        <span className="w-6 h-6 bg-[#fff] flex items-center justify-center rounded cursor-pointer">
                            <MdEdit />
                        </span>
                        Edit
                    </div>
                </div>
                <div className="w-full h-max flex phone:flex-col p-2 bg-white rounded border gap-5 border-gray-300 shadow-sm">
                    <div className="w-80 phone:w-full h-max flex flex-col gap-2">
                        <div className="w-full h-80 bg-[#f3f6f9] border border-gray-300 rounded flex items-center justify-center">
                            image
                        </div>
                        <div className="w-full h-max flex flex-wrap gap-2 flex-grow">
                            <div className="w-[23%] h-16 border border-gray-300 rounded cursor-pointer"></div>
                            <div className="w-[23%] h-16 border border-gray-300 rounded cursor-pointer"></div>
                            <div className="w-[23%] h-16 border border-gray-300 rounded cursor-pointer"></div>
                            <div className="w-[23%] h-16 border border-gray-300 rounded cursor-pointer"></div>
                            <div className="w-[23%] h-16 border border-gray-300 rounded cursor-pointer"></div>
                            <div className="w-[23%] h-16 border border-gray-300 rounded cursor-pointer"></div>
                        </div>
                    </div>
                    <div className=" overflow-y-auto scrollbar-none h-[70vh] p-2 phone:w-full viewproductdetailrightbox">
                        <div className="w-full h-max flex flex-col gap-4">
                            <div className="w-full h-max flex flex-col gap-2">
                                <p className="text-xl font-medium">
                                    Iphone 12 Pro Max 128 GB
                                </p>
                                <div className="w-max flex h-max gap-5 phone:gap-2 text-sm font-medium phone:flex-col">
                                    <p>Brand: Apple</p>
                                    <p>Category: Phones</p>
                                    <p>Date Created: 26 Mar 2024</p>
                                </div>
                            </div>
                            <div className="w-max h-max">
                                <p className="w-max flex items-center gap-2 text-sm">
                                    <span className="w-max flex h-max">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar />
                                        <FaRegStar />
                                    </span>
                                    <span>23 Customer Review</span>
                                </p>
                            </div>
                            <div className="w-full h-max flex justify-between gap-2 phone:flex-col">
                                <div className="w-1/4 phone:w-full h-16 border border-gray-300 rounded flex items-center p-2 gap-1">
                                    <div className="w-max h-max flex items-center justify-center">
                                        <span className="w-8 h-8 text-[#118686] flex items-center justify-center rounded-full">
                                            <FaMoneyBillAlt />
                                        </span>
                                    </div>
                                    <div className="w-max h-max flex flex-col text-xs font-semibold">
                                        <p className="text-gray-400 font-medium">
                                            Price
                                        </p>
                                        <p className="text-sm">N745,000</p>
                                    </div>
                                </div>
                                <div className="w-1/4 phone:w-full h-16 border border-gray-300 rounded flex items-center p-2 gap-1">
                                    <div className="w-max h-max flex items-center justify-center">
                                        <span className="w-8 h-8 text-[#118686] flex items-center justify-center rounded-full">
                                            <IoIosListBox />
                                        </span>
                                    </div>
                                    <div className="w-max h-max flex flex-col text-xs font-semibold">
                                        <p className="text-gray-400 font-medium">
                                            No of Orders
                                        </p>
                                        <p className="text-sm">N745,000</p>
                                    </div>
                                </div>
                                <div className="w-1/4 phone:w-full h-16 border border-gray-300 rounded flex items-center p-2 gap-1">
                                    <div className="w-max h-max flex items-center justify-center">
                                        <span className="w-8 h-8 text-[#118686] flex items-center justify-center rounded-full">
                                            <PiWaveTriangleFill />
                                        </span>
                                    </div>
                                    <div className="w-max h-max flex flex-col text-xs font-semibold">
                                        <p className="text-gray-400 font-medium">
                                            Stocks
                                        </p>
                                        <p className="text-sm">N745,000</p>
                                    </div>
                                </div>
                                <div className="w-1/4 phone:w-full h-16 border border-gray-300 rounded flex items-center p-2 gap-1">
                                    <div className="w-max h-max flex items-center justify-center">
                                        <span className="w-8 h-8 text-[#118686] flex items-center justify-center rounded-full">
                                            <IoMdCash />
                                        </span>
                                    </div>
                                    <div className="w-max h-max flex flex-col text-xs font-semibold">
                                        <p className="text-gray-400 font-medium">
                                            Revenue
                                        </p>
                                        <p className="text-sm">N745,000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-max flex gap-5">
                                <div className="w-max h-max flex flex-col gap-2">
                                    <p className="text-sm font-semibold">
                                        Colors:
                                    </p>
                                    <div className="w-max h-max flex gap-2">
                                        <span className="w-4 h-4 rounded-full bg-red-500"></span>
                                        <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                                        <span className="w-4 h-4 rounded-full bg-pink-500"></span>
                                        <span className="w-4 h-4 rounded-full bg-black"></span>
                                        <span className="w-4 h-4 rounded-full bg-white border border-gray-500"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-max flex flex-col gap-2">
                                <p className="text-sm font-semibold">
                                    Description
                                </p>
                                <p className="text-xs">
                                    Tommy Hilfiger men striped pink sweatshirt.
                                    Crafted with cotton. Material composition is
                                    100% organic cotton. This is one of the
                                    world’s leading designer lifestyle brands
                                    and is internationally recognized for
                                    celebrating the essence of classic American
                                    cool style, featuring preppy with a twist
                                    designs.
                                </p>
                            </div>
                            <div className="w-full h-max">
                                <div className="w-full h-10 flex text-sm gap-4 font-semibold">
                                    <div
                                        className={`w-max transition-all duration-500 h-full flex items-center cursor-pointer justify-center ${
                                            showSpec
                                                ? "border-b border-b-green-400 text-green-400"
                                                : ""
                                        }`}
                                        onClick={handleShowSpec}
                                    >
                                        Specification
                                    </div>
                                    <div
                                        className={`w-max transition-all duration-500 h-full flex items-center cursor-pointer justify-center ${
                                            showDetails
                                                ? "border-b border-b-green-400 text-green-400"
                                                : ""
                                        }`}
                                        onClick={handleShowDetails}
                                    >
                                        Details
                                    </div>
                                    <div
                                        className={`w-max transition-all duration-500 h-full flex items-center cursor-pointer justify-center ${
                                            showReview
                                                ? "border-b border-b-green-400 text-green-400"
                                                : ""
                                        }`}
                                        onClick={handleSHowReview}
                                    >
                                        Ratings & Reviews
                                    </div>
                                </div>
                                <div className="w-full h-max border border-gray-300 rounded-sm p-4">
                                    {showSpec ? (
                                        <div className="w-full h-max flex flex-col text-xs font-semibold">
                                            <div className="w-full h-10 flex items-center border-b border-b-gray-300">
                                                <p className="font-semibold w-40">
                                                    Category
                                                </p>
                                                <p>Phones</p>
                                            </div>
                                            <div className="w-full h-10 flex items-center border-b border-b-gray-300">
                                                <p className="font-semibold w-40">
                                                    Brand
                                                </p>
                                                <p>Apple</p>
                                            </div>
                                            <div className="w-full h-10 flex items-center border-b border-b-gray-300">
                                                <p className="font-semibold w-40">
                                                    Color
                                                </p>
                                                <p>
                                                    Red,Blue,Green,Black,White
                                                </p>
                                            </div>
                                            <div className="w-full h-10 flex items-center border-b border-b-gray-300">
                                                <p className="font-semibold w-40">
                                                    Weight (kg)
                                                </p>
                                                <p>1</p>
                                            </div>
                                            <div className="w-full h-10 flex items-center border-b border-b-gray-300">
                                                <p className="font-semibold w-40">
                                                    Model
                                                </p>
                                                <p>12 Pro Max</p>
                                            </div>
                                        </div>
                                    ) : showDetails ? (
                                        <div className="w-full h-max flex flex-col gap-3">
                                            <p className="font-semibold text-lg">
                                                Iphone 12 Pro Max
                                            </p>
                                            <p className="text-xs">
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Placeat tempora quis sunt
                                                expedita esse natus nihil.
                                                Placeat tenetur quod consectetur
                                                laborum nobis nostrum, dolor
                                                delectus amet non explicabo
                                                architecto exercitationem error
                                                ratione totam dolorum dicta
                                                aperiam! Ad, laboriosam
                                                voluptatum quaerat, deleniti
                                                quasi quod vitae dolore natus,
                                                rem est excepturi. Animi beatae
                                                necessitatibus illo mollitia
                                                totam placeat fuga atque
                                                architecto delectus doloremque
                                                ipsam, saepe at, ratione,
                                                deserunt molestiae earum qui
                                                nihil maiores praesentium
                                                aspernatur voluptatem itaque!
                                                Quos, sequi sit soluta veniam at
                                                itaque id maiores debitis ab,
                                                ratione, asperiores corrupti ex
                                                quo? Distinctio odit magnam
                                                suscipit voluptatibus. Culpa
                                                sapiente debitis repellendus.
                                            </p>
                                        </div>
                                    ) : showReview ? (
                                        <div className="w-full h-max flex phone:flex-col gap-3">
                                            <div className="w-[35%] phone:w-full h-max flex flex-col gap-1 text-xs">
                                                <p className="text-sm font-semibold">
                                                    Ratings
                                                </p>
                                                <div className="w-full h-10 bg-[#f3f6f9] rounded flex justify-between items-center px-2">
                                                    <span className="w-max h-max flex gap-1 items-center">
                                                        <FaStar className="w-3 h-3" />
                                                        <FaStar className="w-3 h-3" />
                                                        <FaStar className="w-3 h-3" />
                                                        <FaStar className="w-3 h-3" />
                                                        <FaStar className="w-3 h-3" />
                                                    </span>
                                                    <p className=" font-semibold">
                                                        4.5 out of 5
                                                    </p>
                                                </div>
                                                <p className="font-semibold w-full flex justify-center">
                                                    Total 300 reviews
                                                </p>
                                                <div className="w-full h-max flex flex-col gap-2">
                                                    <div className="w-full h-max flex justify-between items-center">
                                                        <p>5 star</p>
                                                        <div className="w-24 h-1 bg-gray-400 rounded-full flex items-center mt-1">
                                                            <span className="w-[70%] h-full rounded-full bg-green-500"></span>
                                                        </div>
                                                        <p>2810</p>
                                                    </div>
                                                    <div className="w-full h-max flex justify-between items-center">
                                                        <p>4 star</p>
                                                        <div className="w-24 h-1 bg-gray-400 rounded-full flex items-center mt-1">
                                                            <span className="w-[70%] h-full rounded-full bg-green-500"></span>
                                                        </div>
                                                        <p>2810</p>
                                                    </div>
                                                    <div className="w-full h-max flex justify-between items-center">
                                                        <p>3 star</p>
                                                        <div className="w-24 h-1 bg-gray-400 rounded-full flex items-center mt-1">
                                                            <span className="w-[70%] h-full rounded-full bg-green-500"></span>
                                                        </div>
                                                        <p>2810</p>
                                                    </div>
                                                    <div className="w-full h-max flex justify-between items-center">
                                                        <p>2 star</p>
                                                        <div className="w-24 h-1 bg-gray-400 rounded-full flex items-center mt-1">
                                                            <span className="w-[70%] h-full rounded-full bg-green-500"></span>
                                                        </div>
                                                        <p>2810</p>
                                                    </div>
                                                    <div className="w-full h-max flex justify-between items-center">
                                                        <p>1 star</p>
                                                        <div className="w-24 h-1 bg-gray-400 rounded-full flex items-center mt-1">
                                                            <span className="w-[70%] h-full rounded-full bg-green-500"></span>
                                                        </div>
                                                        <p>2810</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[62%] phone:w-full h-max flex flex-col text-xs gap-2">
                                                <p className="text-sm font-semibold">
                                                    Reviews
                                                </p>
                                                <div className="w-full h-60 overflow-y-auto scrollbar-none flex flex-col gap-2">
                                                    {revData.map((index) => (
                                                        <div
                                                            className="w-full h-max rounded border border-gray-300 p-3 flex gap-2"
                                                            key={index}
                                                        >
                                                            <div className="w-max h-max flex pt-1">
                                                                <img
                                                                    src=""
                                                                    alt=""
                                                                    className="w-8 h-8 rounded-full bg-sky-400"
                                                                />
                                                            </div>
                                                            <div className="w-[88%] h-max flex flex-col gap-2">
                                                                <div className="w-full h-max flex flex-col">
                                                                    <p className="font-semibold text-sm">
                                                                        Rapheal
                                                                        Ukachukwu
                                                                        James
                                                                    </p>
                                                                    <span className="w-max h-max flex gap-1 items-center">
                                                                        <FaStar className="w-3 h-3" />
                                                                        <FaStar className="w-3 h-3" />
                                                                        <FaStar className="w-3 h-3" />
                                                                        <FaStar className="w-3 h-3" />
                                                                        <FaStar className="w-3 h-3" />
                                                                    </span>
                                                                    <p>
                                                                        10-20-2024
                                                                    </p>
                                                                </div>
                                                                <div className="w-full h-max flex flex-col">
                                                                    <p className="text-sm font-semibold">
                                                                        Comment
                                                                    </p>
                                                                    <p className="text-xs">
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit amet
                                                                        consectetur
                                                                        adipisicing
                                                                        elit.
                                                                        Repudiandae
                                                                        molestias
                                                                        natus
                                                                        modi
                                                                        quo.
                                                                        Quaerat
                                                                        consectetur
                                                                        at
                                                                        consequuntur
                                                                        quidem
                                                                        maxime,
                                                                        cupiditate
                                                                        voluptatem
                                                                        hic
                                                                        error,
                                                                        fuga
                                                                        esse,
                                                                        veniam
                                                                        inventore
                                                                        optio
                                                                        dolorum
                                                                        magni?
                                                                    </p>
                                                                </div>
                                                                <div className="w-full h-max flex flex-col">
                                                                    <p className="text-sm font-semibold">
                                                                        Photos
                                                                    </p>
                                                                    <div className="w-full h-max flex gap-1">
                                                                        <div className="w-10 h-10 rounded border border-gray-300"></div>
                                                                        <div className="w-10 h-10 rounded border border-gray-300"></div>
                                                                        <div className="w-10 h-10 rounded border border-gray-300"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewProduct;
