
import React  from "react";
import {GetStaticPaths} from "next";
import {fetchAPI} from "@/lib/api";

export default function Index({tutorial}) {
    return (
        <div dangerouslySetInnerHTML={{__html: tutorial?.details}}>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    const response = await fetch('https://gw10.jotno.dev/admin-api/org/documentation/getRoutesWithAvailableChildRoutes')
    console.log(response)
    const routesHasTutorial = await response?.json()
    return {
        paths: routesHasTutorial.map((res: any) =>
            ({ params: { name: res?.routeDetails?.parentRouteLabel, id: String(res?.documentId) }})), //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}


export async function getStaticProps({ params }) {
    console.log("params::", params)
    const res = await fetch(`https://gw10.jotno.dev/admin-api/org/documentation/getDocumentById/${Number(params.id)}`)
    console.log(res)
    const tutorial = await res.json()

    return { props: { tutorial } }
}