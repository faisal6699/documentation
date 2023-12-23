import React, {useEffect, useState} from "react";
import { useRouter } from 'next/navigation'
import {fetchAPI} from "@/lib/api";
import {PanelMenu} from "primereact/panelmenu";
import {Props} from "next/script";


export default function Navigation({ parentRoutes }) {
    const router = useRouter()
    const [items, setItems] = useState([]);


    console.log(parentRoutes)

    useEffect(() => {
        function getChildRoutes(childRoutes: any, item) {
            const routes = childRoutes.filter(routeItem => routeItem?.routeDetails?.parentRouteId === item.index)?.map(itemChild => {
                return {
                    label: itemChild?.routeDetails.label,
                    id: itemChild?.routeDetails?.id,
                    command: () => {
                        router.push(`/${item.label}/${itemChild?.documentId}`)
                    }
                }
            })
            return routes
        }

        fetchAPI().then(childRoutes => {

            const allItems = parentRoutes.map((item, index) => {
                return {
                    label: item.label,
                    id: item.id,
                    index: item.index,
                    items: getChildRoutes(childRoutes, item),

                }
            })
            allItems.unshift({
                label: "Home",
                command: () => {
                    router.push("/");
            }
            })
            console.log("allItems::", allItems)
            setItems(allItems)
        })
    }, [])

    return(
        <div className={""}>
            <PanelMenu model={items} className="" />
        </div>
    )
}
