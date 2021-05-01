import React from 'react'
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/nav";


function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Nav/>
            <AboutUs/>
        </div>
    );
}

export default App;
