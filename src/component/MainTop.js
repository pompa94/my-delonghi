import React from "react";
import './MainTop.css'

import {AiFillCaretRight} from 'react-icons/ai'

function MainTop(){
    return(
        <div id="box01">
            <ul>
                <li>홈</li>
                <li><AiFillCaretRight /></li>
                <li>커피</li>
                <li><AiFillCaretRight /></li>
                <li>커피머신</li>
            </ul>
            <h2>전자동 커피머신</h2>
        </div>
    )
}

export default MainTop