import React from "react";

// 여기에 Nav랑 Footer를 가져옴
import Nav from './Nav'
import MainTop from "./MainTop";
import Addfilter from './Addfilter'
import AddList from './AddList'
import Footer from './Footer'


function App(){
    return(
        <div id="wrap">
            <Nav />
            <MainTop />
            <div>
                <Addfilter />
                <AddList />
            </div>
            <Footer />
        </div>
    )
}


export default App