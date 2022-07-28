import React from "react";
import './Addfilter.css'

import {BsSliders} from 'react-icons/bs'

function Addfilter({handleFilter}){
    return(
        <div id="filter">
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
                            <dd onClick={()=> handleFilter('color', 'black')}>블랙</dd>
                            <dd onClick={()=> handleFilter('color', 'silver')}>실버</dd>
                            <dd onClick={()=> handleFilter('color', 'silver&balck')}>블랙&실버</dd>
                        </dl>
                <dl className="itemType">
                            <dt>타입</dt>
                            <dd>싱글 타입</dd>
                            <dd>더블 타입</dd>
                        </dl>
                <ul className="priceForm">
                    <li>가격</li>
                    <li>
                        <label htmlFor="userMax">최고가격</label>
                        <input id="userMax" readOnly />
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