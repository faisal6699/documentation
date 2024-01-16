import Navigation from "@/components/Navigation";
import {useEffect, useState} from "react";

export default function NavigationWrapper() {
    const [mainRoutes, setMainRoutes] = useState([])
    useEffect(() => {
        const routes = async () => {
            const parentRoutes = await getParentRoutes();
            setMainRoutes(parentRoutes);
        }
        routes();
    }, [])
    return(
        mainRoutes.length ? <Navigation parentRoutes={mainRoutes}/> : ''
    )
}

export async function getParentRoutes() {
    try {
        const res = await fetch(`https://gw10.jotno.dev/admin-api/org/documentation/getRoutes`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const parentRoutes = await res.json();

        return parentRoutes;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return [];
    }
}