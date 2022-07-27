import React from "react";
import './AddList.css'


function AddList(){
    return(
        <div className="product">
            <ul>
                <li>
                    <figure>
                        <img src="./images/pic1.jpg" alt="제품1" />
                        <figcaption>
                            <dl>
                                <dt>COFFEE_01</dt>
                                <dd>
                                    <dl>
                                        <dt>작동방식</dt>
                                        <dd>auto</dd>
                                    </dl>
                                    <dl>
                                        <dt>색상</dt>
                                        <dd>silver</dd>
                                    </dl>
                                    <dl>
                                        <dt>타입</dt>
                                        <dd>single</dd>
                                    </dl>
                                    <dl>
                                        <dt>가격</dt>
                                        <dd></dd>
                                    </dl>
                                </dd>
                            </dl>
                        </figcaption>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figure>
                </li>
            </ul>
        </div>
    )
}

export default AddList