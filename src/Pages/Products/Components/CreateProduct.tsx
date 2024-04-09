import React, {useState} from "react";

const CreateProduct = () => {
    const [selectedFileNames, setSelectedFileNames] = useState<string>(
        "Click to select images"
    );
    const [features, setFeatures] = useState<string[]>([]);
    const [featuresValue, setFeaturesValue] = useState<string>("");
    const [colors, setColors] = useState<string[]>([]);
    const [colorValue, setColorValue] = useState<string>("");
    const [variant, setVariant] = useState<string>("single");
    const [imageData, setImageData] = useState<{[key: string]: File[]}>({});
    // console.log("Image_data:", imageData);
    const [disableColorInput, setDisableColorInput] = useState<boolean>(false);

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        color: string
    ) => {
        const files = e.target.files;
        if (files) {
            const fileArray = Array.from(files);
            const fileNames = fileArray.map((file) => file.name).join(", ");
            setSelectedFileNames(fileNames);
            setImageData({
                ...imageData,
                [color]: [...imageData[color], ...fileArray],
            });
        }
    };

    const handleAddFeature = () => {
        if (featuresValue.trim() !== "") {
            setFeatures([...features, featuresValue]);
            setFeaturesValue("");
        } else {
            return;
        }
    };

    const handleAddColor = () => {
        if (colorValue.trim() !== "") {
            setColors([...colors, colorValue]);
            setColorValue("");
            setImageData({...imageData, [colorValue]: []});
            if (variant === "single" || colors.length >= 1) {
                setDisableColorInput(true);
            }
        } else {
            return;
        }
    };

    const renderColorTags = () => {
        if (colors.length === 0) {
            return <p className="text-xs mt-2">Add some colors</p>;
        } else {
            return colors.map((color, index) => (
                <p
                    key={index}
                    className="w-max h-max px-2 py-1 font-semibold text-xs bg-gray-500 text-white rounded"
                >
                    {color}
                </p>
            ));
        }
    };

    const renderFileInputs = () => {
        return colors.length === 0 ? (
            <div className="w-full h-28 border-dotted border-2 rounded-lg cursor-pointer border-gray-300 flex items-center justify-center">
                Specify Color of product before adding images
            </div>
        ) : (
            colors.map((color, index) => (
                <>
                    <div className="w-full h-max flex items-center gap-3">
                        <div
                            key={index}
                            className="w-max h-max flex gap-2 items-center flex-col "
                        >
                            <input
                                type="file"
                                accept="image/jpeg, image/png, image/webp, image/svg+xml"
                                className="hidden"
                                onChange={(e) => handleFileChange(e, color)}
                                multiple
                                id={`fileInput_${color}`}
                            />
                            <label
                                className="cursor-pointer w-max h-max px-2 py-1 bg-blue-600 text-white font-semibold text-xs rounded"
                                htmlFor={`fileInput_${color}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const fileInput = document.getElementById(
                                        `fileInput_${color}`
                                    );
                                    if (fileInput) fileInput.click();
                                    {
                                        /* Trigger file input click */
                                    }
                                }}
                            >
                                + Add images for {color}
                            </label>
                            {imageData[color].length === 0 ? (
                                <p className="text-xs mt-2">
                                    0 images added for {color}
                                </p>
                            ) : (
                                <button
                                    className="w-max h-max px-2 py-1 bg-red-400 text-xs font-semibold rounded-sm text-white"
                                    onClick={() => {
                                        setImageData({
                                            ...imageData,
                                            [color]: [],
                                        });
                                        setSelectedFileNames("Click to select images")
                                    }}
                                >
                                    Clear images
                                </button>
                            )}
                        </div>
                        <div className="w-max h-max flex gap-2 items-center">
                            {imageData[color].map((file, index) => (
                                <div
                                    key={index}
                                    className="w-14 h-14 rounded border border-gray-300"
                                >
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={`img preview ${index}`}
                                        className="text-xs w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ))
        );
    };

    return (
        <>
            <p className="text-lg font-semibold">Create a product</p>
            <div className="w-full h-max flex flex-col gap-4">
                <div className="w-full h-max flex gap-4 justify-between">
                    <div className="w-[70%] h-max flex flex-col gap-2">
                        <div className="w-full h-max flex flex-col gap-1">
                            <p className="text-sm font-medium">Product Name</p>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="enter product name here"
                                className="text-xs w-full h-9 rounded border border-gray-300 outline-none pl-2 focus:border-green-300 focus:border transition-all duration-500"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-1">
                            <p className="text-sm font-medium">
                                Short Description
                            </p>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="enter short description"
                                className="text-xs w-full h-9 rounded border border-gray-300 outline-none pl-2 focus:border-green-300 focus:border transition-all duration-500"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-3">
                            <p className="text-sm font-medium">
                                Product Images
                            </p>
                            {variant === "single" ? (
                                <>
                                    {colors.length === 0 ? (
                                        <div className="w-full h-28 border-dotted border-2 rounded-lg cursor-pointer border-gray-300 flex items-center justify-center">
                                            Specify Color of product before
                                            adding images
                                        </div>
                                    ) : (
                                        colors.map((color, index) => (
                                            <>
                                                <div
                                                    className="w-full h-28 border-dotted border-2 rounded-lg cursor-pointer border-gray-300 flex items-center justify-center"
                                                    key={index}
                                                >
                                                    <input
                                                        type="file"
                                                        accept="image/jpeg, image/png, image/webp, image/svg+xml"
                                                        className="hidden"
                                                        onChange={(e) =>
                                                            handleFileChange(
                                                                e,
                                                                color
                                                            )
                                                        } // Pass the color to handleFileChange
                                                        multiple
                                                        id={`fileInput_${color}`}
                                                    />
                                                    <label
                                                        className="cursor-pointer w-full h-full border-none outline-none flex justify-center items-center bg-gray-200 rounded"
                                                        htmlFor={`fileInput_${color}`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            const fileInput =
                                                                document.getElementById(
                                                                    `fileInput_${color}`
                                                                );
                                                            if (fileInput)
                                                                fileInput.click();
                                                            {
                                                                /* Trigger file input click */
                                                            }
                                                        }}
                                                    >
                                                        <div className="w-max px-2 flex items-center text-sm flex-col justify-center h-full">
                                                            {selectedFileNames}
                                                            <p>
                                                                {
                                                                    imageData[
                                                                        color
                                                                    ].length
                                                                }{" "}
                                                                Image(s)
                                                                selected
                                                            </p>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="w-max h-max flex gap-2 items-center">
                                                    {imageData[color].map(
                                                        (file, index) => (
                                                            <div
                                                                key={index}
                                                                className="w-14 h-14 rounded border border-gray-300"
                                                            >
                                                                <img
                                                                    src={URL.createObjectURL(
                                                                        file
                                                                    )}
                                                                    alt={`img preview ${index}`}
                                                                    className="text-xs w-full h-full object-cover"
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                    {imageData[color].length ===
                                                    0 ? null : (
                                                        <button
                                                            className="w-max h-max px-2 py-1 bg-red-400 text-xs font-semibold rounded-sm text-white"
                                                            onClick={() => {
                                                                setImageData({
                                                                    ...imageData,
                                                                    [color]: [],
                                                                });
                                                                setSelectedFileNames(
                                                                    "Click to select images"
                                                                );
                                                            }}
                                                        >
                                                            Clear images
                                                        </button>
                                                    )}
                                                </div>
                                            </>
                                        ))
                                    )}
                                </>
                            ) : (
                                renderFileInputs()
                            )}
                        </div>
                    </div>
                    <div className="w-[30%] h-max flex flex-col gap-2">
                        <p className="text-sm">Organize</p>
                        <div className="w-full h-max flex flex-col gap-2 bg-white rounded-md p-2">
                            <div className="w-full h-max flex flex-col">
                                <p className="text-xs font-medium">Category</p>
                                <select
                                    name=""
                                    id=""
                                    className="w-full h-8 rounded outline-none border border-gray-300 text-xs focus:border-green-300 focus:border transition-all duration-500"
                                >
                                    <option value="">Select category</option>
                                    <option value="">Phones</option>
                                    <option value="">Phones</option>
                                    <option value="">Phones</option>
                                    <option value="">Phones</option>
                                    <option value="">Phones</option>
                                </select>
                            </div>
                            <div className="w-full h-max flex flex-col">
                                <p className="text-xs font-medium">Brand</p>
                                <select
                                    name=""
                                    id=""
                                    className="w-full h-8 rounded outline-none border border-gray-300 text-xs focus:border-green-300 focus:border transition-all duration-500"
                                >
                                    <option value="">Select brand</option>
                                    <option value="">Apple</option>
                                    <option value="">Samsung</option>
                                    <option value="">Techno</option>
                                    <option value="">Google Pixel</option>
                                </select>
                            </div>
                            <div className="w-full h-max flex flex-col">
                                <p className="text-xs font-medium">Model</p>
                                <select
                                    name=""
                                    id=""
                                    className="w-full h-8 rounded outline-none border border-gray-300 text-xs focus:border-green-300 focus:border transition-all duration-500"
                                >
                                    <option value="">Select model</option>
                                    <option value="">12 Pro Max</option>
                                    <option value="">11 Pro Max</option>
                                    <option value="">11 Pro Max</option>
                                    <option value="">11 Pro Max</option>
                                    <option value="">11 Pro Max</option>
                                </select>
                            </div>
                            <div className="w-full h-max flex flex-col">
                                <p className="text-xs font-medium">
                                    Space / Memory
                                </p>
                                <select
                                    name=""
                                    id=""
                                    className="w-full h-8 rounded outline-none border border-gray-300 text-xs focus:border-green-300 focus:border transition-all duration-500"
                                >
                                    <option value="">
                                        Select space / memory
                                    </option>
                                    <option value="">128 Gb</option>
                                    <option value="">64 Gb</option>
                                    <option value="">64 Gb</option>
                                    <option value="">64 Gb</option>
                                    <option value="">64 Gb</option>
                                </select>
                            </div>
                            <div className="w-full h-max flex flex-col">
                                <p className="text-xs font-medium">
                                    Product Variants
                                </p>
                                <select
                                    name=""
                                    id=""
                                    value={variant}
                                    onChange={(e) => setVariant(e.target.value)}
                                    className="w-full h-8 rounded outline-none border border-gray-300 text-xs focus:border-green-300 focus:border transition-all duration-500"
                                >
                                    <option value="single">Single</option>
                                    <option value="multiple">
                                        Multiple variants
                                    </option>
                                </select>
                            </div>
                            <div className="w-full h-max flex flex-col">
                                <p className="text-xs font-medium">Color</p>
                                <input
                                    type="text"
                                    placeholder="Enter all colors"
                                    value={colorValue}
                                    disabled={disableColorInput}
                                    onChange={(e) =>
                                        setColorValue(e.target.value)
                                    }
                                    className="w-1/2 h-8 rounded outline-none border border-gray-300 text-xs pl-2 focus:border-green-300 focus:border transition-all duration-500 disabled:cursor-not-allowed"
                                />
                                <div className="w-full h-max flex gap-2 mt-1 flex-wrap">
                                    {renderColorTags()}
                                </div>
                                <div className="w-full flex h-max gap-2 mt-1">
                                    <button
                                        className="w-max h-8 flex items-center justify-between bg-green-600 text-white font-medium text-xs px-3 rounded disabled:cursor-not-allowed disabled:bg-green-400"
                                        disabled={disableColorInput}
                                        onClick={handleAddColor}
                                    >
                                        Add Color
                                    </button>
                                    <button
                                        className="w-max h-8 flex items-center justify-between bg-red-500 text-white font-medium text-xs px-3 rounded "
                                        onClick={() => {
                                            setColors([]);
                                            setColorValue("");
                                            setImageData({});
                                            setDisableColorInput(false);
                                        }}
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max flex gap-4 justify-between">
                    <div className="w-[70%] h-max flex flex-col gap-2">
                        <div className="w-full h-max flex flex-col gap-1">
                            <p className="text-sm font-medium">
                                Full Product Description
                            </p>
                            <textarea
                                name=""
                                id=""
                                cols={10}
                                rows={10}
                                placeholder="write description here"
                                className="text-xs w-full h-max rounded outline-none pl-2
                    focus:border-green-300 focus:border transition-all
                    duration-500 pt-2"
                            ></textarea>
                        </div>
                        <div className="w-full h-max flex flex-col">
                            <p className="text-sm font-medium">
                                Product Features
                            </p>
                            <div className="w-full h-max flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Enter key features"
                                    value={featuresValue}
                                    onChange={(e) =>
                                        setFeaturesValue(e.target.value)
                                    }
                                    className="w-1/2 h-8 rounded outline-none border border-gray-300 text-xs pl-2 focus:border-green-300 focus:border transition-all duration-500"
                                />
                                <button
                                    className="w-max h-8 flex items-center justify-between bg-green-600 text-white font-medium text-xs px-4 rounded"
                                    onClick={handleAddFeature}
                                >
                                    Add
                                </button>
                                <button
                                    className="w-max h-8 flex items-center justify-between bg-red-600 text-white font-medium text-xs px-4 rounded"
                                    onClick={() => setFeatures([])}
                                >
                                    Clear
                                </button>
                            </div>
                            {features.length === 0 ? (
                                <p className="text-xs mt-2">
                                    Add some cool features
                                </p>
                            ) : (
                                <ul className="w-max h-max list-disc px-5 py-2 rounded text-xs mt-2 bg-white">
                                    {features.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="w-[30%] h-max flex flex-col gap-2">
                        <p className="text-sm">Others</p>
                        <div className="w-full h-max flex flex-col gap-2 bg-white rounded-md p-2">
                            <div className="w-full h-max flex flex-col">
                                <p className="text-xs font-medium">Price</p>
                                <input
                                    type="number"
                                    placeholder="Enter product price"
                                    className="w-full h-8 rounded outline-none border border-gray-300 text-xs pl-2 focus:border-green-300 focus:border transition-all duration-500"
                                />
                            </div>
                            <div className="w-full h-max flex flex-col">
                                <p className="text-xs font-medium">
                                    Slash Price
                                </p>
                                <input
                                    type="number"
                                    placeholder="Enter product price"
                                    className="w-full h-8 rounded outline-none border border-gray-300 text-xs pl-2 focus:border-green-300 focus:border transition-all duration-500"
                                />
                            </div>
                            <div className="w-full h-max flex flex-col">
                                <p className="text-xs font-medium">
                                    Stock Quantity
                                </p>
                                <input
                                    type="number"
                                    placeholder="Enter quantity"
                                    className="w-full h-8 rounded outline-none border border-gray-300 text-xs pl-2 focus:border-green-300 focus:border transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateProduct;
