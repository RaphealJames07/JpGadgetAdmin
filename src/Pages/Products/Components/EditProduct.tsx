import {Modal} from "antd";
import {useState} from "react";
import {TbLetterX} from "react-icons/tb";

const EditProduct = () => {
    const [editMode, setEditMode] = useState<boolean>(true);
    const [deleteColor, setDeleteColor] = useState<boolean>(false);
    const [addColor, setAddColor] = useState<boolean>(false);

    return (
        <>
            <div className="w-full h-max flex flex-col gap-2 ">
                <p>Edit Product</p>
                <div className="w-full h-max flex flex-col gap-2 bg-gray-100 p-2">
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm font-medium">Product Name</p>
                        <input
                            type="text"
                            className="w-full h-8 rounded border border-gray-300 transition-all duration-500 shadow-sm focus:shadow-green-200 outline-none text-xs pl-2 disabled:cursor-not-allowed"
                            disabled={editMode}
                        />
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm font-medium">Category</p>
                        <select
                            name=""
                            id=""
                            disabled={editMode}
                            className="w-full h-8 rounded border border-gray-300 transition-all duration-500 shadow-sm focus:shadow-green-200 outline-none text-xs pl-2 disabled:cursor-not-allowed disabled:bg-gray-100"
                        >
                            <option value="">Phones</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm font-medium">Brand</p>
                        <select
                            name=""
                            id=""
                            disabled={editMode}
                            className="w-full h-8 rounded border border-gray-300 transition-all duration-500 shadow-sm focus:shadow-green-200 outline-none text-xs pl-2 disabled:cursor-not-allowed disabled:bg-gray-100"
                        >
                            <option value="">Apple</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm font-medium">Price</p>
                        <input
                            type="number"
                            className="w-full h-8 rounded border border-gray-300 transition-all duration-500 shadow-sm focus:shadow-green-200 outline-none text-xs pl-2 disabled:cursor-not-allowed"
                            disabled={editMode}
                        />
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm font-medium">Stock</p>
                        <input
                            type="number"
                            className="w-full h-8 rounded border border-gray-300 transition-all duration-500 shadow-sm focus:shadow-green-200 outline-none text-xs pl-2 disabled:cursor-not-allowed"
                            disabled={editMode}
                        />
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm font-medium">Color</p>
                        <div className="w-full h-max flex items-center gap-4">
                            <div className="w-max h-max flex gap-2">
                                <span
                                    className="min-w-20 h-max px-2 text-white text-xs py-1 bg-red-500 rounded-sm flex items-center justify-around cursor-pointer"
                                    onClick={() => setDeleteColor(true)}
                                >
                                    Red
                                    <TbLetterX />
                                </span>
                                <span className="min-w-20 h-max px-2 text-white text-xs py-1 bg-blue-500 rounded-sm flex items-center justify-around cursor-pointer">
                                    Red
                                    <TbLetterX />
                                </span>
                                <span className="min-w-20 h-max px-2 text-white text-xs py-1 bg-green-500 rounded-sm flex items-center justify-around cursor-pointer">
                                    Red
                                    <TbLetterX />
                                </span>
                                <span className="min-w-20 h-max px-2 text-white text-xs py-1 bg-black rounded-sm flex items-center justify-around cursor-pointer">
                                    Red
                                    <TbLetterX />
                                </span>
                            </div>
                            <div className="w-max h-max">
                                <div
                                    className="w-6 h-6 rounded border-dotted border border-gray-500 flex items-center justify-center cursor-pointer"
                                    onClick={() => setAddColor(true)}
                                >
                                    +
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm font-medium">Short description</p>
                        <textarea
                            name=""
                            id=""
                            disabled={editMode}
                            className="w-full h-14 border border-gray-300 transition-all duration-500 shadow-sm focus:shadow-green-200 outline-none text-xs pl-2 pt-2` disabled:cursor-not-allowed"
                        ></textarea>
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm font-medium">Full description</p>
                        <textarea
                            name=""
                            id=""
                            disabled={editMode}
                            className="w-full h-28 border border-gray-300 transition-all duration-500 shadow-sm focus:shadow-green-200 outline-none text-xs pl-2 pt-2` disabled:cursor-not-allowed"
                        ></textarea>
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm font-medium">Features</p>
                        <textarea
                            name=""
                            id=""
                            disabled={editMode}
                            className="w-full h-28 border border-gray-300 transition-all duration-500 shadow-sm focus:shadow-green-200 outline-none text-xs pl-2 pt-2` disabled:cursor-not-allowed"
                        ></textarea>
                    </div>
                </div>
            </div>
            <Modal
                open={deleteColor}
                closeIcon={true}
                onCancel={() => setDeleteColor(false)}
                // title="Product Details"
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
            >
                <div className="w-full h-max flex flex-col gap-2 items-center">
                    <p className="text-lg text-center">
                        Are you sure you want to delete this color?{" "}
                        <span className="text-red-500">
                            This action cannot be undone.
                        </span>
                    </p>
                    <p>
                        This will also remove all images associated with this
                        color
                    </p>
                    <div className="w-full h-max flex items-center justify-center gap-4">
                        <button
                            className="w-max h-max bg-green-500 rounded px-4 py-2 font-semibold text-xs text-white"
                            onClick={() => setDeleteColor(false)}
                        >
                            No, Cancel
                        </button>
                        <button className="w-max h-max bg-red-500 rounded px-4 py-2 font-semibold text-xs text-white">
                            Yes, Delete
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal
                open={addColor}
                closeIcon={true}
                onCancel={() => setAddColor(false)}
                title="Add new color"
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
            >
                <div className="w-full h-max flex flex-col gap-2">
                    <p>Color Name</p>
                    <input
                        type="text"
                        placeholder="enter color name"
                        className="w-full h-8 rounded border border-gray-300 transition-all duration-500 shadow-sm focus:shadow-green-200 outline-none text-xs pl-2 "
                    />
                    <div className="w-full h-16 border-dashed border rounded border-gray-400 flex items-center justify-center cursor-pointer">
                        <p>Click to select images</p>
                    </div>
                    <div className="w-full h-max flex flex-wrap gap-2">
                        <div className="w-10 h-10 rounded border border-gray-300"></div>
                        <div className="w-10 h-10 rounded border border-gray-300"></div>
                        <div className="w-10 h-10 rounded border border-gray-300"></div>
                        <div className="w-10 h-10 rounded border border-gray-300"></div>
                        <div className="w-10 h-10 rounded border border-gray-300"></div>
                    </div>
                    <div className="w-full h-max flex items-center justify-center gap-4 mt-2">
                        <button
                            className="w-max h-max bg-red-500 rounded px-4 py-2 font-semibold text-xs text-white"
                            onClick={() => setAddColor(false)}
                        >
                            Cancel
                        </button>
                        <button className="w-max h-max bg-green-500 rounded px-4 py-2 font-semibold text-xs text-white">
                            Add
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default EditProduct;
