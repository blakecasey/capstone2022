export default function ServerEntry(data) {
    const name = data.data.name
    const server = data.data.data;
    
    // Copy IP to Clipboard
    // {name.name}
    function copyIp() {
        navigator.clipboard.writeText(data.name).then(() => alert("Copied IP to clipboard"));
    }
    
    // Check if Server Exists
    if (!server || !server["online"]) {
        return <h1>No Server Found</h1>
    }
    
    return (
        <div className={"server"}>
            <div className={"server-header"}>
                <img className={"server-icon"} alt={`${name.name}'s Icon`} src={server.icon} />
    
                <div className={"server-name"}>
                    
                </div>
                
                <div className={"server-ip"}>
                    {name.ip}
                </div>
    
                <div className={"server-online"}>
                    {server.players.online}
                    <div className={"slash"}>/</div>
                    {server.players.max}
                </div>
                
                <div className={`server-status ${server.online ? "online" : "offline"}`}>
                    {server.online ? "Online" : "Offline"}
                </div>
            </div>
            
            <div className={"motd"}>
                <div dangerouslySetInnerHTML={{ __html: server.motd.html[0] }} />
                <div dangerouslySetInnerHTML={{ __html: server.motd.html[1] }} />
            </div>
            
            <button onClick={() => copyIp()}>
                Copy IP
            </button>
        </div>
    );
}