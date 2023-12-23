"use client"
import React from "react";
import {Menubar} from "primereact/menubar";
import {Button} from "primereact/button";

export default function TopBar() {
    const items = [
    ]
    const end = <Button className={'p-2'} label="Logout" />;
    return(
        <Menubar model={items} end={end} />
    )
}