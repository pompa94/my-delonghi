import React from "react";
import './Nav.css'

// 아이콘 연결
import {GiEarthAsiaOceania} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'



function Nav(){
    return(
        <header>
            <div id="header">
            <h1>
                <a>
                    <img src="./images/Top_Logo1.png" alt="메인로고" />
                </a>
            </h1>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="#">커피</a>
                    </li>
                    <li>
                        <a href="#">주방가전</a>
                    </li>
                    <li>
                        <a href="#">계절가전</a>
                    </li>
                    <li>
                        <a href="#">고객지원</a>
                    </li>
                    <li>
                        <a href="#">VIP클럽</a>
                    </li>
                    <li>
                        <a href="#">새소식</a>
                    </li>
                </ul>
            </nav>
            <div className="sub">
                <dl className="lang">
                        <dt>
                            <p>
                                <GiEarthAsiaOceania />
                                <span>Korea(Republic of)대한민국</span>
                            </p>
                        </dt>
                        <dd>
                            <p><GrClose /></p>
                            <dl>
                                <dd>
                                    <span>KOR</span>
                                </dd>
                                <dd>
                                    <span>ENG</span>
                                </dd>
                                <dd>
                                    <span>JPN</span>
                                </dd>
                                <dd>
                                    <span>GER</span>
                                </dd>
                            </dl>
                        </dd>
                    </dl>        
            </div>

            </div>
        </header>
    )
}

export default Nav