import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./ckeeditor.css"; // Import custom CSS file for CKEditor styling

const Text = () => {
    const [data, setData] = useState<string>("");

    return (
        <>
            <div className="Text m-2 pl-2">
                <CKEditor
                    editor={ClassicEditor}
                    data={data}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setData(data);
                    }}
                />
            </div>
            <div
                className="w-full h-max bg-sky-100 p-2"
                dangerouslySetInnerHTML={{ __html: data }}
            />
        </>
    );
};

export default Text;
