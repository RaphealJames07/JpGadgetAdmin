import React, {useState} from "react";

const CreateProduct = () => {
    const [fileInput, setFileInput] = useState<HTMLInputElement | null>(null);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [selectedFileNames, setSelectedFileNames] = useState<string>(
        "Click to select images"
    );
    console.log(selectedFiles);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fileArray = Array.from(files);
            setSelectedFiles(fileArray);
            const fileNames = fileArray.map((file) => file.name).join(", ");
            setSelectedFileNames(fileNames);
        }
    };

    return (
        <>
            <p className="text-lg font-semibold">Create a product</p>
            <div className="w-full h-max flex flex-col gap-2">
                <div className="w-full h-max flex flex-col gap-1">
                    <p className="text-sm">Product Name</p>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="enter product name here"
                        className="text-xs w-full h-9 rounded outline-none pl-2 focus:border-green-300 focus:border transition-all duration-500"
                    />
                </div>
                <div className="w-full h-max flex flex-col gap-1">
                    <p className="text-sm">Product Images</p>
                    <div className="w-full h-28 border-dotted border-2 rounded-lg cursor-pointer border-gray-300 flex items-center justify-center">
                        <input
                            type="file"
                            accept="image/jpeg, image/png, image/webp, image/svg+xml"
                            className="hidden"
                            onChange={handleFileChange}
                            ref={(input) => setFileInput(input)}
                            id="fileInput"
                            multiple
                        />
                        <label
                            className="cursor-pointer w-full h-full border-none outline-none flex justify-center items-center bg-gray-200 rounded"
                            htmlFor="fileInput"
                        >
                            <div className="w-max px-2 flex items-center flex-col gap-2 justify-center h-full">
                                {selectedFileNames}
                                <p>{selectedFiles.length} Image(s) selected</p>
                            </div>
                        </label>
                    </div>
                    <div className="w-full h-max flex gap-2 mt-1">
                        {selectedFiles.map((file, index) => (
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
                <div className="w-full h-max flex flex-col gap-1">
                    <p className="text-sm">Product Description</p>
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
            </div>
        </>
    );
};

export default CreateProduct;
