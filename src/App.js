import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import "./App.scss";
import Header from "./Components/Header";
{/*подключить шрифт через линк 
настроить свг
*/}

function App () {
   
    return (
        <div className="wrapper">
        {/* <Header cartOpened={() => setCartOpened(true)} /> */}
        <Header/>
        <Routes>
        <Route path="/" element={ <Home />}/>
       <Route path="/favorite" element={<Favorite/>}/>
       {/* <Route path="/cart" element={</>}/> */}
        </Routes>
        </div>
        
    )
}

export default App;