export async function fetchAPI() {
    const availableChildRouteList = await fetch('https://gw10.jotno.dev/admin-api/org/documentation/getRoutesWithAvailableChildRoutes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const availableChildRoutes = await availableChildRouteList.json()
    if (availableChildRoutes.errors) {
        throw new Error('Failed to fetch API')
    }

    return availableChildRoutes
}