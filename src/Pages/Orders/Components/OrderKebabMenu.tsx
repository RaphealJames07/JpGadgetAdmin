import React from "react";
import type {MenuProps} from "antd";
import {Dropdown, message} from "antd";
import {CiMenuKebab} from "react-icons/ci";

const onClick: MenuProps["onClick"] = ({key}) => {
    message.info(`Click on item ${key}`);
};

const items: MenuProps["items"] = [
    {
        label: "View order",
        key: "1",
    },
    {
        label: "View order",
        key: "2",
    },
    
];

const OrderKebabMenu: React.FC = () => (
    <Dropdown menu={{items, onClick}}>
        <a onClick={(e) => e.preventDefault()}>
            <CiMenuKebab className="cursor-pointer rotate-90" size={22} />
        </a>
    </Dropdown>
);

export default OrderKebabMenu;
