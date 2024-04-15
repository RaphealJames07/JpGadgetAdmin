import {useNavigate} from "react-router";

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full h-screen bg-sky-200 flex items-center justify-center">
                <div className="w-[25%] h-max bg-white flex flex-col items-center justify-center gap-6 p-8 rounded-lg border border-gray-300">
                    <p className="text-2xl">Welcome Admin</p>
                    <div className="w-full h-max flex flex-col gap-2">
                        <p className="text-lg">Email</p>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="w-full h-10 border text-sm pl-4 border-gray-400 rounded-md outline-none"
                        />
                    </div>
                    <div className="w-full h-max flex flex-col gap-2">
                        <p className="text-lg">Password</p>
                        <input
                            type="password"
                            placeholder=""
                            className="w-full h-10 border text-sm pl-4 border-gray-400 rounded-md outline-none"
                        />
                    </div>
                    <button
                        className="textlg font-semibold w-full h-12 rounded text-white bg-sky-400"
                        onClick={() => navigate("/admin/dashboard")}
                    >
                        JUST CLICK TO LOGIN NO SECURITY YET
                    </button>

                    <p className="cursor-pointer">Forget your password?</p>
                    <p>All rights reserved, JP Gadgets ©2024</p>
                </div>
            </div>
        </>
    );
};

export default Login;
