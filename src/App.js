import banner from './images/minecraftserver.jpg';
import './App.css';
import ServerList from "./pages/ServerList";

//             <div className="header2">
// <h3 className="discord-text">test</h3>
// <h3 className="server-text">test2</h3>
// </div>

function App() {
  return (
      <>
        <div className="header">
            <img alt={"Banner"} src={banner} width="500" height="200"/>
            <a href="#scroll" className="button">VIEW SERVERS</a>
            

        </div>
          
          <div className="sub-header" id="scroll">
              <ServerList />
        </div>
        
        <div className="sidenav">
            <a href="#home">Home</a>
            <a href="#store">Store</a>
        </div>
          <div className="footer">
          <p>Footer</p>
        </div>
    </>
  );
}

export default App;
