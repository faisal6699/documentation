'use client'
import React, {useEffect} from "react";
import {Menu} from "primereact/menu";
import {MenuItem} from "primereact/menuitem";
import { useRouter } from 'next/navigation'


export default function Navigation() {
    const router = useRouter()
    const items: MenuItem[] = [
        {
            label: 'Dashboard',
            command: () => {
               router.push("/")
            }
        },
        {
            label: 'Appointment',
            command: () => {
               router.push("/Appointment")
            }
        }
    ];

    useEffect(() => {

    })

    return(
        <Menu model={items} />
    )
}