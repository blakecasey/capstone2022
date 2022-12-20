const DEFAULT_SERVERS = [
    {
        name: 'Hypixel',
        ip: "play.hypixel.net",
    },
    {
        name: 'Mineplex',
        ip: "mineplex.com",
    },
    {
        name: 'LemonCloud',
        ip: "lemoncloud.org",
    },
    {
        name: 'MCHub',
        ip: "mchub.com",
    },
    {
        name: 'RealmOrigins',
        ip: "originrealms.com",
    },
]
async function fetchFromIp(ip) {
    const styledInfo = getStyledInfo(ip)
    
    if (styledInfo == null) {
        const data = {
            name: ip,
            ip
        }
        
        return fetchServer(data)
    }
    
    return fetchServer(styledInfo)
}

async function fetchServer(name) {
    const url = `https://api.mcsrvstat.us/2/${name.ip}`
    const response = await fetch(url)
    return {
        name,
        data: await response.json()
    }
}

async function fetchDefaults() {
    return await Promise.all(DEFAULT_SERVERS.map(fetchServer))
}

function getStyledInfo(ip) {
    return DEFAULT_SERVERS.find(server => server.ip === ip)
}

export { fetchFromIp, fetchServer, fetchDefaults }