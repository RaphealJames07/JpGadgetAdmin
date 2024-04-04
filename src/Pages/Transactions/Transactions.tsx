import SummaryBoxes from "./Components/SummaryBoxes";
import TransactionGraph from "./Components/TransactionGraph";
import TransactionsList from "./Components/TransactionsList";

const Transactions = () => {
    return (
        <>
            <div className="w-full h-max min-h-full  flex flex-col gap-3 text-gray-600 bg-[#f2f6f9] px-3 pt-1 pb-5">
                <p className="text-lg font-semibold">Transactions</p>
                <SummaryBoxes />
                <TransactionGraph />
                <TransactionsList/>
            </div>
        </>
    );
};

export default Transactions;
