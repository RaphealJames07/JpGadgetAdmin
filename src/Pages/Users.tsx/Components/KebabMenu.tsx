import React from "react";
import type {MenuProps} from "antd";
import {Dropdown, message} from "antd";
import {CiMenuKebab} from "react-icons/ci";

const onClick: MenuProps["onClick"] = ({key}) => {
    message.info(`Click on item ${key}`);
};

const items: MenuProps["items"] = [
    {
        label: "Block",
        key: "1",
    },
    {
        label: "Edit",
        key: "2",
    },
];

const KebabMenu: React.FC = () => (
    <Dropdown menu={{items, onClick}} placement="bottomRight">
        <a onClick={(e) => e.preventDefault()}>
            <CiMenuKebab className="cursor-pointer rotate-90" size={22} />
        </a>
    </Dropdown>
);

export default KebabMenu;
