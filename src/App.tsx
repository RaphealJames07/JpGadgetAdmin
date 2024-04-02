import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from "./Auth/Login";
import AdminLayout from "./Components/AdminLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Orders from "./Pages/Orders/Orders";
import Products from "./Pages/Products/Products";
import Users from "./Pages/Users.tsx/Users";
import Reports from "./Pages/Reports/Reports";
import Transactions from "./Pages/Transactions/Transactions";
import Settings from "./Pages/Settings/Settings";
import OrderDetails from "./Pages/Orders/Components/OrderDetails";
import OrderContent from "./Pages/Orders/Components/OrderContent";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "",
            element: <Login />,
        },
        {
            path: "admin",
            element: <AdminLayout />,
            children: [
                {
                    path: "dashboard",
                    element: <Dashboard />,
                },
                {
                    path: "orders",
                    element: <Orders />,
                    children: [
                        {
                            path: "",
                            element: <OrderContent />,
                        },
                        {
                            path: ":id",
                            element: <OrderDetails />,
                        },
                    ],
                },
                {
                    path: "products",
                    element: <Products />,
                },
                {
                    path: "users",
                    element: <Users />,
                },
                {
                    path: "reports",
                    element: <Reports />,
                },
                {
                    path: "transactions",
                    element: <Transactions />,
                },
                {
                    path: "settings",
                    element: <Settings />,
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
