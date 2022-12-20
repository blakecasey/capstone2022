import * as React from "react";
import {fetchDefaults, fetchFromIp} from "../../lib/server";
import ServerEntry from "../../lib/server/ServerEntry";

export default class ServerList extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            searchText: "",
            searched: false,
            servers: [],
            searchedText: "",
            searchedServers: []
        }
    }
    
    componentDidMount() {
        fetchDefaults().then((data) => this.setState({ servers: data }));
    }
    
    renderList() {
        return this.state.servers.map((server, index) => {
            return (
                <div key={index}>
                    <ServerEntry data={server} />
                </div>
            )
        })
    }
    
    renderSearch() {
        return (
            <div>
                <h1>
                    Searched for {this.state.searchedText}
                </h1>
                
                <div>
                    <ServerEntry data={this.state.searchedServers} />
                </div>
            </div>
        )
    }
    
    async onSearch(event) {
        event.preventDefault();
        this.setState({
            searched: true,
            searchedText: this.state.searchText,
            searchedServers: await fetchFromIp(this.state.searchText)
        })
    }
    
    render() {
        return (
            <div>
                <h1 className="server-list-title">Server List</h1>
                
                <form onSubmit={(event) => this.onSearch(event)}>
                    <input type={"text"}
                           value={this.state.searchText}
                           placeholder={"Search IP"}
                           onChange={(event) => this.setState({ searchText: event.target.value })} />
                    
                    <button className={"search"}>Search</button>
                </form>
                
                <div className={"server-list"}>
                    {this.state.searched ? this.renderSearch() : this.renderList()}
                </div>
            </div>
        )
    }
    
}