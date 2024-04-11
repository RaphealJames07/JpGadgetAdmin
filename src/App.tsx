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
import ViewProduct from "./Pages/Products/Components/ViewProduct";
import EditProduct from "./Pages/Products/Components/EditProduct";
import CreateProduct from "./Pages/Products/Components/CreateProduct";
import ProductContent from "./Pages/Products/Components/ProductContent";
import Text from "./Text";
import UsersList from "./Pages/Users.tsx/Components/UsersList";
import UserProfile from "./Pages/Users.tsx/Components/UserProfile";

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
                    children: [
                        {
                            path: "",
                            element: <ProductContent />,
                        },
                        {
                            path: "create",
                            element: <CreateProduct />,
                        },
                        {
                            path: "view/:id",
                            element: <ViewProduct />,
                        },
                        {
                            path: "edit/:id",
                            element: <EditProduct />,
                        },
                    ],
                },
                {
                    path: "users",
                    element: <Users />,
                    children: [
                        {
                            path: "",
                            element: <UsersList />,
                        },
                        {
                            path: "profile/:id",
                            element: <UserProfile />,
                        },
                    ],
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
                {
                    path: "test",
                    element: <Text />,
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
