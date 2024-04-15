import React from "react";
import {Menu, Dropdown, message} from "antd";
import {CiMenuKebab} from "react-icons/ci";
import {useNavigate} from "react-router-dom";

const {Item} = Menu;

const OrderKebabMenu: React.FC = () => {
    const nav = useNavigate();

    const handleMenuClick = (event: any) => {
        const key = event.key;
        if (key === "1") {
            // Navigate to homepage
            nav("/admin/orders/1");
        } else if (key === "2") {
            // Show message for deleting order
            message.info("Deleting order...");
        }
    };

    return (
        <Dropdown
            overlay={
                <Menu onClick={handleMenuClick}>
                    <Item key="1">View order</Item>
                    <Item key="2">Delete order</Item>
                </Menu>
            }
            trigger={["click"]}
        >
            <a onClick={(e) => e.preventDefault()}>
                <CiMenuKebab className="cursor-pointer rotate-90" size={22} />
            </a>
        </Dropdown>
    );
};

export default OrderKebabMenu;
