import React from "react";
import './Addfilter.css'

import {BsSliders} from 'react-icons/bs'

function Addfilter(){
    return(
        <div className="filter">
            <dl className="filterClick">
                <dt><BsSliders />
                    <span>필터조정</span>
                </dt>
            </dl>

            <div>
                <dl className="itemWork">
                            <dt>커피머신</dt>
                            <dd>전자동 커피머신</dd>
                            <dd>반자동 커피머신</dd>
                        </dl>
                <dl className="itemColor">
                            <dt>컬러</dt>
                            <dd>블랙</dd>
                            <dd>실버</dd>
                            <dd>블랙&실버</dd>
                        </dl>
                <dl className="itemType">
                            <dt>타입</dt>
                            <dd>싱글 타입</dd>
                            <dd>더블 타입</dd>
                        </dl>
                <ul className="priceForm">
                    <li>가격</li>
                    <li>
                        <span>
                            <label htmlFor="userMax">최고가격</label>
                            <input id="userMax" readonly />
                        </span>
                    </li>
                    <li>
                        <input type="range" min="500000" max="1200000" />
                    </li>
                    <li>
                        <span>선택상품 갯수 : </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Addfilter