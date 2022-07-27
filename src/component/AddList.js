import React from "react";
import './AddList.css'


function AddList({appointment}){
    return(
                <li>
                    <figure>
                        <img src={appointment.image} alt={appointment.name} />
                        <figcaption>
                            <dl>
                                <dt>{appointment.name}</dt>
                                <dd>
                                    <dl>
                                        <dt>작동방식</dt>
                                        <dd>{appointment.work}</dd>
                                    </dl>
                                    <dl>
                                        <dt>색상</dt>
                                        <dd>{appointment.color}</dd>
                                    </dl>
                                    <dl>
                                        <dt>타입</dt>
                                        <dd>{appointment.type}</dd>
                                    </dl>
                                    <dl>
                                        <dt>가격</dt>
                                        <dd>{appointment.price}</dd>
                                    </dl>
                                </dd>
                            </dl>
                        </figcaption>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figure>
                </li>
    )
}

export default AddList