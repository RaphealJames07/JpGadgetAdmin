import {useState} from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DashboardHeaderTop = () => {
    const DatePick = () => {
        // const [dateRange, setDateRange] = useState([null, null]);
        const [startDate, setStartDate] = useState();
        const [endDate, setEndDate] = useState();
        const onChange = (dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
        };
        return (
            <ReactDatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={onChange}
                isClearable={true}
                className="border-2 border-gray-300 rounded w-max px-2"
                maxDate={new Date()}
                placeholderText="select date from and to --"
            />
        );
    };
    return (
        <div className="w-full h-max  flex items-center justify-between phone:flex-col phone:gap-2 phone:items-start">
            <p className="text-lg flex flex-col font-semibold">
                Good Morning Rapheal{" "}
                <span className="text-xs text-gray-400 font-normal">
                    Welcome to your dashboard, see what's happening in your
                    store today
                </span>
            </p>
            <div className="w-max h-max flex gap-1 mr-5 phone:mr-0">
                <p>Showing data for: </p>
                <DatePick />
            </div>
        </div>
    );
};

export default DashboardHeaderTop;
